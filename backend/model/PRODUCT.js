import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: Array },
    price: { type: Number, required: true },
    size: { type: String },
    color: { type: String },
  },
  { timestamps: true }
);

const product = mongoose.model("product", productSchema);

export default product;
