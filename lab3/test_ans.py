from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello():
	return "Welcome to IE481 Lab#2 class!"

# define and fill the ‘inputTest’ function
@app.route('/<int:num>')
def inputTest(num = None): ######################## answer
  return render_template('main.html', num = num) ## answer

if __name__ == "__main__":
	app.run()
