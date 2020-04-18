const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Jon Grant",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Jon Grant",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    message:
      "Here is some text pertaining to the help page. In the future, something more useful will be here.",
    name: "Jon Grant",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "72 degrees",
    location: "Room temperature",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
