//Iteration 1: Names and Input

let hacker1 = "brainGlitch";
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "neuronBooster";
console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals

if
  (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the Navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  let sameCount = hacker1.length
  console.log(`Wow, you both have equally long names, ${sameCount} characters!`)
}
//

//Iteration 3: Loops

//3.1
//don't get the need for loop here or even the loop it self (just starting as all the loops I've seen so far... don't fully understand this)

// without loop console.log(hacker1[i].toUpperCase().split("").join(""))

let capNameDriver = "";

for (let i = 0; i < hacker1.length; i++) {
  capNameDriver += hacker1[i].toUpperCase() + " ";
}
console.log(capNameDriver);

// why not just console.log(hacker1.toUpperCase().split("").join(" "));

//testing codes
//console.log(hacker1.split("")); // testing - just split() creates an array of strings
// console.log(hacker1.split("").join("!"));// testing join (through google)
// console.log(hacker1.toUpperCase().split("").join(" ")); // code by Raquel

//3.2
//need a translation for this... very confused with this and only made it through google

let reverseHacker = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseHacker += hacker2[i];
}
console.log(reverseHacker);

//Or - seems easier - still confused with the looping

//reverseHacker = hacker2.split('')
//let reversedName = reverseHacker.reverse();
//let result = reversedName.join('');
//
//console.log(result);


//3.3
//first fail ... and realized that was not using a loop
//if (hacker1.indexOf() === hacker2.indexOf()){
//  console.log("What?! You both have the same name?");
//}
//else if (hacker1.indexOf > hacker2.indexOf ){
//  console.log("Yo, the navigator goes first definitely.")
//}
//else{
//  console.log("Yo, the navigator goes first definitely.")
//}

let firstHacker = "";
let throwCoin = "What?! You both have the same initials? Let's throw a coin!!"

//used first code... didn't working
//let a = hacker1.indexOf();
//let b = hacker2.indexOf();
//for (let i = 0; i < hacker1.length; i++) {

let a = hacker1[0];
let b = hacker2[0];

for (let i = 0; i < 1; i++) {

  if (a > b) {
    firstHacker = "Yo, the navigator goes first definitely.";
    console.log(firstHacker)
  }
  else if (a < b) {
    firstHacker = "The driver's goes first!";
    console.log(firstHacker)
  }
  else {
    console.log(throwCoin);
  }
}

// adding code to confirm the script

const hacker3 = "neutrin";

a = hacker3[0];
b = hacker2[0];

for (let i = 0; i < 1; i++) {

  if (a > b) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else if (a < b) {
    console.log("The driver's goes first!")
  }
  else {
    console.log("What?! You both have the same initials?");
  }
}