//
document.querySelector("#s2").innerHTML = 
`
<h4>s2</h4>
<p class="centre">The <span class="bold">toString()</span> method can output numbers from base 2 to 36:</p>
<p id="s2-demo"></p>
<p class="attribution center"><a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_numbers_tostring">source: W3schools</a></p>

`;

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_numbers_tostring
let myNumber = 32;
document.getElementById("s2-demo").innerHTML =
"Decimal 32 = " + "<br><br>" + 

"Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2) + "<br>" + 
"String: \"" + myNumber.toString() + "\"<br>";

