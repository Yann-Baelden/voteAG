require("dotenv").config();
const express = require("express");
const router = require("./API/router");

const app = express();
app.use(router);

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
