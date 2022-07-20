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
  if (hours >= 9 || hours <= 17 || days == 0 || days == 6) {
    res.render("home");
    next();
  } else {
    res.render("closed");
  }
}

////////////////////////////////////      Routes        //////////////////////
// create the get route for 'Home' page
app.get("/", checkTime, (req, res) => {
  console.log("server on 'Home' Page ...");
});

// create get route for 'Services' page
app.get("/services", (req, res) => {
  console.log("server on 'Services' Page ...");
  res.render("services");
});

// get route for contact us page
app.get("/contact", (req, res) => {
  console.log("server on 'Contact' page ...");
  res.render("contact");
});

//////////////////////// Listen to port 3000    ////////////////////////////////
app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000, great !");
});
