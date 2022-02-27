#This is the code for the app

from flask import *
from epa import EPA

app = Flask(__name__)
epa_api = EPA()

@app.route("/")
def welcome():
    #precondition: None
    #postcondition: Sends user a welcome page and asks if they would like to disclose their location
    #   If yes, send a request to EPA AQS API with relevant information
    return render_template("welcome.html")

@app.route("/goals")
def goals():
    #precondition: The user already has a pollution report
    #postcondition: Sends user a page where they can set and track their goals
    return render_template("goals.html") #todo: work on goals.html

@app.route("/pollution-report")
def pollution_report():
    #precondition: user has consented to letting their location data be used
    #postcondition: user receives a report of the pollutants being tracked in their area
    return render_template("pollution-report.html")

@app.route("/get-report", methods=["GET"])
def get_report():
    #precondition: get request contains a valid longitude and latitude
    #postcondition: returns a response containing a list of pollutants and their aqi values
    #the request is like "/get-report?longitude={insert val here}&latitude={insert val here}"
    search = epa_api.search(float(request.args.get("longitude")), float(request.args.get("latitude")))
    return make_response({"Data":search}, 200)

if __name__ == "__main__":
    app.run(debug=True)