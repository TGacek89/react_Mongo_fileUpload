import express from "express";
import Product from "../models/models.js";
const app = express();

app.get("/products", async (req, res) => {
  const product = await Product.find({});
  try {
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/add_product", async (req, res) => {
  const product = new Product(req.body);

  try {
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );
    if (!updatedProduct) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json({ message: "Product updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/products/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json({ message: "Product deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default app;
