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
                store_data(data);
                create_next_button();
            }
        )
}

function create_report_table(data){
    //create and populate table
    var table = document.createElement("table");
    table.classList.add("table");
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
    document.getElementById("report-placeholder").remove();
    document.getElementById("container").appendChild(table);
}

function store_data(data){
    const local_user_air_quality_data = {
        "raw_data" : [{"data" : data, "date" : new Date()}],
        "goals" : []
    };
    if(localStorage.getItem("local_user_air_quality_data")){
        my_data = JSON.parse(localStorage.getItem("local_user_air_quality_data"));
        my_data.raw_data.push(local_user_air_quality_data.raw_data[0]);
        localStorage.setItem("local_user_air_quality_data", JSON.stringify(my_data));
    }
    else{
        localStorage.setItem("local_user_air_quality_data", JSON.stringify(local_user_air_quality_data));
    }
}

function create_next_button(){
    const button =  document.createElement("button");
    button.onclick = function () {
        location.href = "/goals";
    };
    button.innerHTML = "Set my goals";
    document.getElementById("container").appendChild(button);
}

function aqi_rating(aqi){
    for(const rating in aqi_std){
        if(aqi <= aqi_std[rating]){
            return rating;
        }
    }
}