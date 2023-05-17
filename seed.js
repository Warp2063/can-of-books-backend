const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

async function seed() {
  await Book.create({
    name: "Book1",
    description: "Book1Desc",
    status: "status",
  });
  await Book.create({
    name: "Book2",
    description: "Book2Desc",
    status: "status",
  });
  await Book.create({
    name: "Book3",
    description: "Book3Desc",
    status: "status",
  });

  console.log("Books created");

  mongoose.disconnect();
}

seed();
