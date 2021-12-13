import style from "./main.css";
const counterElem = document.getElementById("counter");
const incElem = document.getElementById("inc");
const decElem = document.getElementById("dec");
const resetElem = document.getElementById("reset");

let count = 0;
counterElem.innerHTML = count;

let handleIncrement = () => {
  count += 1;
  counterElem.innerHTML = count;
};
let handleDecrement = () => {
  count -= 1;
  counterElem.innerHTML = count;
};
let handleReset = () => {
  count = 0;
  counterElem.innerHTML = count;
};

incElem.addEventListener("click", handleIncrement);
decElem.addEventListener("click", handleDecrement);
resetElem.addEventListener("click", handleReset);
