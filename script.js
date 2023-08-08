let firstNumber = 0,
  secondNumber = 0,
  sign = "",
  displayNumber = 0;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  const ans = a / b;
  const answer = Number(ans.toFixed(8));
  return answer;
}

function operate(firstNumber, secondNumber, sign) {
  if (sign == "add") {
    return add(firstNumber, secondNumber);
  } else if (sign === "subtract") {
    return subtract(firstNumber, secondNumber);
  } else if (sign == "multiply") {
    return multiply(firstNumber, secondNumber);
  } else if (sign == "divide") {
    return divide(firstNumber, secondNumber);
  }
}

const display = document.getElementById("display");

function clearDisplay() {
  while (display.childElementCount) {
    display.removeChild(display.firstChild);
  }
}

function updateDisplay(num) {
  const number = document.createElement("p");
  number.textContent = num;
  number.classList.add("display-content");
  display.appendChild(number);
}

for (let i = 0; i < 10; i++) {
  const buttonNumber = document.getElementById(`button${i}`);
  buttonNumber.addEventListener("click", () => {
    if (sign !== "") {
      clearDisplay();
    }
    displayNumber = 10 * displayNumber + +`${i}`;

    clearDisplay();
    updateDisplay(displayNumber);
  });
}

const operatorButtons = ["add", "subtract", "multiply", "divide"];

for (const operation of operatorButtons) {
  const operator = document.getElementById(operation);
  operator.addEventListener("click", () => {
    if (sign === "") {
      firstNumber = displayNumber;
      displayNumber = 0;
      sign = operation;
    } else {
      secondNumber = displayNumber;
      let ans = operate(firstNumber, secondNumber, sign);

      clearDisplay();
      updateDisplay(ans);

      firstNumber = ans;
      sign = operation;
      displayNumber = 0;
    }
  });
}

const equals = document.getElementById("equals");
equals.addEventListener("click", () => {
  secondNumber = displayNumber;
  let ans = operate(firstNumber, secondNumber, sign);
  displayNumber = ans;

  clearDisplay();
  updateDisplay(ans);
  firstNumber = 0;
  secondNumber = 0;
  sign = "";
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  firstNumber = 0;
  secondNumber = 0;
  sign = "";
  displayNumber = 0;

  clearDisplay();
  updateDisplay(0);
});
