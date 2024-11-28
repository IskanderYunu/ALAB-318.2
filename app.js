const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views"); // Default views

app.use(express.urlencoded({ extended: true })); // Middleware

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//Routes

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/submit", (req, res) => {
  console.log(req.body); // Log form data to the console
  res.send("Form submitted successfully!");
});

app.get("/greet/:name", (req, res) => {
  res.send(`<h1>Hello, ${req.params.name}!</h1>`);
});

//Part 3
app.use(express.static("public"));

app.get("/download", (req, res) => {
  const filePath = __dirname + "/public/thumbs-up.gif";
  res.download(filePath, "thumbs-up.gif", (err) => {
    if (err) {
      console.error("Error Unable to Download:", err);
      res.status(500).send("Unable to download the file.");
    }
  });
});
