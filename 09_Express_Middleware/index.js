const express = require("express");
const app = express();
const morgan = require("morgan");

// Allows to run code on every request
// app.use(morgan("common"));
// app.use((req, res, next) => {
//   console.log("This is my first Middleware");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("This is my second Middleware");
//   next();
// });
// MIDDLEWARE
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I like dogs");
  next();
});

// FAKE AUTHENTICATION WTH MIDDLEWARE
const checkPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  res.send("Sorry You need a password");
};
// ROUTES
app.get("/", (req, res) => {
  console.log(`Request time: ${req.requestTime}`);
  res.send("Home Page");
});
app.get("/dogs", (req, res) => {
  console.log(`Request time: ${req.requestTime}`);
  res.send("Woof Woof");
});

app.get("/secret", checkPassword, (req, res) => {
  res.send("Secret: I like cheese");
});
app.use((req, res) => {
  res.status(404).send("NOT FOUND!");
});
app.listen("3000", () => {
  console.log("App is Listening");
});
