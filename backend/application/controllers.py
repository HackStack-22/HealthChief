from main import app as app
from flask import request, render_template, redirect, url_for
import joblib
import os

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

@app.route("/ml_model/breast_cancer/predict", methods = ["GET", "POST"])
def breast_cancer_predict():
    if request.method == 'POST':
        form = request.form
        
    return 'Breast Cancer Predict', 200