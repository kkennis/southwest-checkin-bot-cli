var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    pageSettings: {
        loadImages: false, // The script is much faster when this field is set to false
        loadPlugins: false, // The script is much faster when this field is set to false
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    }
});
var flightData = require('./flight-data')

// This should go through first part!
casper.start().thenOpen('https://www.southwest.com/flight/retrieveCheckinDoc.html', function(){
  console.log("Check in page opened!");

  this.evaluate(function(){
    document.getElementById('confirmationNumber').value = flightData.confirmationNumber;
    document.getElementById('firstName').value = flightData.firstName;
    document.getElementById('lastName').value = flightData.lastName;
    document.getElementById('submitButton').click();
  })
})

