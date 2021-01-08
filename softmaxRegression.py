import tensorflow.compat.v1 as tf
import os
import numpy as np
tf.set_random_seed(777)

tf.disable_v2_behavior()
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

xy = np.loadtxt("dataDirectory/data-04-zoo.csv", delimiter=',', dtype=np.float32)
x_data = xy[:, 0:-1]   # (101, 16)
y_data = xy[:, [-1]]   # (101, 1)


X = tf.placeholder(tf.float32, [None, 16])
Y = tf.placeholder(tf.int32, [None, 1])  # Y = 0 ~ 6
Y_classes = 7

Y_one_hot = tf.one_hot(Y, Y_classes)    # Rank =  n + 1
Y_one_hot = tf.reshape(Y_one_hot, [-1, Y_classes])  # Rank =  n + 1 -> n

W = tf.Variable(tf.random_normal([16, Y_classes]), name='weight')
b = tf.Variable(tf.random_normal([Y_classes]), name='bias')

# hypothesis
# result of probability for each label (sum of probability = 1)
logits = tf.matmul(X, W) + b
# H = tf.nn.softmax(logits)


# loss function (using cross_entropy)
# cost = tf.reduce_mean(-tf.reduce_sum(Y_one_hot * tf.log(H), axis=1))

# the value of labels is also can be update when training, which means
# you must set tf.stop_gradient(labels) if you use this function in classification problem.
cost = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits_v2(logits=logits,
                                                                 labels=tf.stop_gradient(Y_one_hot)))


# gradientDescent
gd = tf.train.GradientDescentOptimizer(learning_rate=0.1)
train = gd.minimize(cost)


predicted = tf.argmax(logits, 1)  # Returns the index with the largest value axis = 1
correct_predicted = tf.equal(predicted, tf.argmax(Y_one_hot, 1))
accuracy = tf.reduce_mean(tf.cast(correct_predicted, dtype=tf.float32))

# ===================================================================
sess = tf.Session()
sess.run(tf.global_variables_initializer())
feed = {X: x_data, Y: y_data}

for step in range(2001):
    sess.run(train, feed_dict=feed)
    if step % 200 == 0:
        loss, acc = sess.run([cost, accuracy], feed_dict=feed)
        print(f'step= {step:5}\t loss= {loss:.3f} acc= {acc:.2%}')
# ===================================================================
