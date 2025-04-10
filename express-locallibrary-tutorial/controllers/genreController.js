const Genre = require("../models/genre");
const Book = require("../models/book");
const { body, validationResult } = require("express-validator");
const catchNotFoundError = require("../utils/catchNotFoundError");

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
    catchNotFoundError(genre, next);

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
  res.render("genre_form", { title: "Create Genre" });
};

exports.genre_create_post = [
  body("name", "Genre name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  async function (req, res, next) {
    try {
      const errors = validationResult(req);
      const genre = new Genre({ name: req.body.name });
      if (!errors.isEmpty()) {
        res.render("genre_form", {
          title: "Create Genre",
          genre: genre,
          errors: errors.array(),
        });
        return;
      } else {
        const genreExists = await Genre.findOne({
          name: req.body.name,
        }).collation({ locale: "en", strength: 2 });
        if (genreExists) {
          res.redirect(genreExists.url);
        } else {
          await genre.save();
          res.redirect(genre.url);
        }
      }
    } catch (err) {
      next(err);
    }
  },
];

exports.genre_delete_get = async function (req, res, next) {
  try {
    const genre = await Genre.findById(req.params.id);
    if (genre === null) {
      res.redirect("/catalog/genres");
    }
    const books = await Book.find({ genre: { $in: [req.params.id] } });
    res.render("genre_delete", {
      title: "Delete Genre",
      genre: genre,
      books: books,
    });
  } catch (err) {
    next(err);
  }
};

exports.genre_delete_post = async function (req, res, next) {
  try {
    const genre = await Genre.findById(req.body.genreid);
    const books = await Book.find({ genre: { $in: [req.body.genreid] } });

    if (books.length > 0) {
      res.render("genre_delete", {
        title: "Delete Genre",
        genre: genre,
        books: books,
      });
      return;
    } else {
      await Genre.findOneAndDelete({ _id: req.body.genreid });
      res.redirect("/catalog/genres");
    }
  } catch (err) {
    next(err);
  }
};

exports.genre_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

exports.genre_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
