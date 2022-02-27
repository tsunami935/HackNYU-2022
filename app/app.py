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

@app.route("/pollution-report")
def pollution_report():
    return render_template("pollution-report.html")

@app.route("/get-report", methods=["GET"])
def get_report():
    #the request is like "/get-report?longitude={insert val here}&latitude={insert val here}"
    search = epa_api.search(float(request.args.get("longitude")), float(request.args.get("latitude")))
    return make_response({"Data":search}, 200)

if __name__ == "__main__":
    app.run(debug=True)