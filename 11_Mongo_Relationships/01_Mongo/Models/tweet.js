const mongoose = require("mongoose");
const { Schema } = mongoose;

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

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//   //   const user = new User({ username: "chickenfan99", age: 61 });
//   const user = await User.findOne({ username: "chickenfan99" });
//   //   const tweet1 = new Tweet({ text: "I like pancakes", likes: 0 });
//   const tweet1 = new Tweet({
//     text: "I reaaaallly like maple syrup, though I never had it.",
//     likes: 255,
//   });
//   tweet2.user = user;
//   user.save();
//   tweet1.save();
// };

// makeTweets();

const findTweets = async () => {
  const t = await Tweet.find({}).populate("user", "username");
  console.log(t);
};
findTweets();
