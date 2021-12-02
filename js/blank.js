let firstName = document.getElementById("first-name");
let job = document.getElementById("job");
let age = document.getElementById("age");
let button = document.querySelector("button");
let msg = document.querySelector(".msg");

let characters = [];
//using a function to build an object
let PeopleMaker = (firstName, job, age) => {
  this.firstName = firstName;
  this.job = job;
  this.age = age;
  this.greeting = function () {
    return console.log(`hello, i am ${this.firstName}`);
  };
  characters.push(newCharacter);
};

button.addEventListener("click", function (event) {
  event.preventDefault();

  let newCharacter = PeopleMaker(firstName.value, job.value, age.value);
  console.log(newCharacter);
});

console.log(characters);

/*
//Shadowgate style rpg (arkham horror lcg)
//prettier-ignore
const LocationBuilder = function (locationName, items, enemies, puzzle, adjacentLocations) {
  this.locationName = locationName;
  this.items = items;
  this.enemies = enemies;
  this.puzzle = function () {
    console.log('the door is here');
  };
  this.adjacentLocations = adjacentLocations;
  this.triggeredEvent = function () {
    console.log("enemies attack player");
  };
};

let allLocations = [
  LocationBuilder("study", "desk", "none", findHiddenDoor, "none"),
  LocationBuilder("hallway", "desk", "none", "none", "none"),
];

console.log(allLocations);
*/
