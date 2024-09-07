const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.getElementById("display");
let currentOperator = 0;
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  display.value = "";
  sumArr = [];
  currentOperator = 0;
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const currentNumber = number.textContent;
    display.value += currentNumber;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    currentOperator = operator.textContent;
    add();
  });
});

const equal = document.getElementById("equal");

equal.addEventListener("click", () => {
  console.log(display.value);
  sumArr.push(display.value);
  console.log(sumArr);
  if (currentOperator === "+") {
    sum();
  } else if (currentOperator === "-") {
    sub();
  } else if (currentOperator === "*") {
    mul();
  } else if (currentOperator === "/") {
    div();
  }
  sumArr = [];
});

let sumArr = [];

function add() {
  sumArr.push(display.value);
  display.value = "";
}

function sum() {
  let sum = 0;
  for (let i of sumArr) {
    sum += +i;
  }
  display.value = sum;
}

function sub() {
  let subtraction = sumArr[0];
  for (let i = 1; i < sumArr.length; i++) {
    subtraction -= +sumArr[i];
  }
  display.value = subtraction;
}

function mul() {
  let multiplication = sumArr[0];
  for (let i = 1; i < sumArr.length; i++) {
    multiplication *= +sumArr[i];
  }
  display.value = multiplication;
}

function div() {
  let division = sumArr[0];
  for (let i = 1; i < sumArr.length; i++) {
    division /= +sumArr[i];
  }
  display.value = division;
}
