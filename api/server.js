import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Router from "./routes/routes.js";
//
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(Router);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("Connected successfully");
});

const PORT = process.env.PORT || 8880;
app.listen(PORT, () => {
  console.log(`Server working at port ${PORT}`);
});
