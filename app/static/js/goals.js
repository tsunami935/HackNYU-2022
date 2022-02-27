if(!localStorage.getItem("local_user_air_quality_data")){
    location.href = "/";
}
const local_user_air_quality_data = JSON.parse(localStorage.getItem("local_user_air_quality_data"));

const suggested_goals = [
    {
        "goal": "Drive less",
        "metric": "Miles driven"
    }
];

window.onload = function(){
    for(let i = 0; i < local_user_air_quality_data.goals.length; i++){
        const option = document.createElement("li");
        const ref = document.createElement("a");
        ref.innerHTML = local_user_air_quality_data.goals[i].goal;
        option.appendChild(ref);
        option.onclick = start_goal(local_user_air_quality_data.goals[i].goal);
        document.getElementById("goals").appendChild(option);
    }
    for(let i = 0; i < suggested_goals.length; i++){
        const option = document.createElement("li");
        const ref = document.createElement("a");
        ref.innerHTML = suggested_goals[i].goal;
        option.appendChild(ref);
        option.onclick = start_goal(suggested_goals[i].goal);
        document.getElementById("goals").appendChild(option);
    }
    {
        const option = document.createElement("li");
        const ref = document.createElement("a");
        ref.innerHTML = "Create my own goal";
        option.appendChild(ref);
        option.onclick = start_goal("Create my own goal");
        document.getElementById("goals").appendChild(option);
    }document.getElementById("goals").style.display = "none";
}

function show_list(){
    const goals = document.getElementById("goals");
    goals.style.display = goals.style.display == "block" ? "none" : "block";
}
window.onclick = function (event) {
    if (!event.target.matches(".dropdown_button")) {
        document.getElementById("goals").style.display = "none";
    }
}

function start_goal(goal_name){

}