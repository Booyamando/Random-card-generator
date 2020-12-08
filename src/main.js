/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let values = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let suites = ["heart", "club", "spade", "diamond"];

  let getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  document
    .querySelector(".card")
    .classList.add(suites[getRndInteger(0, suites.length - 1)]);
  document.querySelector(".text").innerHTML =
    values[getRndInteger(0, values.length - 1)];
};
