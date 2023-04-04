const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./db/connect");
const todoRoutes = require("./routes/router")

app.use(bodyParser.json());
app.use(cors());
dotenv.config({ path: "./config.env" });

app.use("/api", todoRoutes)


const start = async () => {
  try {
    // this way is gonna connect to mongodb before running the server
    await connectDB(process.env.MONGO_URI);

    app.listen(process.env.PORT, () => {
      console.log(
        `server is connected at ${process.env.PORT}`
      );
    });
  } catch (err) {
    console.log(err);
  }
};

start();
