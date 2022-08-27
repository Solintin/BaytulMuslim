const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const routes = require("./routes/bm_routes");
const cors = require("cors");
connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/lecture", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
