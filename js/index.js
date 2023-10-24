import { getColour, getBorder } from "./data.js";

// index page constructor
function main() {

    // give random bg colors to section
    const all_sections = document.querySelectorAll(".g-section");
    // console.log(all_sections)
    all_sections.forEach(element => {
        element.style.backgroundColor = getColour();
        if (getBorder(element.style.backgroundColor)) 
            element.classList.add("g-border");
    });
}

main();