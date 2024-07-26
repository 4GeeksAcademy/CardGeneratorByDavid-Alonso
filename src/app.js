/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numbers = ["A", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♦", "♥", "♠", "♣"];

function cardGenerator() {
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.getElementById("number").innerHTML = randomNumber;
  document.getElementById("suit-top").innerHTML = randomSuit;
  document.getElementById("suit-bottom").innerHTML = randomSuit;

  if (randomSuit === "♦" || randomSuit === "♥") {
    document.getElementById("suit-top").style.color = "red";
    document.getElementById("suit-bottom").style.color = "red";
  } else {
    document.getElementById("suit-top").style.color = "black";
    document.getElementById("suit-bottom").style.color = "black";
  }
}
window.onload = cardGenerator;

setInterval(cardGenerator, 10000);

document.getElementById("newCard").addEventListener("click", cardGenerator);
