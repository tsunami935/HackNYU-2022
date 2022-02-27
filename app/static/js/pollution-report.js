const xhr = new XMLHttpRequest()

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendPosition);
}
//GET
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
//POST
xhr.open("POST", "/get-report")
xhr.setRequestHeader("location", sendPosition(position)) 
xhr.send(JSON.stringify(get-report))

//tracking data upload
xhr.upload.onprogress = function(e) {
    console.log(`${e.loaded}B of ${e.total}B uploaded`)
}

xhr.onload = function() {
    console.log(xhr.status)
}

xhr.onerror = function() {
    console.log("Network error occured")
}
