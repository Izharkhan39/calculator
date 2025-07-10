const calcDisplay = document.querySelector(".display");
const numberBtn = document.querySelectorAll(".btn.number");
const operatorBtn = document.querySelectorAll(".btn.operator");
const answerBtn = document.querySelector(".btn.equals");

let num1 = "";
let operator = "";
let num2 = "";
let isOperator = false;

numberBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.getAttribute("data-value");
    if (!isOperator) {
      num1 += value;
      calcDisplay.value = num1;
      console.log(`num1 : ${num1}`);
      console.log(`:${typeof num1}`);
    }
    if (isOperator) {
      num2 += value;
      calcDisplay.value = `${num1}${operator}${num2}`;
      console.log(`num2 : ${num2}`);
      console.log(`:${typeof num2}`);
    }
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.getAttribute("data-value");

    // if ((num1 = "")) {
    //   num1 = "0";
    //   operator = value;
    // }
    operator = value;
    isOperator = true;
    calcDisplay.value += operator;
    console.log(`clicked : ${operator}`);
  });
});

answerBtn.addEventListener("click", function () {
  switch (operator) {
    case "+":
      calcDisplay.value = Number(num1) + Number(num2);
      num1 = calcDisplay.value;
      num2 = "";
      operator = "";
      break;
    case "-":
      calcDisplay.value = Number(num1) - Number(num2);
      num1 = calcDisplay.value;
      num2 = "";
      operator = "";
      break;
    case "*":
      calcDisplay.value = Number(num1) * Number(num2);
      num1 = calcDisplay.value;
      num2 = "";
      operator = "";
      break;
    case "/":
      calcDisplay.value = Number(num1) / Number(num2);
      num1 = calcDisplay.value;
      num2 = "";
      operator = "";
      break;
  }
});
