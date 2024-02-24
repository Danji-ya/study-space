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


def cnn_model():
    model = tf.keras.models.Sequential()

    model.add(Conv2D(filters=32, kernel_size=[3, 3], padding='SAME', input_shape= ( 28, 28, 1), activation=tf.nn.relu))
    model.add(MaxPool2D(pool_size=[2, 2], padding='SAME', strides=2))
    model.add(Dropout(rate=0.3))

    model.add(Conv2D(filters=64, kernel_size=[3, 3], padding='SAME', activation=tf.nn.relu))
    model.add(MaxPool2D(pool_size=[2, 2], padding='SAME', strides=2))
    model.add(Dropout(rate=0.3))

    model.add(Conv2D(filters=128, kernel_size=[3, 3], padding='SAME', activation=tf.nn.relu))
    model.add(MaxPool2D(pool_size=[2, 2], padding='SAME', strides=2))
    model.add(Dropout(rate=0.3))
    model.add(Flatten())

    model.add(Dense(units=625, activation=tf.nn.relu))
    model.add(Dropout(rate=0.5))

    model.add(Dense(units=10, activation='softmax'))

    return model





# model = cnn_model()

# # setting losss & optimizer
# optimizer = tf.keras.optimizers.Adam(learning_rate=learning_rate)

# model.compile(optimizer=optimizer, loss="categorical_crossentropy", metrics=['accuracy'])

# # model summary
# model.summary()

# # model training
# model.fit(x_train, y_train, batch_size=batch_size, epochs=training_epochs)


# # model save to HDF5
# model.save("../cnn_mnist.h5")




# model predict

model = tf.keras.models.load_model("../cnn_mnist.h5")


print(np.argmax(model.predict(x_test[2:3])))

print(y_test[2:3])


