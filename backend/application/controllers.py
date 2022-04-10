from main import app as app
from flask import request, render_template, redirect, url_for
import joblib
import os
import numpy as np

import pickle
import pandas as pd

basedir = os.path.abspath(os.path.dirname(__file__))
ml_models_dir = os.path.join(basedir, '../ml_models')

@app.route("/")
def home():
    return "home", 200

@app.route("/test")
def test():
    return "hello world changed", 200

@app.route("/ml_model/diabetes/predict", methods = ["GET", "POST"])
def diabetes_predict():
    if request.method == 'POST':
        json = request.json
        Pregnancies = json.get('pregnancies')
        Glucose = json.get('glucose')
        BloodPressure = json.get('blood-pressure')
        SkinThickness = json.get('skin-thickness')
        Insulin = json.get('insulin')
        BMI = json.get('bmi')
        DiabetesPedigreeFunction = json.get('diabetes-pedigree-function')
        Age = json.get('age')
        
        arr = [Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age]
        
        df = pd.DataFrame(
            [arr],
            columns=['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']
        )      
        
        model = joblib.load(os.path.join(ml_models_dir, 'diabetes.pkl'))
        predict = model.predict(df)
        print("The predicted result:", predict)
        return str(predict[0]), 200
    
    return 'Diabetes Predict', 200
        
        

@app.route("/ml_model/heart_failure/predict", methods = ["GET","POST"])
def heart_failure_predict():
    if request.method == 'POST':
        json = request.json
        Age = json.get('age')
        Sex = json.get('sex')
        ChestPainType = json.get('chest-pain-type')
        RestingBP = json.get('resting-bp')
        Cholesterol = json.get('cholesterol')
        FastingBS = json.get('fasting-bs')
        RestingECG = json.get('resting-ecg')
        MaxHR = json.get('max-hr')
        ExerciseAngina = json.get('exercise-angina')
        OldPeak = json.get('old-peak')
        ST_Slope = json.get('st-slope')
        
        arr = [Age, Sex, ChestPainType, RestingBP, Cholesterol, FastingBS, RestingECG, MaxHR, ExerciseAngina, OldPeak, ST_Slope]
        print(arr)
        
        df = pd.DataFrame(
            [[Age, Sex, ChestPainType, RestingBP, Cholesterol, FastingBS, RestingECG, MaxHR, ExerciseAngina, OldPeak, ST_Slope]],
            columns=['Age', 'Sex', 'ChestPainType', 'RestingBP', 'Cholesterol', 'FastingBS', 'RestingECG', 'MaxHR', 'ExerciseAngina', 'OldPeak', 'ST_Slope']
        )
        
        male_female_cols=["Sex"]
        for cols in male_female_cols:
            df[cols] = df[cols].map({
                'M' : 1, 
                'F'  : 0
            })

        slope=["ST_Slope"]
        for cols in slope:
            df[cols] = df[cols].map({
                    'Up' : 1, 
                    'Flat'  : 0,
                    'Down' : 2
            })

        excer=["ExerciseAngina"]
        for cols in excer:
                df[cols] = df[cols].map({
                    'Y' : 1, 
                    'N'  : 0
            })

        chest=["ChestPainType"]
        for cols in chest:
                df[cols] = df[cols].map({
                    'TA' : 1, 
                    'ATA'  : 0,
                    'NAP':2,
                    'ASY':3
            })

        rest=["RestingECG"]
        for cols in rest:
            df[cols] = df[cols].map({
                    'Normal' : 1, 
                    'ST'  : 0,
                    'LVH' : 2
            })   
        
        with open(os.path.join(ml_models_dir, 'heart_fail.pkl'), 'rb') as f:
            heart_fail = pickle.load(f)
            predict = heart_fail.predict(np.array([df.iloc[0]]))
        return str(predict[0]), 200

    return 'Heart Failure Predict',200


def parse_json(json):
    HeartDisease = json.get('heart-disease')
    BMI = json.get('bmi')
    Smoking = json.get('smoking')
    AlcoholDrinking = json.get('alcohol-drinking')
    Stroke = json.get('stroke')
    PhysicalHealth = json.get('physical-health')
    MentalHealth = json.get('mental-health')
    DiffWalking = json.get('diff-walking')
    Sex = json.get('sex')
    AgeCategory = json.get('age-category')
    Race = json.get('race')
    Diabetic = json.get('diabetic')
    PhysicalActivity = json.get('physical-activity')
    GenHealth = json.get('gen-health')
    SleepTime = json.get('sleep-time')

    arr = [HeartDisease, BMI, Smoking, AlcoholDrinking, Stroke, PhysicalHealth, MentalHealth, DiffWalking, Sex, AgeCategory, Race, Diabetic, PhysicalActivity, GenHealth, SleepTime]

    df = pd.DataFrame(
        [arr],
        columns=['HeartDisease', 'BMI', 'Smoking', 'AlcoholDrinking', 'Stroke', 'PhysicalHealth', 'MentalHealth', 'DiffWalking', 'Sex', 'AgeCategory', 'Race', 'Diabetic', 'PhysicalActivity', 'GenHealth', 'SleepTime']
    )
    
    return df


def data_pipeline(df):
    yes_no_cols = [
        'HeartDisease',
        'Smoking',
        'AlcoholDrinking',
        'Stroke',
        'DiffWalking',
        'Diabetic',
        'PhysicalActivity',
    ]
    male_female_cols = ['Sex']
    race_cols = ['Race']
    gen_health = ['GenHealth']
    age_cols = ['AgeCategory']
    numeric_cols = ['BMI', 'PhysicalHeath', 'MentalHealth', 'SleepTime']

    for cols in yes_no_cols:
        df[cols] = df[cols].map({
            'Yes' : 1, 
            'No'  : 0
        })

    for cols in male_female_cols:
        df[cols] = df[cols].map({
            'Male' : 1, 
            'Female'  : 0
        })

    for cols in age_cols:
        df[cols] = df[cols].map({
            '18-24': 21064,
            '25-29': 16955,
            '30-34': 18753,
            '35-39': 20550,
            '40-44': 21006,
            '45-49': 21791,
            '50-54': 25382,
            '55-59': 29757,
            '60-64': 33686,
            '65-69': 34151,
            '70-74': 31065,
            '75-79': 21482,
            '80 or older': 24153
        })

    for cols in race_cols:
        df[cols] = df[cols].map({
            'American Indian/Alaskan Native': 5202,
            'Asian': 8068,
            'Black': 22939,
            'Hispanic': 27446,
            'Other': 10928,
            'White': 245212
        })

    for cols in gen_health:
        df[cols] = df[cols].map({
            'Excellent': 66842,
            'Fair': 34677,
            'Good': 93129,
            'Poor': 11289,
            'Very good': 113858
        })
    return df


@app.route("/ml_model/asthma/predict", methods = ["GET", "POST"])
def asthma_predict():
    if request.method == 'POST':
        json = request.json
        df = parse_json(json)
        df = data_pipeline(df)
        print(df)
        predict = None
        with open(os.path.join(ml_models_dir, 'model_asthma'), 'rb') as f:
            model_asthma = pickle.load(f)
            predict = model_asthma.predict(np.array([df.iloc[0]]))
        return str(predict[0]), 200
    return 'Asthma Predict', 200


@app.route("/ml_model/kidney_disease/predict", methods = ["GET", "POST"])
def kidney_predict():
    if request.method == 'POST':
        json = request.json
        df = parse_json(json)
        df = data_pipeline(df)
        print(df)
        predict = None
        with open(os.path.join(ml_models_dir, 'model_kidney'), 'rb') as f:
            model_kidney = pickle.load(f)
            predict = model_kidney.predict(np.array([df.iloc[0]]))
        return str(predict[0]), 200
    
    return 'Kidney Predict', 200


# Skin Cancer
@app.route("/ml_model/skin_cancer/predict", methods = ["GET", "POST"])
def skin_predict():
    if request.method == 'POST':
        json = request.json
        df = parse_json(json)
        df = data_pipeline(df)
        print(df)
        predict = None
        with open(os.path.join(ml_models_dir, 'model_skin'), 'rb') as f:
            model_skin = pickle.load(f)
            predict = model_skin.predict(np.array([df.iloc[0]]))
        return str(predict[0]), 200

    return 'Skin Predict', 200