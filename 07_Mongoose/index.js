const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/movieApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open");
  })
  .catch((err) => {
    console.log("errrooor");
    console.log(err);
  });
// Create a schema , like a map for how the data will be stored
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});
// Tell mongoose to create a model so it can connect with mongo
// arg[0] - Name of the model, always singular and uppercase
// it makes a collection
// arg[1] - The schema / map the data will be stored.

const Movie = mongoose.model("Movie", movieSchema);
// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1986,
//   score: 9.2,
//   rating: "R",
// });
// Inserting many documents in mongo from mongoose
// Movie.insertMany([
//   { title: "Amelie", year: 2021, score: 9.1, rating: "R" },
//   { title: "Predator", year: 1997, score: 4.1, rating: "PG" },
//   { title: "Alien", year: 1996, score: 7.1, rating: "PG-13" },
//   { title: "Terminator", year: 1994, score: 5.1, rating: "R" },
//   { title: "Eternal Sunshine", year: 2002, score: 9.6, rating: "R" },
// ]).then((data) => {
//   console.log("it worked!");
//   console.log(data);
// });
