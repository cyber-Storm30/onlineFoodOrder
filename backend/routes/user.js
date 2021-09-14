import express from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Edit user details
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(15);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json("Unable to update user");
    }
  } else {
    res.status(401).json("You can only upadate your profile !!!");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId == req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);
      try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json("user deleted succesfully");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("You can only delete your own account");
  }
});
//get user details

router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json("User does not exist");
  }
});

export default router;
