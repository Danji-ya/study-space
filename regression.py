import tensorflow.compat.v1 as tf
import os
tf.disable_v2_behavior()
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

W = tf.Variable(tf.random_normal([1]), name='weight')
b = tf.Variable(tf.random_normal([1]), name='bias')
X = tf.placeholder(tf.float32, shape=[None])
Y = tf.placeholder(tf.float32, shape=[None])


# linear model X * W + b
hypothesis = X * W + b

# loss function
cost = tf.reduce_mean(tf.square(hypothesis - Y))

# GradientDescent setting
optimizer = tf.train.GradientDescentOptimizer(learning_rate=0.1)
train = optimizer.minimize(cost)

sess = tf.Session()
sess.run(tf.global_variables_initializer())
for step in range(501):
    before_w = sess.run(W)
    if step % 20 == 0:
        print("step= %d  W= %f   b= %f" % (step, sess.run(W), sess.run(b)))
    sess.run(train, feed_dict={X: [1, 2, 3, 4], Y: [2, 4, 6, 8]})

print("-------------------------------")g
print(sess.run(hypothesis, feed_dict={X: [5]}))


# using keras
# x_train = [1, 2, 3, 4]
# y_train = [2, 4, 6 ,8]
# tf.model = tf.keras.Sequential()
#
# # units == output shape, input_dim == input shape
# tf.model.add(tf.keras.layers.Dense(units=1, input_dim=1))
#
# sgd = tf.keras.optimizers.SGD(lr=0.1)  # SGD == standard gradient descendent, lr == learning rate
# tf.model.compile(loss='mse', optimizer=sgd)  # mse == mean_squared_error, 1/m * sig (y'-y)^2
#
# # prints summary of the model to the terminal
# tf.model.summary()
#
# # fit() executes training
# tf.model.fit(x_train, y_train, epochs=10)
#
# # predict() returns predicted value
# y_predict = tf.model.predict(np.array([5, 4]))
# print(y_predict)




