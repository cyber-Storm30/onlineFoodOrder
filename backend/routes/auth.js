import express from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(15);
  const newPass = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: newPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(` Registration failed with error ${err}`);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    !user && res.status(400).json("Invalid credentials !!!");

    const validation = await bcrypt.compare(req.body.password, user.password);
    !validation && res.status(404).json("Passwords does not match !!!");

    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json(` Login failed with error ${err}`);
  }
});

export default router;
