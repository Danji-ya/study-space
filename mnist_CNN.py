import numpy as np
import matplotlib.pyplot as plt
import tensorflow.compat.v1 as tf
import os
tf.disable_v2_behavior()
tf.set_random_seed(777)

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

# parameters
Y_classes = 10
training_epochs = 15
batch_size = 100
learning_rate = 0.001


# feature scaling && type change
x_train = x_train.astype('float32') / 255.
x_test = x_test.astype('float32') / 255.
y_train = y_train.astype('int32')
y_test = y_test.astype('int32')

# reshape && one_hot encoding
x_train = x_train.reshape(-1, 28, 28, 1)           # channel = 1
x_test = x_test.reshape(-1, 28, 28, 1)
y_train = tf.keras.utils.to_categorical(y_train, Y_classes)
y_test = tf.keras.utils.to_categorical(y_test, Y_classes)

# data batch
train_ds = tf.data.Dataset.from_tensor_slices((x_train, y_train)).batch(batch_size)
iterator = train_ds.make_initializable_iterator()
next_element = iterator.get_next()


# http://stackoverflow.com/questions/33640581/how-to-do-xavier-initialization-on-tensorflow
def xavier_init(n_inputs, n_outputs, uniform=True):
    if uniform:
        # 6 was used in the paper.
        init_range = tf.sqrt(6.0 / (n_inputs + n_outputs))
        return tf.random_uniform_initializer(-init_range, init_range)
    else:
        # 3 gives us approximately the same limits as above since this repicks
        # values greater than 2 standard deviations from the mean.
        stddev = tf.sqrt(3.0 / (n_inputs + n_outputs))
        return tf.truncated_normal_initializer(stddev=stddev)


class Model:
    def __init__(self, sess, name):
        self.sess = sess
        self.name = name
        self._conv_net()

    def _conv_net(self):
        with tf.variable_scope(self.name):  # tf.get_variable() 선언한 변수들을 각자 다른 namespace로 관리가능

            self.keep_prob = tf.placeholder(tf.float32)
            self.X = tf.placeholder(tf.float32, [None, 28, 28, 1])
            self.Y = tf.placeholder(tf.float32, [None, 10])

            # Convolution Layer1
            w1 = tf.Variable(tf.random_normal([3, 3, 1, 32], stddev=0.01))
            l1 = tf.nn.conv2d(self.X, w1, strides=[1, 1, 1, 1], padding='SAME')
            l1 = tf.nn.relu(l1)
            l1 = tf.nn.max_pool(l1, ksize=[1, 2, 2, 1], strides=[1, 2, 2, 1], padding='SAME')
            l1 = tf.nn.dropout(l1, keep_prob=self.keep_prob)
            '''
            Tensor("Conv2D:0", shape=(?, 28, 28, 32), dtype=float32)
            Tensor("Relu:0", shape=(?, 28, 28, 32), dtype=float32)
            Tensor("MaxPool:0", shape=(?, 14, 14, 32), dtype=float32)
            Tensor("dropout/mul:0", shape=(?, 14, 14, 32), dtype=float32)
            '''

            # Convolution Layer2
            w2 = tf.Variable(tf.random_normal([3, 3, 32, 64], stddev=0.01))
            l2 = tf.nn.conv2d(l1, w2, strides=[1, 1, 1, 1], padding='SAME')
            l2 = tf.nn.relu(l2)
            l2 = tf.nn.max_pool(l2, ksize=[1, 2, 2, 1], strides=[1, 2, 2, 1], padding='SAME')
            l2 = tf.nn.dropout(l2, keep_prob=self.keep_prob)
            '''
            Tensor("Conv2D_1:0", shape=(?, 14, 14, 64), dtype=float32)
            Tensor("Relu_1:0", shape=(?, 14, 14, 64), dtype=float32)
            Tensor("MaxPool_1:0", shape=(?, 7, 7, 64), dtype=float32)
            Tensor("dropout_1/mul:0", shape=(?, 7, 7, 64), dtype=float32)
            '''

            # Convolution Layer3
            w3 = tf.Variable(tf.random_normal([3, 3, 64, 128], stddev=0.01))
            l3 = tf.nn.conv2d(l2, w3, strides=[1, 1, 1, 1], padding='SAME')
            l3 = tf.nn.relu(l3)
            l3 = tf.nn.max_pool(l3, ksize=[1, 2, 2, 1], strides=[1, 2, 2, 1], padding='SAME')
            l3 = tf.nn.dropout(l3, keep_prob=self.keep_prob)
            '''
            Tensor("Conv2D_2:0", shape=(?, 7, 7, 128), dtype=float32)
            Tensor("Relu_2:0", shape=(?, 7, 7, 128), dtype=float32)
            Tensor("MaxPool_2:0", shape=(?, 4, 4, 128), dtype=float32)
            Tensor("dropout_2/mul:0", shape=(?, 4, 4, 128), dtype=float32)
            Tensor("Reshape_1:0", shape=(?, 2048), dtype=float32)
            '''

            # Fully connected layer4
            # Reshape conv output to fit fully connected layer input
            l3 = tf.reshape(l3, [-1, 4 * 4 * 128])

            w4 = tf.get_variable(shape=[4 * 4 * 128, 625], initializer=xavier_init(4 * 4 * 128, 625), name='weight4')
            b4 = tf.Variable(tf.random_normal([625]), name='bias4')
            l4 = tf.nn.relu(tf.matmul(l3, w4) + b4)
            l4 = tf.nn.dropout(l4, keep_prob=self.keep_prob)

            # Fully connected layer5
            w5 = tf.get_variable(shape=[625, 10], initializer=xavier_init(625, 10), name='weight5')
            b5 = tf.Variable(tf.random_normal([10]), name='bias5')

            self.logits = tf.matmul(l4, w5) + b5

            # cross_entropy loss function
            self.cost = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits_v2(logits=self.logits,
                                                                                  labels=tf.stop_gradient(self.Y)))

            # optimizer
            self.optimizer = tf.train.AdamOptimizer(learning_rate=learning_rate).minimize(self.cost)

            # calculate accuracy
            self.is_equal = tf.equal(tf.argmax(self.logits, 1), tf.argmax(self.Y, 1))
            self.accuracy = tf.reduce_mean(tf.cast(self.is_equal, dtype=tf.float32))

    def train(self, x_data, y_data, keep_prob=0.7):
        return self.sess.run([self.cost, self.optimizer], feed_dict={self.X: x_data, self.Y: y_data,
                                                                     self.keep_prob: keep_prob})

    def get_accuracy(self, x_data, y_data, keep_prob=1.0):
        return self.sess.run(self.accuracy, feed_dict={self.X: x_data, self.Y: y_data,
                                                                     self.keep_prob: keep_prob})


sess = tf.Session()
my_model = Model(sess, "my_model")

sess.run(tf.global_variables_initializer())

# run training
num_iterations = int(len(x_train) / batch_size)
for epoch in range(training_epochs):
    sess.run(iterator.initializer)  # start first
    avg_cost = 0

    for i in range(num_iterations):
        batch_x, batch_y = sess.run(next_element)  # next batch
        cost_val, _ = my_model.train(batch_x, batch_y)
        avg_cost += (cost_val / num_iterations)

    print(f"=========Epoch : {(epoch + 1):04d}, Cost : {avg_cost:.9f}=============")

print(f'Accuracy= {my_model.get_accuracy(x_test, y_test) : .4f}')












