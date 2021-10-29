// We are introducing ourselves again. Same setup but with ARRAYS
// Create 2 array variables. One with only strings and the other with only numbers.
// The string array will have our firstName, lastName, and programming language
let stringArray = ["Matthew", "Volny", "Javascript"];

// The number array will have the date
let numberArray = [28];
// Create a function that introduces yourself BUT with ARRAYS : It should take 2 parameters: a string array and a number array
function introduction(stringArr, numArr) {
  // add a new value to the string array using the square brackets, **remember what index to use
  stringArr[3] = "October";
  // add a new value to the number array using the square brackets **remember what index to use
  numArr[1] = 2021;
  // lets introduce ourself with console.log and template literals i.e. `I am an example of a template literal`
  console.log(`Hello my name is ${stringArr[0]} ${stringArr[1]}`);
  // ex. Hello! My name is stringArray[index] stringArray[index] < what index would the first and last name be?
  // ex. The date is the numberArray[index] of currentMonth, numberArray[index]  < what index would the date, month and year be?
  // ex. I am currently learning how to program in stringArray[index] < What index would the language be?
  console.log(`The date is ${numArr[0]} of ${stringArr[3]}, ${numArr[1]}`);
  // change the value at the index the programming language is at to "HTML/CSS"
  console.log(`I am currently learning how to program in ${stringArr[2]}`);
  stringArr[2] = "React";
  // Add a console.log to output programming language
  // ex. And I'm learning stringArray[index]
  console.log("I now know how to make a variables and functions");
  return;
  // ex. I now know how to make a variables and functions
  // exit out of the function
  //Call the function
}

introduction(stringArray, numberArray);

// What would be the length of the string array?
console.log(stringArray.length);
// Create a function that re-introduces yourself with ARRAYS : using the push, pop, and join array methods
function reintroduceMyself() {}
//create a string array with these values: "HTML", "CSS", "JavaScript", "React", "Bananas"
let stringArrayOfLanguages = ["HTML", "CSS", "JavaScript", "React", "Bananas"];
// use console.log to let everyone know what languages you are learning and JOIN all the items of the array into a string
console.log(
  `I want to say that I am learning ${stringArrayOfLanguages.join(", ")}`
);
// ex: I want to say that I am learning stringArray.
// You are not learning Bananas! POP that item out of the Array
console.log(`Wait! I'm not learning ${stringArrayOfLanguages.pop()}`);
// ex: Wait! I'm not learning bananas
// PUSH a new language, Node, into the stringArray
stringArrayOfLanguages.push("Node");
// ex: I am leaning this stringArray < convert the stringArray into a string
console.log(
  `I want to say that I am learning ${stringArrayOfLanguages.toString(", ")}`
);
// exit out of the function
// call the re-introduce function
// In the reintroduceMyself function what would happen if we called the stringArray variable that we defined in the function block?

reintroduceMyself();
