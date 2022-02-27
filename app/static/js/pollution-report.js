if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendPosition);
}

function sendPosition(position){
    fetch("/get-report?longitude=" + position.coords.longitude.toString() + 
        "&latitude=" + position.coords.latitude.toString())
        .then(response => response.json())
        .then(
            response => {
                data = response['Data'];
                if(data.length == 0){//if no results
                    document.getElementById("report-placeholder").innerHTML = "Sorry, no results ;^;";
                    console.log("/get-report returned no results");
                    return;
                }
                create_report_table(data);
            }
        )
}

function create_report_table(data){
    //create and populate table
    document.getElementById("report-placeholder").remove();
    var table = document.createElement("table");
    table.style.border = '1px solid black';
    const header = table.insertRow();
    header.insertCell().appendChild(document.createTextNode("Pollutant"));
    header.insertCell().appendChild(document.createTextNode("Rating"));
    for(let i = 0; i < data.length; i++){
        const row = table.insertRow();
        const pollutant = row.insertCell();
        pollutant.appendChild(document.createTextNode(data[i].pollutant));
        pollutant.style.border = '1px solid black';
        const aqi = row.insertCell();
        aqi.style.border = '1px solid black';
        aqi.appendChild(document.createTextNode(aqi_rating(data[i].aqi)));
    }
    document.getElementById("container").appendChild(table);
}

function aqi_rating(aqi){
    for(const rating in aqi_std){
        if(aqi <= aqi_std[rating]){
            return rating;
        }
    }
}