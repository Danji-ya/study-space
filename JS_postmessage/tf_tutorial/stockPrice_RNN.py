import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt


# parameters
sequence_len = 7
data_dim = 4
learning_rate = 0.01
training_epochs = 500

# stock_daily
xy = np.loadtxt("dataDirectory/data-02-stock_daily.csv", delimiter=',')
# open, High, Low, Volume, Close
# print(xy.shape) # (732, 5)
xy = np.flip(xy, axis=0)  # 시간 역순으로 뒤집기


def MinMaxScaler(data):
    numerator = data - np.min(data, 0)
    denominator = np.max(data, 0) - np.min(data, 0)
    # noise term prevents the zero division
    return numerator / (denominator + 1e-7)


def make_window(time_series, seq_length):
    x_data = []
    y_data = []
    for i in range(len(time_series) - seq_length):
        x_window = time_series[i:i + seq_length, : 0:-1]
        y_window = time_series[i + seq_length, [-1]]

        x_data.append(x_window)
        y_data.append(y_window)
    return np.array(x_data), np.array(y_data)


# train_test_split
train_size = int(xy.shape[0] * 0.7)
train_set = xy[0:train_size]
test_set = xy[train_size - sequence_len:]

# MinMax normalize
train_set = MinMaxScaler(train_set)
test_set = MinMaxScaler(test_set)

# make window
x_train, y_train = make_window(train_set, sequence_len)
x_test, y_test = make_window(test_set, sequence_len)


class MYModel(tf.keras.Model):   # custom model
    def __init__(self, name):
        super(MYModel, self).__init__(name=name)
        self.LSTM = tf.keras.layers.LSTM(units=1)
        self.dense5 = tf.keras.layers.Dense(units=1, activation='tanh')

    def call(self, inputs):
        net = self.LSTM(inputs)
        net = self.dense5(net)
        return net


# optimizer initialize
optimizer = tf.keras.optimizers.Adam(learning_rate=learning_rate)

model = MYModel("my_model")
temp_inputs = tf.keras.Input(shape=(7, 4))
model(temp_inputs)
model.summary()

model.compile(loss='mean_squared_error', optimizer=optimizer)
model.fit(x_train, y_train, epochs=training_epochs)

# Test step
test_predict = model.predict(x_test)

# Plot predictions
plt.plot(y_test, 'b', label='true')
plt.plot(test_predict, 'r', label='predict')
plt.xlabel("Time Period")
plt.ylabel("Stock Price")
plt.legend(loc='upper right')
plt.show()












