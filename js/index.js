import { getColour } from "./data.js";

// index page constructor
function main() {

    // give random bg colors to section
    const all_sections = document.querySelectorAll(".g-section");
    console.log(all_sections)
    all_sections.forEach(element => {
        element.style.backgroundColor = getColour();
        console.log(element.style.backgroundColor );
    });
}

main();