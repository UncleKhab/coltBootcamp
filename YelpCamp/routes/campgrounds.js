const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const ExpressError = require("../utilities/ExpressError");
const Campground = require("../models/campground");
const { campgroundSchema } = require("../schemas");

// Validation Function for Campground,
// it uses a JOI schema defined in the schemas.js
// It's used as middleware(it will run before the request execution)
// It will see if all the data(specified in the JOI schema is there)
// It will throw an error if it finds something wrong
// Otherwise it will continue with the rest of the execution.
const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const messageError = error.details.map((el) => el.message).join(",");
    throw new ExpressError(messageError, 400);
  } else {
    next();
  }
};

router.get(
  "/",
  catchAsync(async (req, res, next) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
  })
);
// Serve the new form
router.get("/new", (req, res) => {
  res.render("campgrounds/new");
});
// Post Route for campground
// We use validateCamground which uses a JOI schema to validate our post data
router.post(
  "/",
  validateCampground,
  catchAsync(async (req, res, next) => {
    // if (!req.body.campground)
    //   throw new ExpressError("Invalid Campground Data", 400);
    const campground = new Campground(req.body.campground);
    await campground.save();
    req.flash("success", "Succesfully made a new campground!");
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// detailed view
router.get(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findById(id).populate("reviews");

    if (!campground) {
      req.flash("error", "Cannot find that campground!");
      return res.redirect("/campgrounds");
      // throw new ExpressError("Id doesn't match anything", 400);
    }

    res.render("campgrounds/show", { campground });
  })
);
// get the edit form
router.get(
  "/:id/edit",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if (!campground) {
      req.flash("error", "Cannot find that campground!");
      return res.redirect("/campgrounds");
      // throw new ExpressError("Id doesn't match anything", 400);
    }
    res.render("campgrounds/edit", { campground });
  })
);
// Send The Edit
router.put(
  "/:id",
  validateCampground,
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    });
    req.flash("success", "Successfully updated campground!");
    res.redirect(`/campgrounds/${campground._id}`);
  })
);
// Delete The Campground
router.delete(
  "/:id",
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash("success", "Succesfully deleted campground!");
    res.redirect("/campgrounds");
  })
);

module.exports = router;
