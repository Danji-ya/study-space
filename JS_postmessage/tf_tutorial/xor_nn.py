import numpy as np
import tensorflow.compat.v1 as tf
import os
tf.disable_v2_behavior()


os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'


x_data = np.array([[0., 0.], [0., 1.], [1., 0.], [1., 1.]])
y_data = np.array([[0.], [1.], [1.], [0.]])


X = tf.placeholder(tf.float32, [None, 2])
Y = tf.placeholder(tf.float32, [None, 1])

# layer1
W1 = tf.Variable(tf.random_normal([2, 2]), name='Weight_1')
b1 = tf.Variable(tf.random_normal([2]), name='Bias_1')
L1 = tf.sigmoid(tf.matmul(X, W1) + b1)

# layer 2
W2 = tf.Variable(tf.random_normal([2, 1]), name='Weight_2')
b2 = tf.Variable(tf.random_normal([1]), name='Bias_2')
H = tf.sigmoid(tf.matmul(L1, W2) + b2)


# loss function
cost = -tf.reduce_mean(Y * tf.log(H) + (1 - Y) * tf.log(1 - H))

# gradientDescent
gd = tf.train.GradientDescentOptimizer(learning_rate=0.1)
train = gd.minimize(cost)

# calculate accuracy
predicated = tf.cast(H > 0.5, dtype=tf.float32)
accuracy = tf.reduce_mean(tf.cast(tf.equal(predicated, Y), dtype=tf.float32))


sess = tf.Session()
sess.run(tf.global_variables_initializer())
feed = {X: x_data, Y: y_data}

for step in range(10001):
    sess.run(train, feed_dict=feed)
    if step % 1000 == 0:
        print(f'step={step} cost={sess.run(cost, feed_dict=feed)}  \nW1, W2= {sess.run([W1, W2])}')


# test
print("================test=======================================")
c, a = sess.run([predicated, accuracy], feed_dict=feed)
print(f'Correct=\n{c} \nAccuracy= {a}')

