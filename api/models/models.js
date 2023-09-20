import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
  },
  description: {
    type: String,
    required: false,
  },
  buyPrice: {
    type: Number,
    requied: true,
  },
  estimatedSellPrice: {
    type: Number,
    required: true,
  },
  sellPrice: {
    type: Number,
    required: true,
  },
  profit: {
    type: Number,
  },
  photo: {
    type: String,
    requied: true,
  },
});

export default mongoose.model("Product", ProductSchema);
