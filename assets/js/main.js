"use strict";

//Aufgaben Level 1_1 Loops for()
//Startwert =1 // =11 solange die <bedinung erfüllt mach weiter
for (let i = 1; i < 11; i++) {
    console.log(`Hello World ${i}`);
}
//BACKTICKS, keine Gänsefüßchen!!!
//let i = 0 Aufzählung Hello World 0


//Aufgaben Level 1_2 in leeres Array push() nutzen
const numArray = [];
for (let a = 0; a < 11; a++) {
    console.log(numArray.push(a));
}


//Aufgaben Level 1_3 for und while loop
let counter = 0;
while (counter < 10) {
    counter++;
    console.log("Hallo Welt" + counter);
}

//Aufgaben Level 1_4 array und for
const namesArray = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];
for (let b = 0; b < namesArray.length; b++) {
    console.log(namesArray[b]);
}

//Aufgaben Level 1_6 array push()
let retArray = [];
for (let d = 0; d < 100; d++) {
    console.log(`image${retArray.push(d)}.jpg`);
}

//Aufgabe Level 1_7 do while
let number = 0;
do {
    document.write(number);
    number++;
} while (number < 5);
console.log(number);


//Aufgaben Level 2-2 Loooooop
function loop(event) {
    event.preventDefault();
    let number = Number(document.getElementById("number").value);
    let output = "";

    if (number >= 1 && number <= 100) {
        for(let l = 0; l < number; l++) {
            output += "o";
        }
    }
    document.querySelector("#output").textContent = "L" + output + "p";
}
