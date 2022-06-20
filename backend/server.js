const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

connectionUrl = "mongodb://localhost:27017";

mongoose.connect(connectionUrl, () => {
  console.log("db connected");
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required:true
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  allergies: {
    type: Array,
  },
});

const User = mongoose.model("users", userSchema);

app.post("/addUser", (req, res) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.json({ user: user });
});

app.get("/getUsers", async (req, res) => {
  const users = await User.find();
  res.json({ users: users });
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user == null) {
    res.status(404).send("not found");
  } else {
    res.send(user);
  }
});

app.put("/updateAllergy/:id", async (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    { $push: { allergies: req.body.allergy } },
    async (err, suc) => {
      if (err) {
        res.send("fail");
      } else {
        let user = await User.findOne({ _id: req.params.id });
        res.json({ user: user });
      }
    }
  );
});

app.listen("3000", () => {
  console.log("server started at port 3000");
});
