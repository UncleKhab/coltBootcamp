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

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Summer", "Fall", "Winter"],
  },
});

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});
const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);
// Product.insertMany([
//   { name: "Godess Melon", price: 4.99, season: "Summer" },
//   { name: "Sugar Baby Waterelon", price: 4.99, season: "Spring" },
//   { name: "Asparagus", price: 2.99, season: "Fall" },
// ]);
const makeFarm = async () => {
  const farm = new Farm({ name: "Full Belly Farms", city: "Guida, CA" });
  const melon = await Product.findOne({ name: "Godess Melon" });
  farm.products.push(melon);
  await farm.save();
  console.log(farm);
};

const addProduct = async () => {
  const farm = await Farm.findOne({ name: "Full Belly Farms" });
  const product = await Product.findOne({ name: "Sugar Baby Waterelon" });
  farm.products.push(product);
  await farm.save();
};

Farm.findOne({ name: "Full Belly Farms" })
  .populate("products")
  .then((data) => console.log(data));
