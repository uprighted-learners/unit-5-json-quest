const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const PORT = 3000;

const json = require("./api/answers.json");

app.get("/", (req, res) => {
  res.json(json);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
