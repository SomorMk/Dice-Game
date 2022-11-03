// var firstPlayer = prompt("First Player's Name!");
// var secoundPlayer = prompt("Secound Player's Name!");

// First Dice Start
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomDiceImage);


// Secound Dice Start
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomDiceImage2);


// Winner Part Start
// var p1 = firstPlayer + " Wins!";
// var p2 = secoundPlayer + " Wins!";
var p1 = "Player 1 Wins!";
var p2 = "Player 2 Wins!";

if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = p1;
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = p2;
}