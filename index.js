const express = require("express");
const app = express();
const cors = require("cors");
const data_schema = require("./schema");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();
mongoose
  .connect(process.env.db)
  .then(() => {
    console.log("db is connected");
  })
  .catch(() => {
    console.log("db is not connected");
  });

app.use(express.json());
app.use(cors());
app.get("/read", async (req, res) => {
  const find_data = await data_schema.find({});
  res.json(find_data);
});

app.post("/create", async (req, res) => {
  plaintxt = req.body.password.toString();
  const hashpassword = await bcrypt.hash(plaintxt, 7);
  const data = new data_schema({
    ...req.body,
    password: hashpassword,
  });
  const save_data = await data.save();
  res.json(save_data);
});

app.put("/update/:id", async (req, res) => {
  const update_data = await data_schema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );

  res.json(update_data);
});

app.post("/login", async (req, res) => {
  const usermail = await data_schema.findOne({ name: req.body.name });
  if (!usermail) return res.json("Username not valid");

  const userpassword = await bcrypt.compare(
    req.body.password,
    usermail.password
  );
  if (!userpassword)
    return res.json({
      message: "Not valid",
    });

 
  res.json({ message: "login success" });
  
});

app.delete("/delete/:id", async (req, res) => {
  const delete_data = await data_schema.findByIdAndDelete(req.params.id);
  res.json({
    message: "deleted",
    del_date: delete_data,
  });
});

app.listen(process.env.PORT, () => {
  console.log("server is connected");
});

