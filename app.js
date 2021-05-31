const arrowUp = document.querySelector(".increase");

const counter = document.querySelector(".counter");

const arrowDown = document.querySelector(".decrease");

const counterReset = document.querySelector(".reset");

let number = 0;
// NOTE: putting number++ / number-- as a value of counter.textCounter will create a BUG, in increasing the value of counter first it will increase a number by one then start decreaseing ! .
// as you see we have to separate number++ / number-- or at least one of them must be separate .
const increaseNumber = () => {
  number++;
  counter.textContent = number;
};
const decreaseNumber = () => {
  number--;
  counter.textContent = number;
};

arrowDown.addEventListener("click", decreaseNumber);
arrowUp.addEventListener("click", increaseNumber);
counterReset.addEventListener("click", () => {
  counter.textContent = 0;
  number = 0;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    increaseNumber();
  } else if (e.key === "ArrowDown") {
    decreaseNumber();
  }
});
