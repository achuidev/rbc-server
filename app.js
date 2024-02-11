const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const contextRoot = "/v1/api";
const helloRoutes = require("./routes/hello.route");

app.use(bodyParser.json());
app.use(cors());

app.use(`${contextRoot}`, helloRoutes);

let connectionString = "";

if (process.env.DEPLOYED == "docker") {
  connectionString =
    "mongodb+srv://testuser:testpassword@testcluster.vu6ywcn.mongodb.net/testdatabase";
} else {
  connectionString = "mongodb://localhost:27017/TestDatabase";
}
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
