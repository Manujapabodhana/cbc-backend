import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

// Load connection string from .env
const connectionString = process.env.MONGO_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("error connecting to mongodb");
  });

const studentSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    city: String
  }
);

app.get("/", (req, res) => {
  console.log(req.body);
  console.log("Get request received");

  let prefix = "Mr";
  if (req.body.gender === "female") {
    prefix = "Ms";
  }

  res.json({
    message: "hello " + prefix + " " + req.body.name,
  });
});

app.post("/", (req, res) => {
    console.log(req.body);
    
});

app.listen(5000, () => {
  console.log("server is started");
});
