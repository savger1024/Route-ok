"use strict";

const express = require("express");
const app = express();
const ejs = require("ejs");
const res = require("express/lib/response");

//middlewares
app.use(express.json());
app.use();
app.set("view engine", "ejs");

// route-ok
app.use("/", require("./routes/mainRoute"));
app.use("/feltolt", require("./routes/uploadRoute"));
app.get("/feltoltes", () => {
  res.render("index");
});

app.listen(5000, () => {
  console.log(`A szerver fut az http://localhost:5000`);
});
//listen vagy route van előbb, az mindegy

//információ lekerdezes, juttatas, frissites (put, catch), törlés
// http metódus
// fejlécre iformáció, 7-es réteg,
