const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
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

app.get("/help/*", (req, res) => {
  res.render("error404", {
    title: "404",
    message: "Help article not found",
    name: "Jon Grant",
  });
});

app.get("*", (req, res) => {
  res.render("error404", {
    title: "404",
    message: "Page not found",
    name: "Jon Grant",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
