const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismysecret"));

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("Homepage");
});

app.get("/greet", (req, res) => {
  const { name = "anonymous" } = req.cookies;
  res.send(`Hey There, ${name}!`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "Mike");
  res.cookie("animal", "Harlequin Fish");
  res.send("You got a cookie");
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("Okay, signed your cookie");
});

app.get("/verifysigned", (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});
app.listen("3000", () => {
  console.log("Listening on port 3000");
});
