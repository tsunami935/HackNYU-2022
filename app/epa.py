#This is a little API wrapper for the EPA AQS API

from dotenv import load_dotenv
from os import getenv
import requests
import json
from datetime import datetime, timedelta

class EPA:
    def __init__(self):
        load_dotenv()
        api_string = "https://aqs.epa.gov/data/api"
        param_classes = [
            {
                "code": "42101",
                "value_represented": "Carbon monoxide"
            },
            {
                "code": "42401",
                "value_represented": "Sulfur dioxide"
            },
            {
                "code": "42602",
                "value_represented": "Nitrogen dioxide (NO2)"
            },
            {
                "code": "44201",
                "value_represented": "Ozone"
            }
        ]

    def search(self, longitude, latitude):
        #precondition: longitude and latitude are valid coordinates in the United States
        #postcondition: Returns a summary list of pollutants with the AQI recorded on that day
        params = {
            #create a search with an approximately 18 mile radius
            "email" : getenv("EPA_EMAIL"),
            "key" : getenv("EPA_KEY"),
            "param" : None,
            "bdate" : (datetime.now() - timedelta(1)).strftime('%Y%m%d'),
            "edate" : (datetime.now() - timedelta(1)).strftime('%Y%m%d'), 
            "minlat" : latitude - 0.26,
            "maxlat" : latitude + 0.26,
            "minlon" : longitude - 0.3,
            "maxlon" : longitude + 0.3
        }
        results = []
        for code in self.param_classes:
            params["para"] = code["code"]
            response = requests.get(self.api_string + "/dailyData/byBox", params=params)
            if response.status_code == 200:
                data = json.loads(response.content)["Data"]
                for entry in data:
                    if entry["aqi"]:
                        results.append({
                            "pollutant" : code["value_represented"],
                            "aqi" : entry["aqi"]
                        })
                        break
        return results