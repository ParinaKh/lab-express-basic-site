const express = require("express");
const router = new express.Router();

const contactModel = require("./../models/contact-us");

router.get("/create-artist", (req, res) => {
  styleModel.find().then(dbRes => {
    res.render("form-artist", { styles: dbRes });
  });
});
