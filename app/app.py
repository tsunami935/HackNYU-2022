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
    return send_from_directory("templates", "pollution-report.html")

@app.route("/get-report", methods=["GET"])
def get_report():
    #the request is like "/get-report?longitude={insert val here}&latitude={insert val here}"
    pass

if __name__ == "__main__":
    app.run(debug=True)