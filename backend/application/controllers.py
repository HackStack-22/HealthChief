from main import app as app
from flask import request, render_template, redirect, url_for
import joblib
import os

import pickle
import pandas as pd
from sklearn.preprocessing import StandardScaler

scaler_s =  StandardScaler()

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
        form = request.form
        Pregnancies = form.get('pregnancies')
        Glucose = form.get('glucose')
        BloodPressure = form.get('blood-pressure')
        SkinThickness = form.get('skin-thickness')
        Insulin = form.get('insulin')
        BMI = form.get('bmi')
        DiabetesPedigreeFunction = form.get('diabetes-pedigree-function')
        Age = form.get('age')
        
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
        form = request.form
        Age = form.get('age')
        Sex = form.get('sex')
        ChestPainType = form.get('chest-pain-type')
        RestingBP = form.get('resting-bp')
        Cholesterol = form.get('cholesterol')
        FastingBS = form.get('fasting-bs')
        RestingECG = form.get('resting-ecg')
        MaxHR = form.get('max-hr')
        ExerciseAngina = form.get('exercise-angina')
        OldPeak = form.get('old-peak')
        ST_Slope = form.get('st-slope')
        
        arr = [Age, Sex, ChestPainType, RestingBP, Cholesterol, FastingBS, RestingECG, MaxHR, ExerciseAngina, OldPeak, ST_Slope]
        print(arr)
        
        df = pd.DataFrame(
            [[Age, Sex, ChestPainType, RestingBP, Cholesterol, FastingBS, RestingECG, MaxHR, ExerciseAngina, OldPeak, ST_Slope]],
            columns=['Age', 'Sex', 'ChestPainType', 'RestingBP', 'Cholesterol', 'FastingBS', 'RestingECG', 'MaxHR', 'ExerciseAngina', 'OldPeak', 'ST_Slope']
        )
        
        X = pd.get_dummies(df, columns=['ChestPainType','Sex','RestingECG','ExerciseAngina','ST_Slope'])
        
        # X[['Age','RestingBP','Cholesterol', 'FastingBS','OldPeak','MaxHR']] = pd.DataFrame(scaler_s.fit_transform(
        #             X[['Age','RestingBP','Cholesterol', 'FastingBS','OldPeak','MaxHR']]))
        
        # X = X.iloc[0]
        
        # m_jlib = joblib.load(os.path.join(ml_models_dir, 'Heart_failure.pkl'))
        # predict=m_jlib.predict([[-1.433140,0.410909,0.825070,-0.551341,1.382928,-0.832432,0,1,0,0,0,1,0,1,0,1,0,0,0,1]])
        # return str(predict),200
        return str(0), 200
    return 'Heart Failure Predict',200

@app.route("/ml_model/hepatitis_c/predict", methods = ["GET", "POST"])
def hepatitis_c_predict():
    if request.method == 'POST':
        form = request.form
    
    return 'Hepatitis C Predict', 200



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
        form = request.form
        HeartDisease = form.get('heart-disease')
        BMI = form.get('bmi')
        Smoking = form.get('smoking')
        AlcoholDrinking = form.get('alcohol-drinking')
        Stroke = form.get('stroke')
        PhysicalHealth = form.get('physical-health')
        MentalHealth = form.get('mental-health')
        DiffWalking = form.get('diff-walking')
        Sex = form.get('sex')
        AgeCategory = form.get('age-category')
        Race = form.get('race')
        Diabetic = form.get('diabetic')
        PhysicalActivity = form.get('physical-activity')
        GenHealth = form.get('gen-health')
        SleepTime = form.get('sleep-time')
        
        arr = [HeartDisease, BMI, Smoking, AlcoholDrinking, Stroke, PhysicalHealth, MentalHealth, DiffWalking, Sex, AgeCategory, Race, Diabetic, PhysicalActivity, GenHealth, SleepTime]
        
        df = pd.DataFrame(
            [arr],
            columns=['HeartDisease', 'BMI', 'Smoking', 'AlcoholDrinking', 'Stroke', 'PhysicalHealth', 'MentalHealth', 'DiffWalking', 'Sex', 'AgeCategory', 'Race', 'Diabetic', 'PhysicalActivity', 'GenHealth', 'SleepTime']
        )        
                
        with open(os.path.join(ml_models_dir, 'model_asthma')) as f:
            model_asthma = pickle.load(f)
            
    
    return 'Asthma Predict', 200


@app.route("/ml_model/kidney/predict", methods = ["GET", "POST"])
def kidney_predict():
    if request.method == 'POST':
        form = request.form
        
        with open(os.path.join(ml_models_dir, 'model_kidney')) as f:
            model_kidney = pickle.load(f)
    
    return 'Kidney Predict', 200


# Skin Cancer
@app.route("/ml_model/skin/predict", methods = ["GET", "POST"])
def skin_predict():
    if request.method == 'POST':
        form = request.form
        
    with open(os.path.join(ml_models_dir, 'model_skin')) as f:
        model_skin = pickle.load(f)
    print('loaded the model')

    return 'Skin Predict', 200