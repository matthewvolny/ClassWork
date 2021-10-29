// This is a single line comment : This will be ignored by JavaScript, i.e. it will not be executed
// Create 4 string variables : a firstName, a lastName, currentDate (ex: 10/28/2021 date would be 28), and programming language
const firstName = "Matthew";
const lastName = "Volny";
let currentDate = 28;
let programmingLanguage = "Javascript";
// Create a function that introduces yourself: It should take 2 parameters: a first name and a last name
function letMeIntroduceMyself(first, last) {
  // inside the function block create 2 variables, 1 string and another number: current month and current year
  let currentMonth = "October";
  let currentYear = 2021;
  // lets introduce ourself with console.log and template literals i.e. `I am an example of a template literal`
  // ex. Hello! My name is firstName lastName < pass in your parameters
  console.log(`Hello my name is ${first} ${last}`);
  // ex. The date is the currentDate of currentMonth, currentYear
  console.log(`The date is ${currentDate} of ${currentMonth}, ${currentYear}`);
  // ex. I am currently learning how to program in programming language
  console.log(
    `I am currently learning how to program in ${programmingLanguage}`
  );
  // ex. Change the value of the programming language variable
  programmingLanguage = "React";
  // Add a console.log to output programming language
  console.log(`and ${programmingLanguage}`);
  // ex. And I'm learning language
  // ex. I now know how to make a variables and functions
  console.log("I now know how to make a variables and functions");
  return;
}

letMeIntroduceMyself(firstName, lastName);

// exit out of the function
// console.log a global scoped variable i.e. a variable not defined in a code block
// console.log a local scoped variable defined in the function block
