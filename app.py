from flask import Flask, render_template

from forms.form import InputStringForm

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/1.html')
def problem1():
	# form = InputStringForm()
	return render_template('1.html')

@app.route('/2.html')
def problem2():
	# form = InputStringForm()
	return render_template('2.html')

if __name__ == "__main__":
    app.run(debug=True, port=8080)



