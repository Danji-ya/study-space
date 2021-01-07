import tensorflow.compat.v1 as tf
import os
import numpy as np

tf.disable_v2_behavior()
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# tf.data를 이용하여 파일에서 데이터 읽기
# .skip(1) : 첫번째 줄은 제외하고(헤더)
# .repeat() : 파일의 끝에 도달하더라도 처음부터 무한 반복
# .batch(10) : 한 번에 10개씩 묶어서 사용

# 메모리의 한계와 속도 저하 때문에 데이터를 나누는 batch size
iterator = tf.data.TextLineDataset("dataDirectory/data-01-test-score.csv") \
    .repeat() \
    .batch(10)\
    .make_initializable_iterator()


# 데이터를 포함할 tensor
dataset = iterator.get_next()

lines = tf.decode_csv(dataset, record_defaults=[[0.], [0.], [0.], [0.]])

# size of batch
train_x_batch = tf.stack(lines[0:-1], axis=1)  # (?, 3)
train_y_batch = tf.stack(lines[-1:], axis=1)   # (?, 1)


X = tf.placeholder(tf.float32, shape=[None, 3])
Y = tf.placeholder(tf.float32, shape=[None, 1])
W = tf.Variable(tf.random_normal([3, 1]), name='weight')
b = tf.Variable(tf.random_normal([1]), name='bias')


# hypothesis
H = tf.matmul(X, W) + b

# loss function
cost = tf.reduce_mean(tf.square(H - Y))

# gradientDescent
gd = tf.train.GradientDescentOptimizer(learning_rate=1e-5)
train = gd.minimize(cost)

sess = tf.Session()
sess.run(tf.global_variables_initializer())
sess.run(iterator.initializer)

for step in range(2001):
    x_batch, y_batch = sess.run([train_x_batch, train_y_batch])    # import batch

    cost_val, hy_val, _ = sess.run([cost, H, train], feed_dict={X: x_batch, Y: y_batch})
    if step % 20 == 0:
        print(f'step= {step}  Cost= {cost_val} \nprediction= {hy_val}')

print('your score=')
print(sess.run(H, feed_dict={X: [[100, 70, 101]]}))



