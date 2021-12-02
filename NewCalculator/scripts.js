let screen = document.getElementById("input"); // input/output button
let number = document.querySelectorAll(".numbers div"); // number buttons
let operator = document.querySelectorAll(".operators div"); // operator buttons
let result = document.getElementById("result"); // equal button
let clear = document.getElementById("clear"); // clear button

// adding event handlers to number buttons
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    // storing current input string and its last character in variables
    let currentString = screen.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    // conditions for adding numbers
    if (currentString === "") {
      screen.innerHTML += e.target.innerHTML;
    } else if (
      (currentString !== "" && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      screen.innerHTML += e.target.innerHTML;
    } else {
      screen.innerHTML += e.target.innerHTML;
    }
  });
}

// adding click handlers to number buttons
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    // storing current input string and its last character in variables
    let currentString = screen.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    // if first key pressed is an operator, don't do anything
    if (currentString === "") {
      console.log("enter a number first");
    } else if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      let replacedOperator = currentString.replace(
        lastChar,
        e.target.innerHTML
      );
      screen.innerHTML = replacedOperator;
    } else {
      screen.innerHTML += e.target.innerHTML;
    }
  });
}

// on click of 'equal' button
result.addEventListener("click", function () {
  // this is the string that we will be processing eg. -10+26+33-56*34/23
  let inputString = screen.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  let numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  let operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);

  // now we are looping through the array and doing one operation at a time.
  // first divide, then multiply, then subtraction and then addition
  // as we move we are alterning the original numbers and operators array
  // the final element remaining in the array will be the output

  let multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  screen.innerHTML = numbers[0]; // displaying the output
});

// clearing the input on press of clear
clear.addEventListener("click", function () {
  screen.innerHTML = "";
});
