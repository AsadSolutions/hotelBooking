// index.js
const express = require("express");
const router = require("./src/router");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");

app.use(express.json());
app.use("/", router);
// Serving app on defined PORT

app.use(express.static(path.join(__dirname + "/public")));

app.listen(port, () => {
  console.log(`Express is running on port 3000`);
});
