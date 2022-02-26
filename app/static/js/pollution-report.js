if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendPosition);
}

function sendPosition(position){
    fetch("/get-report?longitude=" + position.coords.longitude.toString() + 
        "&latitude=" + position.coords.latitude.toString())
        .then(response => response.json())
        .then(
            response => {
                //create stuff onscreen
            }
        )
}