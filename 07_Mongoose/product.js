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

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: {
      values: ["s", "m", "l"],
      message: "Choose from S M or L",
    },
  },
});

// Instance Methods are used for single products where
// the Keyword "this" representes the current instance of the model
productSchema.methods.greet = function () {
  console.log("Hellooo! HI!! Howdyyy!!!");
  console.log(`-from ${this.name}`);
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};
productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

// Static methods are used for the model itself,
// basically used like the example below, to update all products at once
// it's built on top of the already existing model methods such as
// .find() or .delete() etc.
productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};
const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Shower Gell" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Care");
  console.log(foundProduct);
};
findProduct();
Product.fireSale().then((data) => console.log(data));
// const newProduct = new Product({
//   name: "Towel",
//   price: 15.99,
//   categories: ["Bathroom", "Care", "Facial Care"],
//   qty: {
//     online: 10,
//     inStore: 5,
//   },
//   size: "s",
// });
// newProduct
//   .save()
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log("Errorrrr");
//     console.log(err);
//   });

// Product.findOneAndUpdate(
//   { name: "Face Wash" },
//   { price: -100 },
//   { new: true, runValidators: true }
// )
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log("Errorrrr");
//     console.log(err.errors.price.properties.message);
//   });
