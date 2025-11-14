const mongoose = require("mongoose");
require("dotenv").config();

const databaseConnection = () => {
  const url = process.env.MONGO_URI;
  mongoose.connect(url);
  const DB = mongoose.connection;

  DB.once("open", () => {
    console.log("Connected to dataBase");
  });
  DB.on("error", () => {
    console.log("error on connection to  database");
  });
};

module.exports = databaseConnection;
