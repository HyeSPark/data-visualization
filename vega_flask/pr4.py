# -*- coding: utf-8 -*-

from sqlite3 import dbapi2 as sqlite3
from hashlib import md5
from contextlib import closing
from flask import Flask, request, session, url_for, redirect, \
     render_template, flash
from werkzeug.security import generate_password_hash, check_password_hash

from flask_pymongo import PyMongo


# create our little application :)
app = Flask(__name__)
app.secret_key = "ie481-programming code"

# making db
mongodb_client = PyMongo(app, uri="mongodb://localhost:27017/register_db")
db = mongodb_client.db
records = db.register

@app.route('/register', methods=['GET', 'POST'])
def register():
    error = None
    if "user_id" in session:
        return redirect(url_for("home"))
    if request.method == "POST":
        username = request.form['username']
        email = request.form["email"]
        
        password1 = request.form["password"]
        password2 = request.form["password2"]
        
        user_found = records.find_one({"username": username})
        email_found = records.find_one({"email": email})

        if not username:
            error = 'You have to enter a username'
        elif not email or '@' not in email:
            error = 'You have to enter a valid email address'
        elif not password1:
            error = 'You have to enter a password'
        elif user_found:
            error = 'The username is already taken'
        elif email_found:
            error = 'This email already exists in database'
        elif password1 != password2:
            error = 'The two passwords do not match'
        else:
            hashed = generate_password_hash(password1)
            user_input = {'username': username, 'email': email, 'password': hashed}
            records.insert_one(user_input)
            
            flash('You were successfully registered and can login now')

            return redirect(url_for('login'))
    
    return render_template('register.html', error=error)

@app.route('/public')
def public_page():
    """Displays the latest messages of all users."""
    return render_template('public-page.html')

@app.route('/')
def home():
    if not "user_id" in session:
        return redirect(url_for('public_page'))
    return render_template('home.html', username=session['user_id'])

@app.route('/login', methods=['GET', 'POST'])
def login():
    if "user_id" in session:
        return redirect(url_for('home'))
    error = None
    if request.method == 'POST':
        username = request.form['username']
        user_found = records.find_one({"username": username})

        if not user_found:
            error = 'Invalid username'
        elif not check_password_hash(user_found['password'],
                                     request.form['password']):
            error = 'Invalid password'
        else:
            flash('You were logged in')
            session['user_id'] = user_found['username']
            return redirect(url_for('home'))
    return render_template('login.html', error=error)


@app.route('/logout')
def logout():
    """Logs the user out."""
    if 'user_id' in session:
        flash('You were logged out')
        session.pop('user_id', None)
        return redirect(url_for('login'))
    else: 
        return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True, port=5050)