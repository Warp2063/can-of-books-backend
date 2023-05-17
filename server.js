"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");
const bp = require("body-parser");
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

app.get("/", function (request, response) {
  response.json("Book root route");
});

app.get("/books", async function (request, response) {
  const books = await Book.find(request.query);
  response.json(books);
});

app.get("/test", (request, response) => {
  response.send("test request received");
});

app.post("/books", async function (request, response) {
  console.log(request.body);
  const newBook = await Book.create(request.body);
  response.json(newBook);
});

app.delete("/books/:id", async function (request, response) {
  const deletedBook = await Book.findByIdAndDelete(request.params.id);
  response.json(deletedBook);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
