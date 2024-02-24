import tensorflow as tf
import numpy as np
from tensorflow.keras.layers import Dense, Flatten, Conv2D, MaxPool2D, Dropout

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


train_dataset = tf.data.Dataset.from_tensor_slices((x_train, y_train)).batch(batch_size)


class MYModel(tf.keras.Model):   # custom model
    def __init__(self, name):
        super(MYModel, self).__init__(name=name)
        self.conv1 = Conv2D(filters=32, kernel_size=[3, 3], padding='SAME', activation=tf.nn.relu)
        self.pool1 = MaxPool2D(pool_size=[2, 2], padding='SAME', strides=2)
        self.dropout1 = Dropout(rate=0.3)

        self.conv2 = Conv2D(filters=64, kernel_size=[3, 3], padding='SAME', activation=tf.nn.relu)
        self.pool2 = MaxPool2D(pool_size=[2, 2], padding='SAME', strides=2)
        self.dropout2 = Dropout(rate=0.3)

        self.conv3 = Conv2D(filters=128, kernel_size=[3, 3], padding='SAME', activation=tf.nn.relu)
        self.pool3 = MaxPool2D(pool_size=[2, 2], padding='SAME', strides=2)
        self.dropout3 = Dropout(rate=0.3)
        self.dropout3_flat = Flatten()

        self.dense4 = Dense(units=625, activation=tf.nn.relu)
        self.dropout4 = Dropout(rate=0.5)

        self.dense5 = Dense(units=10)

    def call(self, inputs, training=False):
        net = self.conv1(inputs)
        net = self.pool1(net)
        net = self.dropout1(net)
        net = self.conv2(net)
        net = self.pool2(net)
        net = self.dropout2(net)
        net = self.conv3(net)
        net = self.pool3(net)
        net = self.dropout3(net)
        net = self.dropout3_flat(net)
        net = self.dense4(net)
        net = self.dropout4(net)
        net = self.dense5(net)
        return net


my_models = []
num_models = 3
for m in range(num_models):
    my_models.append(MYModel(str(m)))


# optimizer initialize
optimizer = tf.keras.optimizers.Adam(learning_rate=learning_rate)


def cost_fn(model, x_data, y_data):
    logits = model(x_data, training=True)
    cost = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(logits=logits, labels=y_data))

    return cost


def gradient(model, x_data, y_data):
    # tf.GradientTape을 이용하면 자동 미분(tape에 기록하면서)
    with tf.GradientTape() as tape:
        cost = cost_fn(model, x_data, y_data)

    return tape.gradient(cost, model.variables)


def train(model, x_data, y_data):
    # calculate gradient
    grads = gradient(model, x_data, y_data)

    # weight update
    optimizer.apply_gradients(zip(grads, model.trainable_variables))


def test(models, x_data, y_data):
    predictions = np.zeros_like(y_data)
    for model in models:
        logits = model(x_data, training=False)  # rate 비활성
        predictions += logits
    is_equal = tf.equal(tf.argmax(predictions, 1), tf.argmax(y_data, 1))
    accuracy = tf.reduce_mean(tf.cast(is_equal, dtype=tf.float32))

    return accuracy


for epoch in range(training_epochs):
    avg_cost = 0
    train_step = 0

    for idx, (images, labels) in enumerate(train_dataset):

        # train each model
        for model in my_models:
            grads = gradient(model, images, labels)
            optimizer.apply_gradients(zip(grads, model.trainable_variables))

            cost = cost_fn(model, images, labels)

            avg_cost += cost / num_models
        train_step = idx + 1

    avg_cost = avg_cost / train_step

    print(f"=====Epoch : {(epoch + 1):04d}, Cost : {avg_cost:.9f}======")


print(f'Accuracy= {test(my_models, x_test, y_test)*100 : .4f}')


