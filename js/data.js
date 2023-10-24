const colors = [ "#C8AD7E",
"#F5F5DD", "#ECE7CA", "#E3D8B7", "#DACAA4","#D1BB91", "#FFFFFF" 
];
let colour_index = 0;

export function getColour() {
    // return colors[Math.floor(Math.random() * colors.length + 0.5)];
    const color = colors[colour_index];
    colour_index = colour_index >= colors.length - 1 ? 0 : colour_index + 1;
    return color;
}

export function getBorder(colour) {
    //console.log(colour)
    if (colour > (225, 225, 225)) return true; else return false;
}
