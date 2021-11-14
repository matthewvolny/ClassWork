// 1. Hello You!
function hello(name) {
  return console.log(`Hello, ${name}!`);
}
hello("Mustache");

// 2. Hello You! Part 2
function hello(name = "World") {
  return console.log(`Hello, ${name}!`);
}
hello();

// 3. Madlib
function madLib(name, subject) {
  return `${name}'s favorite subject in school is ${subject}.`;
}
madLib("Matthew", "coding");

/*
// 4. Tip Calculator
function tipAmount(bill, service) {
	if (service === "good") {
    return console.log((20 / 100) * bill);
  } else if (service === "fair") {
    return console.log((15 / 100) * bill);
  } else if (service === "bad") {
    return console.log((10 / 100) * bill);
  }
}
tipAmount(50, 'good');
*/

/*
// 5. Tip Calculator 2
function tipAmount(bill, service) {
  if (service === "good") {
    return (20 / 100) * bill;
  } else if (service === "fair") {
    return (15 / 100) * bill;
  } else if (service === "bad") {
    return (10 / 100) * bill;
  }
}

function totalAmount(bill, service) {
  return console.log(tipAmount(bill, service) + bill);
}

totalAmount(50, "good");
*/

// 6. Tip Calculator 3
function tipAmount(bill, service) {
  if (service === "good") {
    return (20 / 100) * bill;
  } else if (service === "fair") {
    return (15 / 100) * bill;
  } else if (service === "bad") {
    return (10 / 100) * bill;
  }
}

function totalAmount(bill, service) {
  return tipAmount(bill, service) + bill;
}

function splitAmount(bill, service, numPeople) {
  return console.log(totalAmount(bill, service) / numPeople);
}

splitAmount(50, "good", 3);
