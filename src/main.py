from pydantic import BaseModel
from fastapi import FastAPI, Request
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import date
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import json
from fastapi import Request
import requests
# from .utils import pred_crop.py

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    print("hello")
    return {"message": "Hello World"}


# class Inputs(BaseModel):
#     nitrogen: float
#     phosphorous: float
#     potassium: float
#     ph: float
#     state: str
#     district: str
#     rainfall: float

def predict_crop(nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall):
    print("reached 3")
    return get_prediction([[nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall]])

def get_prediction(x):
    print("in pred method")
    df = pd.read_csv('C:/Users/riyac/Desktop/crop_recommendation/crop_rec/src/data/crop_recommendation.csv')
    # df_numeric = df.drop('label', axis = 1)
    features = df[['N', 'P','K','temperature', 'humidity', 'ph', 'rainfall']]
    target = df['label']
    Xtrain, Xtest, Ytrain, Ytest = train_test_split(features,target,test_size = 0.2,random_state =2)

    RF = RandomForestClassifier(n_estimators=20, random_state=0)
    RF.fit(Xtrain,Ytrain)

    predicted_value = RF.predict(x)
    # x = metrics.accuracy_score(Ytest, predicted_values)
    # print("RF's Accuracy is: ", x)

    print(predicted_value[0])
    return predicted_value[0]

def kelvin_to_celsius(kelvin):
    celsius = kelvin - 273.15
    return celsius

def getTemperatureHumidityAPI(City):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={City}&appid=da4c52a91db12aecc1587f4d7c3160df";
    response = requests.request("GET",url)
    data = (response.json())
    print(data)
    main = (data['main'])
    TemperatureK = main['temp']
    Humidity = main['humidity']
    TemperatureC = kelvin_to_celsius(TemperatureK)
    tempHum = [TemperatureC, Humidity]
    print(TemperatureC)
    print(Humidity)
    return tempHum

@app.post("/predict/")
async def predict(request: Request):
    print("in predict in main 1")
    inputs = (await request.json())
    print("in predict in main 2:::::::")
    print(inputs)
    # print("Aadad" + request)
    # print("Main Inputs: " + inputs)
    # # print("UnStringified: " +inputs)
    nitrogen = (float)(inputs["nitrogen"])
    phosphorous = (float)(inputs["phosphorous"])
    potassium = (float)(inputs["potassium"])
    ph = (float)(inputs["ph"])
    state = (str)(inputs["state"])
    district = (str)(inputs["district"])
    rainfall = (float)(inputs["rainfall"])
    
    print("reached 1")

    try:
        # rainfall = pred_rainfall.get_rainfall(state, district, month)

        # temperature, humidity = pred_temp_hum.get_temp_hum(district)

        # prediction = predict_crop(
        #     nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall)

        print("reached 2")

        tempHum = getTemperatureHumidityAPI(district)
        prediction = predict_crop(nitrogen, phosphorous, potassium, tempHum[0], tempHum[1], ph, rainfall)
        print("Prediction::::"+prediction)
    except Exception as e:
        print(e)
        raise HTTPException(status_code=400, detail=str(e))

    return {"result": prediction}