var readlineSync = require('readline-sync');
var moment = require('moment');

console.log(`Hey there! Don't want to rearrange your schedule around Southwest? Good, that's why I exist! Let's get started.`);

var firstName = readlineSync.question(`What's your first name? `);
var lastName = readlineSync.question(`Nice to meet you, ${firstName}. What's your last name? `);

var confirmationNumber;
var confValid = false;

while (!confValid){
  confirmationNumber = readlineSync.question(`And your confirmation number? `).toUpperCase();

  if (!/^[A-Z0-9]{6}$/.test(confirmationNumber)) {
    console.log(`Oops! Looks like your confirmation number is invalid. Confirmation numbers should be six characters, and letters and numbers only. Let's try that again.`);
  } else {
    confValid = true;
  }
}

var departureDate;
var depDateValid = false;

while (!depDateValid){
  departureDate = readlineSync.question(`Great! Your departure date? (I'm a computer, and don't know where you're from, so be i18n friendly!) `);
  var departureDateObj = Date.parse(departureDate);

  if (Number.isNaN(departureDateObj)){
    console.log(`Sorry! I couldn't understand that date. Try again? (I recommend YYYY-MM-DD format)`);
  } else if (departureDateObj < Date.now()) {
    console.log(`It looks like your departure date isn't more than 24 hours ahead. Maybe a typo, or you're a little behind schedule! Try again?`);
  } else {
    depDateValid = true;
  }
}

var departureTime;
var depTimeValid = false;

while (!depTimeValid){
  departureTime = readlineSync.question(`Almost done. Your departure time? `)

  if (/*invalid*/){
    console.log(`I couldn't understand that departure time. Try again? (Maybe include AM/PM, or use 24-hour format)`);
  } else {
    depTimeValid = true;
  }
}

var departureTz;
var depTzValid = false;

while (!depTzValid){
  departureTz = readlineSync.question(`Last question. What timezone ar you departing from? You can leave this blank if it's the one you're currently in.`)

  // Validate, check, and set.
}

// Then build moment object...
// Then schedule casper script to run at proper time, with proper args, in a docker.

console.log(departureDate);


