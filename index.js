const dotenv = require("dotenv")
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors =  require("cors")
dotenv.config()
const app = express();

app.use(cors({}))
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));

const userApi = require("./src/routers/user");

userApi(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
