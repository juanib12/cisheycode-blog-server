const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Articulo = require("./controllers/Articulos.controller");
const cors = require("cors");

require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO);

app.use(require("express").urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: "https://cisheycode.vercel.app",
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/articulos", Articulo.list);
app.post("/articulos", Articulo.create);
app.put("/articulos/:id", Articulo.update);
app.patch("/articulos/:id", Articulo.update);
app.get("/articulo/:id", Articulo.find)

app.get("*", (req, res) => {
  res.status(404).send("Esta pagina no existe");
});

app.listen(3001, () => {
  console.log("arrancando en 3001");
});
