import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authUrl from "./routes/auth.js";
import userUrl from "./routes/user.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.MONGO_URL,
  {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    try {
      console.log("Database is connected");
    } catch (err) {
      console.log(err);
    }
  }
);

app.use("/api/auth/", authUrl);
app.use("/api/users/", userUrl);

app.listen("5000", () => {
  console.log("Server is connected");
});
