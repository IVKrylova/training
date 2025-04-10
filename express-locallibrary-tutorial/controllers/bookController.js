const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");
const { body, validationResult } = require("express-validator");
const catchNotFoundError = require("../utils/catchNotFoundError");

exports.index = async function (req, res, next) {
  try {
    const [
      numBooks,
      numBookInstances,
      numAvailableBookInstances,
      numAuthors,
      numGenres,
    ] = await Promise.all([
      Book.countDocuments({}),
      BookInstance.countDocuments({}),
      BookInstance.countDocuments({ status: "Available" }),
      Author.countDocuments({}),
      Genre.countDocuments({}),
    ]);

    res.render("index", {
      title: "Local Library Home",
      book_count: numBooks,
      book_instance_count: numBookInstances,
      book_instance_available_count: numAvailableBookInstances,
      author_count: numAuthors,
      genre_count: numGenres,
    });
  } catch (err) {
    next(err);
  }
};

exports.book_list = async function (req, res, next) {
  try {
    const list_books = await Book.find({}, "title author").populate("author");
    res.render("book_list", { title: "Book List", book_list: list_books });
  } catch (err) {
    next(err);
  }
};

exports.book_detail = async function (req, res, next) {
  try {
    const [book, bookInstances] = await Promise.all([
      Book.findById(req.params.id).populate("author").populate("genre").exec(),
      BookInstance.find({ book: req.params.id }).exec(),
    ]);
    catchNotFoundError(book, next);

    res.render("book_detail", {
      title: book.title,
      book: book,
      book_instances: bookInstances,
    });
  } catch (err) {
    next(err);
  }
};

exports.book_create_get = async function (req, res, next) {
  try {
    const [allAuthors, allGenres] = await Promise.all([
      Author.find().sort({ family_name: 1 }),
      Genre.find().sort({ name: 1 }),
    ]);

    res.render("book_form", {
      title: "Create Book",
      authors: allAuthors,
      genres: allGenres,
    });
  } catch (err) {
    next(err);
  }
};

exports.book_create_post = [
  (req, res, next) => {
    if (!Array.isArray(req.body.genre)) {
      req.body.genre =
        typeof req.body.genre === "undefined" ? [] : [req.body.genre];
    }
    next();
  },

  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("author", "Author must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty").trim().isLength({ min: 1 }).escape(),
  body("genre.*").escape(),

  async function (req, res, next) {
    try {
      const errors = validationResult(req);

      const book = new Book({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        isbn: req.body.isbn,
        genre: req.body.genre,
      });

      if (!errors.isEmpty()) {
        const [allAuthors, allGenres] = await Promise.all([
          Author.find().sort({ family_name: 1 }),
          Genre.find().sort({ name: 1 }),
        ]);

        for (const genre of allGenres) {
          if (book.genre.includes(genre._id)) {
            genre.checked = "true";
          }
        }
        res.render("book_form", {
          title: "Create Book",
          authors: allAuthors,
          genres: allGenres,
          book: book,
          errors: errors.array(),
        });
      } else {
        await book.save();
        res.redirect(book.url);
      }
    } catch (err) {
      next(err);
    }
  },
];

exports.book_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

exports.book_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

exports.book_update_get = async function (req, res, next) {
  try {
    const book = await Book.findById(req.params.id)
      .populate("author")
      .populate("genre");
    catchNotFoundError(book, next);

    const authors = await Author.find();
    const genres = await Genre.find();

    for (let all_g_iter = 0; all_g_iter < genres.length; all_g_iter++) {
      for (
        let book_g_iter = 0;
        book_g_iter < book.genre.length;
        book_g_iter++
      ) {
        if (
          genres[all_g_iter]._id.toString() ===
          book.genre[book_g_iter]._id.toString()
        ) {
          genres[all_g_iter].checked = "true";
        }
      }
    }
    res.render("book_form", {
      title: "Update Book",
      authors: authors,
      genres: genres,
      book: book,
    });
  } catch (err) {
    next(err);
  }
};

exports.book_update_post = [
  (req, res, next) => {
    if (!(req.body.genre instanceof Array)) {
      if (typeof req.body.genre === "undefined") req.body.genre = [];
      else req.body.genre = new Array(req.body.genre);
    }
    next();
  },

  body("title", "Title must not be empty.")
    .isLength({ min: 1 })
    .trim()
    .escape(),
  body("author", "Author must not be empty.")
    .isLength({ min: 1 })
    .trim()
    .escape(),
  body("summary", "Summary must not be empty.")
    .isLength({ min: 1 })
    .trim()
    .escape(),
  body("isbn", "ISBN must not be empty").isLength({ min: 1 }).trim().escape(),
  body("genre.*").trim().escape(),

  async function (req, res, next) {
    try {
      const errors = validationResult(req);
      const book = new Book({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        isbn: req.body.isbn,
        genre: typeof req.body.genre === "undefined" ? [] : req.body.genre,
        _id: req.params.id,
      });

      if (!errors.isEmpty()) {
        const authors = await Author.find();
        const genres = await Genre.find();

        for (let i = 0; i < genres.length; i++) {
          if (book.genre.indexOf(genres[i]._id) > -1) {
            genres[i].checked = "true";
          }
        }

        res.render("book_form", {
          title: "Update Book",
          authors: authors,
          genres: genres,
          book: book,
          errors: errors.array(),
        });

        return;
      } else {
        await Book.findByIdAndUpdate(req.params.id, book);
        res.redirect(book.url);
      }
    } catch (err) {
      next(err);
    }
  },
];
