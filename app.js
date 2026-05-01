const express = require("express");
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Route to render the courses page
app.get("/courses", (req, res) => {
  const courses = ["Node.js", "MongoDB", "React", "Express"];
  res.render("courses", { courses: courses });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/courses");
});
