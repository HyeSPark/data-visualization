# -- coding: utf-8 --
from flask import Flask, request, render_template, jsonify
import json

app = Flask(__name__)

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/data/seattle-weather.csv')
def read_csv():
    f = open('static/data/seattle-weather.csv', 'r')
    return "".join(f.readlines())

@app.route('/data/covid-19-example.csv')
def read_pr_csv():
    f = open('static/data/covid-19-example.csv', 'r')
    return "".join(f.readlines())

@app.route('/pr3')
def pr3():
    return render_template("pr3.html")

if __name__ =='__main__':
    app.run(debug=True)