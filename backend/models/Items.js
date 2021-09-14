import mongoose from "mongoose";

const ItemsSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    itemImage: {
      type: String,
      default: "",
    },
    category: {
      type: String,
    },
  },
  { timestamp: true }
);

export default mongoose.model("Items", ItemsSchema);
