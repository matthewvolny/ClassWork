// Lets make a function that lets us know when we can go to the movies with our friend
// Create an object called myFriendsSchedule that has our friends schedule the key/value pair should be day_of_week and a true/false value i.e. { sunday: true }
let myFriendsSchedule {
sunday: true,
monday: false,
tuesday: false,
wednesday: true,
thursday: true,
friday: false,
saturday: false
}
// Create an object called myMoneySchedule that has how much money I have during the week the key/value pair should be day_of_week and a number value i.e. { sunday: 10 }
let myMoneySchedule {
sunday: 10,
monday: 5,
tuesday: 20,
wednesday: 10,
thursday: 75,
friday: 1,
saturday: 0
}

// Create a function called canWeGoToTheMovies with a parameter that takes a string value, the value will be the day of the week
function canWeGoToTheMovies(dayOfTheWeek){
   if(myFriendsSchedule[dayOfTheWeek] === true && myMoneySchedule[dayOfTheWeek] > 10) {
       console.log("On" + dayOfTheWeek + "We can both go to the movies");
   } else if (myFriendsSchedule[dayOfTheWeek] === true && myMoneySchedule[dayOfTheWeek] > 10) {
       console.log("On" + dayOfTheWeek + "We can both go to the movies");
   } else {
       console.log("On" + dayOfTheWeek + "Neither of us can go to the movies");
   }
}

// create an if statement for myFriendsSchedule and myMoneySchedule.
// Using bracket notation lookup the day of the week for both objects, find out if my friend is free AND I have the money
// If they have the time AND I have the money then we can go!
// ex. "On " + theDateWeWantToGo + "? Yes, lets go to the movies!!"
// Create an else/if to check if my friend has the time OR if I have the money
// If they have the time OR I have the money then we can go!
// ex. "On " + theDateWeWantToGo + "? One of us can go to the movies"
// Create an else
// if NEITHER they have the time AND I don't have the money then we can not go :(
// ex: "On " + theDateWeWantToGo + "? We can't go to the movies"
// exit the function
// Check 3 days of the week: each day of the week should return a "yes we can go", a "one of us can go", and a "no we can not go"
