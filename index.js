const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));

const userApi = require("./src/routers/user");

userApi(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
