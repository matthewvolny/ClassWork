//make yellow block change size on a keyboard click

let yellowSquare = document.getElementById("yellowsquare");

let increaseSize = () => {
  yellowSquare.style.width = "100px";
};

let decreaseSize = () => {
  yellowSquare.style.width = "50px";
};

yellowSquare.addEventListener("keydown", increaseSize);

yellowSquare.addEventListener("keyup", decreaseSize);
