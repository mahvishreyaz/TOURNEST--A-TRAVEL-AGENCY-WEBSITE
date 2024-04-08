const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/loginsignup")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const LoginSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const collection = new mongoose.model("Collection1", LoginSchema);

module.exports = collection;
