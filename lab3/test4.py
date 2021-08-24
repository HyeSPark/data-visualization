# -*- coding: utf-8 -*-

from flask import Flask, request, session, url_for, redirect, \
     render_template, flash
from werkzeug.security import generate_password_hash, check_password_hash

from flask_pymongo import PyMongo


# create our little application :)
app = Flask(__name__)
app.secret_key = "ie481-programming code"

# access to the db collection - records : the collection "register" of "register_db"
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
        
        user_found = records.find({"username": username}) # whether the data already exists in the collection "records"
        email_found = records.find({"email": email})

        if not username:
            error = 'You have to enter a username'
        elif not email or '@' not in email:
            error = 'You have to enter a valid email address'
        elif not password1:
            error = 'You have to enter a password'
        elif user_found: # if the username is already exists in the database,
            error = 'The username is already taken'
        elif email_found: # if the email is already exists in the database,
            error = 'This email already exists in database'
        elif password1 != password2:
            error = 'The two passwords do not match'
        else:
            hashed = generate_password_hash(password1)
            user_input = {'username': username, 'email': email, 'password': hashed}
            records.insert_one(user_input) # insert the input into the collection "records"
            
            flash('You were successfully registered and can login now')

            return redirect(url_for('login'))
    
    return render_template('register.html', error=error)

@app.route('/public')
def public_page():
    # Displays the latest messages of all users.
    ####################
    ## Implement here ##
    ####################
    return ...

@app.route('/')
def home():
    # if the user is not logging in (i.e. there is no user_id in session), the public page should be shown
    # if the user is logging in, home page of that user should be shown
    ####################
    ## Implement here ##
    ####################
    return ...

@app.route('/login', methods=['GET', 'POST'])
def login():
    if "user_id" in session: 
        return redirect(url_for('home')) # if the user is logging in, redirect to 'home'
    error = None
    if request.method == 'POST':
        username = request.form['username']
        user_found = records.find({"username": username})
        # if there isn't the user name in the database, error : "Invalid username"
        # else if the 'password' field's value of the db data is not same as the password input of the form, 
        # error : "Invalid password" (hint! use the check_password_hash(.. , ..) function to check the hashed password
        # else, flash "You were logged in" and make the user_id field in session, and redirect to 'home'
        ####################
        ## Implement here ##
        ####################
        return ...
    return render_template('login.html', error=error)


@app.route('/logout')
def logout():
    # Logs the user out.
    # if the user is logging in, (i.e. if 'user_id' field in session) 
    # flash "You were logged out" , pop out the 'user_id' with session.pop(.. , ..) and redirect to 'login'
    # if not, redirect to 'home'
    ####################
    ## Implement here ##
    ####################
    return ...

if __name__ == '__main__':
    app.run(debug=True, port=5050)