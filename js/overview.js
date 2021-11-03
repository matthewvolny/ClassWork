/*
function fillArray(num) {
	let newArray = [];
	for (num; num>=0; num--) {
		newArray.push(num);
	}
	return newArray;
}

fillArray(10); //. [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

……..

This doesn’t work:
*/

function fillArray(num) {
  let newArray = [];
  for (num -= 1; num >= 0; num--) {
    newArray.push(num);
  }
  return console.log(newArray);
}

fillArray(10); //. [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]
