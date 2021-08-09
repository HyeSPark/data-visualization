# -- coding: utf-8 --
from flask import Flask, request, render_template, jsonify
from pymongo import MongoClient
from flask_pymongo import PyMongo
import json
from bson import ObjectId

app = Flask(__name__)

seattleWeather = [
    {"date": "2012-01-01", "precipitation": "0.0", "temp_max": "12.8", "temp_min": "5.0", "wind": "4.7"}, 
    {"date": "2012-01-02", "precipitation": "10.9", "temp_max": "10.6", "temp_min": "2.8", "wind": "4.5"}, 
    {"date": "2012-01-03", "precipitation": "0.8", "temp_max": "11.7", "temp_min": "7.2", "wind": "2.3"}, 
    {"date": "2012-01-04", "precipitation": "20.3", "temp_max": "12.2", "temp_min": "5.6", "wind": "4.7"}, 
    {"date": "2012-01-05", "precipitation": "1.3", "temp_max": "8.9", "temp_min": "2.8", "wind": "6.1"}, 
    {"date": "2012-01-06", "precipitation": "2.5", "temp_max": "4.4", "temp_min": "2.2", "wind": "2.2"}, 
    {"date": "2012-01-07", "precipitation": "0.0", "temp_max": "7.2", "temp_min": "2.8", "wind": "2.3"}, 
    {"date": "2012-01-08", "precipitation": "0.0", "temp_max": "10.0", "temp_min": "2.8", "wind": "2.0"}, 
    {"date": "2012-01-09", "precipitation": "4.3", "temp_max": "9.4", "temp_min": "5.0", "wind": "3.4"}, 
    {"date": "2012-01-10", "precipitation": "1.0", "temp_max": "6.1", "temp_min": "0.6", "wind": "3.4"}, 
    {"date": "2012-01-11", "precipitation": "0.0", "temp_max": "6.1", "temp_min": "-1.1", "wind": "5.1"}
    ]

def access_db():
    mongodb_client = PyMongo(app, uri="mongodb://localhost:27017/todo_db")
    db = mongodb_client.db
    db.todos.insert_one({'title': "todo title", 'body': "todo body"})

def insert_data():
    client = MongoClient('mongodb://localhost:27017/')
    db = client["mongodb_tutorial"]
    db.drop_collection("seattleWeather")
    col = db["seattleWeather"]
    x = col.insert_many(seattleWeather)

access_db()
insert_data()

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

@app.route('/data/seattleWeather')
def fromDB():
    client = MongoClient('mongodb://localhost:27017/')
    db = client.mongodb_tutorial
    collection = db.seattleWeather
    results = collection.find()
    client.close()
    return jsonify(JSONEncoder().encode(list(results)))
## 
@app.route('/data/articles',methods=['GET'])
def show_articles():
    client = MongoClient('mongodb://localhost:27017/')
    db = client.mongodb_tutorial
    collection = db.book
    results = collection.find()
    client.close()
    return jsonify({'result':'success', 'articles':JSONEncoder().encode(list(results))})
    # return render_template('mongo.html', data=results)

@app.route('/mongo_jinja',methods=['GET'])
def mongo_jinja():
    client = MongoClient('mongodb://localhost:27017/')
    db = client.mongodb_tutorial
    collection = db.book
    results = collection.find()
    client.close()
    # return jsonify({'result':'success', 'articles':JSONEncoder().encode(list(results))})
    return render_template('mongo_jinja.html', data=results)

@app.route('/mongo')
def mongoTest():
    return render_template("mongo.html")

if __name__ =='__main__':
    app.run(debug=True)