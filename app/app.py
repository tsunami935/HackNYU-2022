#This is the code for the app

from flask import *

app = Flask(__name__)

@app.route("/")
def welcome():
    #precondition: None
    #postcondition: Sends user a welcome page and asks if they would like to disclose their location
    #   If yes, send a request to EPA AQS API with relevant information
    return render_template("welcome.html")

@app.route("/pollution-report")
def pollution_report():
    return send_from_directory("templates", "success.html")

if __name__ == "__main__":
    app.run(debug=True)