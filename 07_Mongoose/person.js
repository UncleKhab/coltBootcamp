const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
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

const personSchema = mongoose.Schema({
  first: String,
  last: String,
});
// Exists only in mongoose, not accesible via mongo.
personSchema.virtual("fullName").get(function () {
  return `${this.first} ${this.last}`;
});

// Middleware
personSchema.pre("save", async function () {
  console.log("About To Save!!!");
});

personSchema.post("save", async function () {
  console.log("Just Saved");
});
const Person = mongoose.model("Person", personSchema);
