import random
from matplotlib import pyplot as plt
import tensorflow.compat.v1 as tf
import os
from tensorflow.keras import datasets
tf.set_random_seed(777)

tf.disable_v2_behavior()
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'


Y_classes = 10  # 0 ~ 9
training_epochs = 15
batch_size = 100
train, test = datasets.mnist.load_data()   # load MNIST

# ============setting batch========================================
dataset = tf.data.Dataset.from_tensor_slices((train[0], train[1]))
dataset = dataset.repeat().batch(batch_size)
iterator = dataset.make_initializable_iterator()
next_element = iterator.get_next()
# ==================================================================


# ======= Data processing ==========================================
def feature_scaling_mnist(data):  # feature scaling

    x_data, y_data = data
    x_data = x_data.astype('float32') / 255.
    y_data = y_data.astype('int32')
    return x_data, y_data


def reshape_mnist(data):  # reshape && one_hot encoding

    x_data, y_data = data
    _, rows, cols = x_data.shape   # _, 28, 28
    x_data = x_data.reshape(-1, rows * cols)
    y_data = tf.keras.utils.to_categorical(y_data, Y_classes)
    return x_data, y_data


x_train, y_train = feature_scaling_mnist(train)
x_test, y_test = feature_scaling_mnist(test)
x_test, y_test = reshape_mnist((x_test, y_test))
# =====================================================================


X = tf.placeholder(tf.float32, [None, 784])
Y = tf.placeholder(tf.float32, [None, Y_classes])

W = tf.Variable(tf.random_normal([784, Y_classes]), name='Weight')
b = tf.Variable(tf.random_normal([Y_classes]), name='Bias')


# softmax && cross entropy
# v_2 Backpropagation to labels
logits = tf.matmul(X, W) + b
cost = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits_v2(logits=logits,
                                                                 labels=tf.stop_gradient(Y)))
# gradientDescent
gd = tf.train.GradientDescentOptimizer(learning_rate=0.1)
train = gd.minimize(cost)

# calculate accuracy
is_equal = tf.equal(tf.argmax(logits, 1), tf.argmax(Y, 1))
accuracy = tf.reduce_mean(tf.cast(is_equal, dtype=tf.float32))


# ===============session start=======================
sess = tf.Session()
sess.run(tf.global_variables_initializer())
sess.run(iterator.initializer)

num_iterations = int(len(x_train) / batch_size)
for epoch in range(training_epochs):
    avg_cost = 0

    for i in range(num_iterations):
        next_batch = feature_scaling_mnist(sess.run(next_element))
        x_batch, y_batch = reshape_mnist(next_batch)
        _, cost_val = sess.run([train, cost], feed_dict={X: x_batch, Y: y_batch})
        avg_cost += (cost_val / num_iterations)

    print(f"=========Epoch : {(epoch + 1):04d}, Cost : {avg_cost:.9f}=============")


print(f'Accuracy= {sess.run(accuracy, feed_dict={X: x_test, Y: y_test}) : .2f}')


# # prediction image
# r = random.randint(0, len(x_test) - 1)
# print("Label: ", sess.run(tf.argmax(y_test[r: r + 1], 1)))
# print(
#     "Prediction: ",
#     sess.run(tf.argmax(logits, 1), feed_dict={X: x_test[r: r + 1]}),
# )
#
# plt.imshow(
#     x_test[r: r + 1].reshape(28, 28),
#     cmap="Greys",
#     interpolation="nearest",
# )
# plt.show()
