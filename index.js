const express = require("express");
const { connection } = require("./db");
const { authRouter } = require("./routes/auth.routes");
const cors = require("cors");
const { formRouter } = require("./routes/form.routes");
const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config()
app.use("/auth", authRouter);
app.use(express.static("public"));
app.use("/form", formRouter);



app.get("/", async (req, res) => {
  res.status(200).send({ message: "Get Request Success" });
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connection to MongoDB");
    console.log(`Server is Running on port ${process.env.port}`);
  } catch (error) {
    console.log("Disconnecting from MongoDB");
    console.log("Error: " + error);
  }
});
