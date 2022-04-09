from main import app as app
from flask import request, render_template, redirect, url_for
import joblib
import os

basedir = os.path.abspath(os.path.dirname(__file__))
ml_models_dir = os.path.join(basedir, '../ml_models')

@app.route("/")
def home():
    return "home", 200

@app.route("/test")
def test():
    return "hello world changed", 200

@app.route("/ml_model/heart_failure/predict")
def heart_failure_predict():
    m_jlib = joblib.load(os.path.join(ml_models_dir, 'Heart_failure.pkl'))
    predict=m_jlib.predict([[-1.433140,0.410909,0.825070,-0.551341,1.382928,-0.832432,0,1,0,0,0,1,0,1,0,1,0,0,0,1]])
    return str(predict),200