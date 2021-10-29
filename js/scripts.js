//document.body.innerHTML = "This is the text of the body element";

//document.querySelector("h1").innerHTML = "Suck it dilbus!";

//document.getElementById("place1").innerHTML = "Italy";

//document.body.style.backgroundColor = "grey";

/*
let h1 = document.querySelector("h1");
h1.style.backgroundColor = "yellow";
*/

//following two are the same!
let bodyElement = (document.body.style.backgroundColor = "pink");

/*
let body = document.querySelector("body");
body.style.backgroundColor = "pink";
*/

let newLocation = document.createElement("div");
newLocation.id = "Uganda";
newLocation.innerHTML = "Visit Uganda!";

document.getElementById("locations").appendChild(newLocation);

let imageShufflerButton = document.getElementById("imageShufflerButton");

function shuffleImages() {
  imageShufflerButton.style.backgroundColor = "yellow";
  imageShufflerButton.style.border = "2px";
}

imageShufflerButton.onclick = shuffleImages;

let costaRica = document.getElementById("place3");

//costaRica.parentNode.innerHTML = "Visit these countries!";

//2 ways to click on an element and make it change color
let mexico = document.getElementById("place1");

let addBorder = () => {
  mexico.style.color = "purple";
};

//mexico.addEventListener("click", addBorder);

mexico.onclick = addBorder; //above is an alternative event handler

//change color of red block and insert random number from 1-100

let redSquare = document.getElementById("redsquare");

let changeRedSquare = () => {
  let num = Math.floor(Math.random() * 100);
  redSquare.style.border = "white";
  redSquare.style.border = "2px";
  redSquare.style.border = "dotted";
  redSquare.innerHTML = num;
  //let redSquare = redSquare.innerHTML.timeStamp; trying to add a timestamp for this function, but does not work.
  //redSquare.removeEventListener("click", changeRedSquare);
};

redSquare.addEventListener("wheel", changeRedSquare);

//make the green block disappear

let greenSquare = document.getElementById("greensquare");

let hideGreenSquare = () => {
  //greenSquare.style.display = "none";  //alternative mode of hiding element - it moves elements around it
  greenSquare.style.visibility = "hidden";
};

greenSquare.addEventListener("click", hideGreenSquare);

//make the blue block move - could not get this to work

let blueSquare = document.getElementById("bluesquare");

let moveSquareUp = () => {
  blueSquare.style.bottom = "250px";
};

let moveSquareDown = () => {
  blueSquare.style.bottom = "50px";
};

blueSquare.addEventListener("click", moveSquareUp);

blueSquare.addEventListener("click", moveSquareDown);

//make yellow block change size on a keyboard click - does not work

let yellowSquare = document.getElementById("yellowsquare");

let increaseSize = () => {
  yellowSquare.style.width = "100px";
};

let decreaseSize = () => {
  yellowSquare.style.width = "25px";
};

yellowSquare.addEventListener("keydown", increaseSize);

yellowSquare.addEventListener("keyup", decreaseSize);

//color changing button, could not get to work

/*
let colorButton = document.getElementById("color-button");

let randomColorGenerator = () => {
  return Math.floor(Math.random() * 256);
};

let colorChange = () => {
  colorButton.style.backgroundColor = `rgb(${randomColorGenerator},${randomColorGenerator},${randomColorGenerator})`;
};

colorButton.onclick = colorChange;
*/

let button = document.getElementById("color-button");

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange() {
  let randomColor =
    "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";

  button.style.backgroundColor = randomColor;
}

button.addEventListener("click", colorChange);

//setting up a reset button that erases changes to the red square

let resetButton = document.getElementById("resetButton");

let resetSquare = () => {
  redSquare.innerHTML = "";
};

resetButton.onclick = resetSquare;

//random list of colored circles until a red hit - could not get this to display on screen, only in the console

let redCircle = document.getElementById("redCircle");
let blueCircle = document.getElementById("blueCircle");
let yellowCircle = document.getElementById("yellowCircle");
let greenCircle = document.getElementById("greenCircle");

let circlesArr = [redCircle, blueCircle, yellowCircle, greenCircle];

let currentCircle;

while (currentCircle != redCircle) {
  currentCircle = circlesArr[Math.floor(Math.random() * 4)];
  console.log(currentCircle);
  document.querySelector("h2").textContent = currentCircle;
}

//same code with numbers
let colors = ["red", "blue", "yellow", "green"];

let currentColor;

while (currentColor != "red") {
  currentColor = colors[Math.floor(Math.random() * 4)];
  document.write(currentColor); //how to have this output with a style
}
