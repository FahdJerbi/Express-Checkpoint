// import express and init app
const express = require("express");
const app = express();

// load view engine
app.set("view engine", "pug");

// middleware function:
function checkTime(res, res, next) {
  console.log("middleware is activated");
  let hours = new Date().getHours();
  let days = new Date().getDay();
  if (hours >= 9 || hours <= 17) {
    res.render("closed");
  } else {
    res.render("home");
  }

  next();
}

////////////////////////////////////      Routes        //////////////////////
// create the get route for 'Home' page
app.get("/", checkTime, function (req, res) {
  console.log("serveur 7al 3al 'Home' Page ...");
  // res.render("home");
});

// create get route for 'Services' page
app.get("/services", function (req, res) {
  console.log("serveur 7al 3al 'Services' Page ...");
  res.render("services");
});

// get route for contact us page
app.get("/contact", function (req, res) {
  console.log("serveur 7al 3al 'Contact' page");
  res.render("contact");
});

//////////////////////// Listen to port 3000    ////////////////////////////////
app.listen(3000);
