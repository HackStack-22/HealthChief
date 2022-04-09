from main import app as app
from flask import request, render_template, redirect, url_for

@app.route("/")
def home():
    return "home", 200

@app.route("/test")
def test():
    return "hello world changed", 200