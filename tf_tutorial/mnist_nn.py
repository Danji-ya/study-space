import tensorflow.compat.v1 as tf
import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
tf.set_random_seed(777)
tf.disable_v2_behavior()


(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

# parameters
Y_classes = 10
training_epochs = 15
batch_size = 100
learning_rate = 0.001


X = tf.placeholder(tf.float32, [None, 784])
Y = tf.placeholder(tf.float32, [None, 10])


# feature scaling && type change
x_train = x_train.astype('float32') / 255.
x_test = x_test.astype('float32') / 255.
y_train = y_train.astype('int32')
y_test = y_test.astype('int32')

# reshape && one_hot encoding
x_train = x_train.reshape(-1, 784)
x_test = x_test.reshape(-1, 784)
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


# # ===============only 3 - layer with Relu===========================
# # cost first = 230.xxxxxxxxxxxxxxx
# # Layer1
# w1 = tf.Variable(tf.random_normal([784, 256]))
# b1 = tf.Variable(tf.random_normal([256]))
# l1 = tf.nn.relu(tf.matmul(X, w1) + b1)
# # Layer2
# w2 = tf.Variable(tf.random_normal([256, 256]))
# b2 = tf.Variable(tf.random_normal([256]))
# l2 = tf.nn.relu(tf.matmul(l1, w2) + b2)
# # Layer3
# w3 = tf.Variable(tf.random_normal([256,  10]))
# b3 = tf.Variable(tf.random_normal([10]))
# logits = tf.matmul(l2, w3) + b3     # No need to use softmax here
# # ===================================================================


# ===============only 3 - layer with Relu with xavier_initializer===========================
# cost first = 0.26xxxxxxxxxxxxxxxxxx
# Layer1
w1 = tf.get_variable(shape=[784, 256], initializer=xavier_init(784, 256), name='weight1')
b1 = tf.Variable(tf.zeros([256]), name='bias1') # using zeros
l1 = tf.nn.relu(tf.matmul(X, w1) + b1)
# Layer2
w2 = tf.get_variable(shape=[256, 256], initializer=xavier_init(256, 256), name='weight2')
b2 = tf.Variable(tf.zeros([256]), name='bias2')
l2 = tf.nn.relu(tf.matmul(l1, w2) + b2)
# Layer3
w3 = tf.get_variable(shape=[256, 10], initializer=xavier_init(256, 10), name='weight3')
b3 = tf.Variable(tf.zeros([10]), name='bias3')
logits = tf.matmul(l2, w3) + b3
# ===========================================================================================


# cross_entropy loss function
cost = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits_v2(logits=logits,
                                                                 labels=tf.stop_gradient(Y)))

# optimizer
optimizer = tf.train.AdamOptimizer(learning_rate=learning_rate).minimize(cost)

# calculate accuracy
is_equal = tf.equal(tf.argmax(logits, 1), tf.argmax(Y, 1))
accuracy = tf.reduce_mean(tf.cast(is_equal, dtype=tf.float32))


sess = tf.Session()
sess.run(tf.global_variables_initializer())



# run training
num_iterations = int(len(x_train) / batch_size)
for epoch in range(training_epochs):
    sess.run(iterator.initializer) # start first
    avg_cost = 0

    for i in range(num_iterations):
        batch_x, batch_y = sess.run(next_element) # next batch
        _, cost_val = sess.run([optimizer, cost], feed_dict={X: batch_x, Y: batch_y})
        avg_cost += (cost_val / num_iterations)

    print(f"=========Epoch : {(epoch + 1):04d}, Cost : {avg_cost:.9f}=============")

print(f'Accuracy= {sess.run(accuracy, feed_dict={X: x_test, Y: y_test}) : .4f}')













