const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationshipDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO OPEN");
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const newUser = new User({
    first: "Mickey",
    last: "Mouse",
  });
  newUser.addresses.push({
    street: "Testului",
    city: "Testandin",
    state: "Testos",
    country: "Testia",
  });
  const res = await newUser.save();
  console.log(res);
};

const addAdress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "99",
    city: "Red",
    state: "Balloons",
    country: "Summer",
  });
  const res = await user.save();
  console.log(res);
};

addAdress("60db63ce9b5b03472394ab3b");
