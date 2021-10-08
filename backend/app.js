const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("puerto", process.env.PORT || 4200);
app.listen(app.get("puerto"), () => {
  console.log("Example app listening on port " + app.get("puerto"));
});
