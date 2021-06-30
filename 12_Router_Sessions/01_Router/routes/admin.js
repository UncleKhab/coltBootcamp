const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  } else {
    res.send("NOT AN ADMIN!");
  }
});

router.get("/topsecret", (req, res) => {
  res.send("This is top secret");
});
router.get("/usefull", (req, res) => {
  res.send("usefull recipe");
});
module.exports = router;
