let is_light_on = false;

function switch_light() {
    const element = document.getElementById("bulb-container");
    if (!is_light_on) 
        element.classList.add("light-on");
    else 
        element.classList.remove("light-on");

    is_light_on = !is_light_on;
}

document.querySelector("#s1").innerHTML = 
`
<h4>s1</h4>
<div class="pointer">
    <svg>
        <path id="line1"  
            d="M 5 90 C 10 65 40 45 75 45" 
            stroke-dasharray="5 3"
            fill="transparent"/>
        <path id="line2" 
            d="M 60 40 L 75 45 L 61 52" 
            fill="transparent"/>
    </svg>
    <div class="round-click" onclick="switch_light()">
        click<br>here
    </div>
</div>
<div class="bulb" id="bulb-container">
    <img src="./img/bulb.png">
</div>
<p class="attribution centre"><a href="https://www.freepik.com/free-vector/bulb-icon_810569.htm#query=light%20bulb&position=10&from_view=keyword&track=ais">Image by kreativkolors</a> on Freepik</p>
`;