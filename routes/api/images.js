const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Image model
const Image = require("../../models/Image");

router.get("/test", (req, res) => res.json({ msg: "Image Works" }));
// @route   GET api/images
// @desc    Get images
// @access  Public
router.get("/", (req, res) => {
  Image.find()

    .then(images => res.json(images))
    .catch(err => res.status(404).json({ noimagesfound: "No images found" }));
});

router.post(
  "/images",

  (req, res) => {
    const newImage = new Image({
      type: req.body.type,
      src: req.body.src
    });

    newImage.save().then(image => res.json(image));
  }
);

module.exports = router;
