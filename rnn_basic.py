import tensorflow as tf
import numpy as np

sentence = ("if you want to build a ship, don't drum up people together to "
            "collect wood and don't assign them tasks and work, but rather "
            "teach them to long for the endless immensity of the sea.")


# make dictionary
char_set = list(set(sentence))
char_dic = {key: idx for idx, key in enumerate(char_set)}
dic_size = len(char_dic)  # 25


# parameters
data_dim = dic_size
hidden_size = dic_size
num_classes = dic_size
sequence_length = 10  # Any arbitrary number
learning_rate = 0.1


X_data = []
Y_data = []
for i in range(len(sentence) - sequence_length):
    x_str = sentence[i:i + sequence_length]
    y_str = sentence[i + 1: i + sequence_length + 1]

    x = [char_dic[c] for c in x_str]  # x str to index
    y = [char_dic[c] for c in y_str]  # y str to index

    X_data.append(x)
    Y_data.append(y)


# One-hot encoding
X_one_hot = tf.keras.utils.to_categorical(X_data, num_classes)
Y_one_hot = tf.keras.utils.to_categorical(Y_data, num_classes)




# Modeling
tf.model = tf.keras.Sequential();
#  return_sequences = Whether to return the last output. in the output sequence, or the full sequence. Default: False.
tf.model.add(tf.keras.layers.LSTM(units=num_classes, input_shape=(sequence_length, num_classes), return_sequences=True))
tf.model.add(tf.keras.layers.LSTM(units=num_classes, return_sequences=True))
# 마지막 층은 Dense 이용하고 softmax를 이용하여 각 확률을 구해준다.
tf.model.add(tf.keras.layers.TimeDistributed(tf.keras.layers.Dense(units=num_classes, activation='softmax')))

tf.model.summary()
tf.model.compile(loss='categorical_crossentropy', optimizer=tf.keras.optimizers.Adam(lr=learning_rate),
                 metrics=['accuracy'])

# training
tf.model.fit(X_one_hot, Y_one_hot, epochs=100)


# result
results = tf.model.predict(X_one_hot[0:1])

# 처음 출력할 때는 전체를 출력해주고 그 다음부터는 끝에 하나씩만
for j, result in enumerate(results):
    index = np.argmax(result, axis=1)
    if j is 0:
        print(''.join([char_set[t] for t in index]), end='')
    else:
        print(char_set[index[-1]], end='')


# if you wan   ---->  m you want
# i ---------> m
# f --------->
#   ---------> y  예상하는 식으로




