import tensorflow.compat.v1 as tf
import os
import numpy as np
tf.set_random_seed(777)

tf.disable_v2_behavior()
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# 당뇨병 예측
xy = np.loadtxt("dataDirectory/data-03-diabetes.csv", delimiter=',', dtype=np.float32)
x_data = xy[:, 0:-1]   # (759, 8)
y_data = xy[:, [-1]]   # (759, 1)

X = tf.placeholder(tf.float32, shape=[None, 8])
Y = tf.placeholder(tf.float32, shape=[None, 1])

W = tf.Variable(tf.random_normal([8, 1]), name='weight')
b = tf.Variable(tf.random_normal([1]), name='bias')

# hypothesis ( result = 0 ~ 1 )
logits = tf.matmul(X, W) + b
H = tf.sigmoid(logits)


# loss function
cost = -tf.reduce_mean(Y * tf.log(H) + (1 - Y) * tf.log(1 - H))

# gradientDescent
gd = tf.train.GradientDescentOptimizer(learning_rate=0.01)
train = gd.minimize(cost)


# ===================================================================
sess = tf.Session()
sess.run(tf.global_variables_initializer())
feed = {X: x_data, Y: y_data}


for step in range(10001):
    sess.run(train, feed_dict=feed)
    if step % 200 == 0:
        print(f'step= {step} cost= {sess.run(cost, feed_dict=feed)}')
# ===================================================================


# True if H > 0.5 else false -> cast 1 or 0
predicted = tf.cast(H > 0.5, dtype=tf.float32)
accuracy = tf.reduce_mean(tf.cast(tf.equal(predicted, Y), dtype=tf.float32))

h, c, a = sess.run([H, predicted, accuracy], feed_dict=feed)
print("\nHypothesis: ", h, "\nCorrect (Y): ", c, "\nAccuracy: ", a)

# test
test = sess.run(predicted, feed_dict={X: [[-0.176471, 0.969849, 0.47541, 0, 0, 0.186289, -0.681469, -0.335333]]})
print(f'test_predicted= {test}')
