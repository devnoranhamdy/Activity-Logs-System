require("dotenv").config();
const express = require("express");
const connectDB = require("./infrastructure/database/mongo");
const startConsumer = require("./infrastructure/kafka/consumer");
const userActivityRoutes = require("./domain/userActivity/routes/logs");
const port = process.env.PORT;
const app = express();
app.use(express.json());

app.use("/logs", userActivityRoutes);

const initApp = async () => {
  connectDB();
  await startConsumer();

  app.listen(port, () => {
    console.log(`Application Running Successfuly at ${port}`);
  });
};

initApp();
