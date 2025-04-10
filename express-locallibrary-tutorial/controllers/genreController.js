const Genre = require("../models/genre");
const Book = require("../models/book");

exports.genre_list = async function (req, res) {
  try {
    const list_genre = await Genre.find().sort([["name", "ascending"]]);

    res.render("genre_list", {
      title: "Genre List",
      genre_list: list_genre,
    });
  } catch (err) {
    next(err);
  }
};

exports.genre_detail = async function (req, res, next) {
  try {
    const genre = await Genre.findById(req.params.id);
    if (genre == null) {
      var err = new Error("Genre not found");
      err.status = 404;
      return next(err);
    }

    const genre_books = await Book.find({ genre: req.params.id });

    res.render("genre_detail", {
      title: "Genre Detail",
      genre: genre,
      genre_books: genre_books,
    });
  } catch (err) {
    next(err);
  }
};

exports.genre_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

exports.genre_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

exports.genre_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

exports.genre_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

exports.genre_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

exports.genre_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
