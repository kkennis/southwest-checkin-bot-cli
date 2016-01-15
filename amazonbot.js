var casper = require('casper').create({
    verbose: true,
    logLevel: "debug",
    pageSettings: {
        loadImages: true, // The script is much faster when this field is set to false
        loadPlugins: true, // The script is much faster when this field is set to false
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    }
});

//First step is to open Amazon
casper.start().thenOpen("https://www.amazon.com/gp/sign-in.html", function() {
    console.log("==================================================");
    console.log("1 - Amazon website opened");
    this.capture("test/casperimages/1-AmazonLoginPage.png");
});

// //Second step is to click to the Sign-in button
// casper.then(function(){
//    this.evaluate(function(){
//       document.getElementById("nav-tools").children[0].doubleclick();
//    });
//    // this.echo(this.getTitle());
//    this.capture("2-AfterLoginSelection.png");
// });

//Now we have to populate username and password, and submit the form
casper.then(function(){
    console.log("==================================================");
    console.log("2 - Login using username and password");
    this.evaluate(function(){
        document.getElementById("ap_email").value="generocityteam@gmail.com";
        document.getElementById("ap_password").value=
    });
    // this.echo(this.getTitle());
    this.capture("test/casperimages/2-LoginFilled.png");
    this.evaluate(function() {
      document.getElementsByClassName("a-button-input")[0].click();
    });
    this.waitForUrl(/signin?/, function() {
      console.log("==================================================");
      this.echo("3 - Login Submitted");
      this.capture("test/casperimages/3-LoginSubmitted.png");
    });
});

//Wait to be redirected to the Home page, and then make a screenshot
casper.thenOpen("https://www.amazon.com/gp/css/homepage.html/ref=nav_youraccount_ya", function() {
    console.log("==================================================");
    console.log("Redirect to Amazon");
    this.waitForSelector("div.customer-name", function() {
      console.log("==================================================");
      console.log("4 - Take a screenshot when loaded")
      this.capture('test/casperimages/4-AfterLogin.png');
    });
});

casper.thenOpen("http://www.amazon.com/dp/B000RYC9GM", function() {
    console.log("==================================================");
    console.log("Redirect to Peanut Butter");
    this.waitForSelector("img#landingImage", function() {
      console.log("==================================================");
      console.log("5 - Take a screenshot when PB loaded")
      this.capture('test/casperimages/5-ViewItem.png');
    });
});

casper.then(function() {
  this.evaluate(function() {
    document.getElementById("add-to-cart-button").click();
  });
  this.waitForText("Cart subtotal", function() {
    console.log("==================================================");
    console.log("6 - Take a screenshot when PB added to cart")
    this.capture("test/casperimages/6-ItemAddedToCart.png");
  });
});

casper.thenOpen("https://www.amazon.com/gp/cart/view.html", function() {
  this.waitForText("Shopping Cart", function() {
    console.log("==================================================");
    console.log("7 - Take a screenshot when cart is open");
    this.capture("test/casperimages/7-Cart.png");
  });
});

casper.then(function() {
  this.evaluate(function() {
    document.getElementsByName("proceedToCheckout")[0].click();
  });
  this.waitForText("Choose a shipping address", function() {
    console.log("==================================================");
    console.log("8 - Take a screenshot when checkout opens");
    this.capture("test/casperimages/8-Checkout.png");
  });
});

casper.then(function() {
  this.waitForText("Choose a shipping address", function() {
    console.log("==================================================");
    console.log("9 - Open checkout screen");
  });
});

casper.then(function() {
  this.evaluate(function() {
    console.log("==================================================");
    console.log("Click to select shipping info");
    document.getElementsByClassName("a-button-input")[2].click();
    console.log("Shipping info clicked");
    this.capture("test/casperimages/9.1-ClickedShipping.png")
  });
  this.waitForText("American Express", function() {
    console.log("==================================================");
    console.log("10 - Confirm payment info");
    this.capture("test/casperimages/10-ShipmentInfoBeforeSubmission.png");
  });
});

casper.then(function() {
  this.evaluate(function() {
    document.getElementsByClassName("a-button-input")[3].click();
    console.log("==================================================");
    console.log("Use this payment method clicked");
  });
  this.waitForText("delivery date", function() {
    console.log("==================================================");
    console.log("11 - Review order info");
    this.capture("test/casperimages/11-OrderOverview.png");
  });
});

casper.run();