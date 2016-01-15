var readlineSync = require('readline-sync');

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

var departureDate = readlineSync.question(`Great! Your departure date? (I'm a computer, and don't know where you're from, so be i18n friendly! `);

console.log(departureDate);


