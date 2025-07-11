const calcDisplay = document.querySelector(".display");
const numberBtn = document.querySelectorAll(".btn.number");
const operatorBtn = document.querySelectorAll(".btn.operator");
const answerBtn = document.querySelector(".btn.equals");
const clearBtn = document.querySelector("#close");
const deleteBtn = document.querySelector(".btn.delete");

let num = [];
let decimalCount = 0;

clearBtn.addEventListener("click", function () {
  num.length = 0;
  decimalCount = 0;
  calcDisplay.value = num.join("");
});

deleteBtn.addEventListener("click", function () {
  const removed = num.pop();
  if (removed === ".") decimalCount--;
  calcDisplay.value = num.join("");
});

numberBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.getAttribute("data-value");
    if (value === ".") {
      if (decimalCount >= 1) return;
      decimalCount++;
    }

    num.push(value);
    calcDisplay.value = num.join("");
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.getAttribute("data-value");

    if (/[+\-*/]/.test(num[num.length - 1])) return;

    num.push(value);
    calcDisplay.value = num.join("");

    decimalCount = 0;
  });
});

function getNumbersFromArray(arr) {
  const expression = arr.join("");
  const numbers = expression.match(/-?\d+(\.\d+)?|-\.\d+|\.\d+/g).map(Number);
  return numbers;
}

function getOperatorsFromArray(arr) {
  const expression = arr.join("");
  const operators = expression.match(/[+\-*/]/g);
  return operators;
}

function evalArray() {
  let numbers = getNumbersFromArray(num);
  let operators = getOperatorsFromArray(num);

  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") {
      result += numbers[i + 1];
    } else if (operators[i] === "-") {
      result -= numbers[i + 1];
    } else if (operators[i] === "*") {
      result *= numbers[i + 1];
    } else if (operators[i] === "/") {
      result /= numbers[i + 1];
    }
  }

  num.length = 0;
  num.push(result);

  calcDisplay.value = result;
  decimalCount = 0;
  return result;
}

answerBtn.addEventListener("click", evalArray);
