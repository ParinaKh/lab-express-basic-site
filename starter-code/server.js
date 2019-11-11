const express = require("express");
const hbs = require("hbs");
const path = require("path");
const server = express();
const port = 8088;

server.use(express.static(path.join(__dirname, "public")));

server.set("views", path.join(__dirname, "views"));

server.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "views/partials"));

server.get("/", (request, response) => {
  response.render("home", {
    title: "Travel Couple"
  });
});

server.get("/destinations", (request, response) => {
  response.render("destinations");
});

server.get("/about", (request, response) => {
  response.render("about");
});

server.listen(port, () =>
  console.log(`server is up to @http://localhost:${port}`)
);
