let stringArray = ["Matthew", "Volny", "Javascript"];
let numberArray = [28];

function introduction(stringArr, numArr) {
  stringArr[3] = "October";
  numArr[1] = 2021;
  console.log(`Hello my name is ${stringArr[0]} ${stringArr[1]}`);
  console.log(`The date is ${numArr[0]} of ${stringArr[3]}, ${numArr[1]}`);
  console.log(`I am currently learning how to program in ${stringArr[2]}`);
  stringArr[2] = "React";

  console.log("I now know how to make a variables and functions");
  return;
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