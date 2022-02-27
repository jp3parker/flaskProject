from flask import Flask, render_template, json

app = Flask(__name__)

with open("./static/movies.json", "r") as moviesFile:
    data = moviesFile.read();


@app.route('/')
def page_example():  # put application's code here
    return render_template("Intro.html", MOVIES=data)


if __name__ == '__main__':
    app.run()
