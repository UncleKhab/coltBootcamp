const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});
// This is a mongoose middleware
// It get's called after findByIdAndDelete is called
// It receives the data that was used by findByIdAndDelete
CampgroundSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.remove({
      _id: {
        $in: doc.reviews,
      },
    });
  }
});

// Added Middleware for findByIdAndUpdate()
CampgroundSchema.post("findOneAndUpdate", function (doc) {
  console.log("You just updated a campground");
});

module.exports = mongoose.model("Campground", CampgroundSchema);
