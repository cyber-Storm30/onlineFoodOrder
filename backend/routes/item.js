import express from "express";
import ItemModel from "../models/Items.js";

const router = express.Router;

router.post("/uploaditem", async (req, res) => {
  const newItem = new ItemModel(req.body);
  try {
    const saveNewItem = await newItem.save();
    res.status(200).json(saveNewItem);
  } catch (err) {
    res.status(500).json(err);
  }
});
