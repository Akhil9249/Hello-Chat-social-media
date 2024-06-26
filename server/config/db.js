const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const  connection  = await mongoose.connect("mongodb://localhost:27017/socialmedia");
    console.log("Database Connected: ");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;