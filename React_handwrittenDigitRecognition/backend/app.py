from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
import os
import re
import base64
import cv2
import math
from scipy import ndimage


def getBestShift(img):
    cy,cx = ndimage.measurements.center_of_mass(img)

    rows,cols = img.shape
    shiftx = np.round(cols/2.0-cx).astype(int)
    shifty = np.round(rows/2.0-cy).astype(int)

    return shiftx,shifty


def shift(img,sx,sy):
    rows,cols = img.shape
    M = np.float32([[1,0,sx],[0,1,sy]])
    shifted = cv2.warpAffine(img,M,(cols,rows))
    return shifted


#Flask 객체 인스턴스 생성
app = Flask(__name__)

# cors issue
CORS(app)



@app.route('/') # 접속하는 url
def index():
  return render_template('index.html')

@app.route('/predict', methods=['GET', 'POST'])
def predict():
  if request.method == 'POST':

    model = tf.keras.models.load_model("./cnn_mnist.h5")
    
    # base64 decode
    byte_data = base64.b64decode(re.sub('^data:image/.+;base64,', '', request.get_json()['img_base64']))
    
    # convert base64 to uint8 array
    encoded_img = np.frombuffer(byte_data, np.uint8)
    img_src = cv2.imdecode(encoded_img, cv2.IMREAD_COLOR)
    cv2.imwrite('before.png', img_src)



		# gray & rezise
    gray = cv2.imread('before.png', 0)
    gray = cv2.resize(255-gray,(28, 28))


		# better black and white version
    (thresh, gray) = cv2.threshold(gray, 128, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)

    cv2.imwrite('resize.png', gray)



    while np.sum(gray[0]) == 0: # top
      gray = gray[1:]

    while np.sum(gray[:,0]) == 0: # left
      gray = np.delete(gray,0,1)

    while np.sum(gray[-1]) == 0: # down
      gray = gray[:-1]

    while np.sum(gray[:,-1]) == 0: # right
      gray = np.delete(gray,-1,1)






    rows,cols = gray.shape

    if rows > cols:
      factor = 20.0/rows
      rows = 20
      cols = int(round(cols*factor))

      gray = cv2.resize(gray, (cols,rows))
    else :
      factor = 20.0/cols
      cols = 20
      rows = int(round(rows*factor))

      gray = cv2.resize(gray, (cols, rows))

    colsPadding = (int(math.ceil((28-cols)/2.0)),int(math.floor((28-cols)/2.0)))
    rowsPadding = (int(math.ceil((28-rows)/2.0)),int(math.floor((28-rows)/2.0)))
    gray = np.lib.pad(gray,(rowsPadding,colsPadding),'constant')

    shiftx,shifty = getBestShift(gray)
    shifted = shift(gray,shiftx,shifty)
    gray = shifted

    # save the processed images
    cv2.imwrite("finish.png", gray)
    """
    all images in the training set have an range from 0-1
    and not from 0-255 so we divide our flatten images
    (a one dimensional vector with our 784 pixels)
    to use the same 0-1 based range
    """
    flatten = gray.flatten() / 255.0
    """
    we need to store the flatten image and generate
    the correct_vals array
    correct_val for the first digit (9) would be
    [0,0,0,0,0,0,0,0,0,1]
    """


    # img preprocessing
    img_pred = flatten.reshape(-1 , 28, 28, 1)

    print(np.argmax(model.predict(img_pred)))








    # # convert black <-> white
    # img_src = np.invert(img_src)


    # # BGR -> GRAY && resize
    # img_gray = cv2.cvtColor(img_src, cv2.COLOR_BGR2GRAY)

    

    # # img_resize = cv2.resize(img_gray, (140, 140))

    # # img_resize = cv2.resize(img_resize, (70, 70))

    # # img_resize = cv2.resize(img_resize, (35, 35))

    # img_resize = cv2.resize(img_gray, (28, 28), interpolation=cv2.INTER_AREA)

    # cv2.imwrite('resize.jpg', img_resize)

    # # img preprocessing
    # img_pred = img_resize.astype('float32') / 255
    # img_pred = img_pred.reshape(-1 , 28, 28, 1)



    
    # print(np.argmax(model.predict(img_pred)))



    people = [{'name': 'Alice', 'birth-year': 1986},
          {'name': 'Bob', 'birth-year': 1985}]
    return jsonify(people) 

  else :
    print("error")

if __name__=="__main__":
    app.debug = False
    app.run(host='0.0.0.0', port='5000')