let is_light_on = false;

function switch_light() {
    const element = document.getElementById("bulb-container");
    if (!is_light_on) 
        element.classList.add("light-on");
    else 
        element.classList.remove("light-on");

    is_light_on = !is_light_on;
}