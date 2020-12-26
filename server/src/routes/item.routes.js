const express = require("express");
const { findById } = require("../models/Item.model");
const router = express.Router();
const ItemModel = require("../models/Item.model");

// GET all item //
router.get("/", (req, res) => {
  ItemModel.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

// Update item (+++) //
router.post("/:itemId/inc", async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const findItem = await ItemModel.findById(itemId);
    const updateItem = await ItemModel.findByIdAndUpdate(itemId, {
      $set: { quantity: findItem.quantity + 1 },
    });
    const newItems = await ItemModel.find();
    res.status(200).json(newItems);
  } catch (err) {
    res.status(500).json({
      error: "Something went wrong",
      message: err,
    });
  }
});

// Update item (---) //
router.post("/:itemId/dec", async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const findItem = await ItemModel.findById(itemId);
    const updateItem = await ItemModel.findByIdAndUpdate(itemId, {
      $set: { quantity: findItem.quantity - 1 },
    });
    console.log("This is updated: ", updateItem);
    const newItems = await ItemModel.find();
    res.status(200).json(newItems);
  } catch (err) {
    res.status(500).json({
      error: "Something went wrong",
      message: err,
    });
  }
});

module.exports = router;
