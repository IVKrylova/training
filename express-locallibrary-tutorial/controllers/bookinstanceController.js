const BookInstance = require("../models/bookinstance");
const Book = require("../models/book");
const { body, validationResult } = require("express-validator");
const catchNotFoundError = require("../utils/catchNotFoundError");
const Author = require("../models/author");

exports.bookinstance_list = async function (req, res, next) {
  try {
    const list_bookinstances = await BookInstance.find().populate("book");
    res.render("bookinstance_list", {
      title: "Book Instance List",
      bookinstance_list: list_bookinstances,
    });
  } catch (err) {
    next(err);
  }
};

exports.bookinstance_detail = async function (req, res, next) {
  try {
    const bookInstance = await BookInstance.findById(req.params.id).populate(
      "book"
    );
    catchNotFoundError(bookInstance, next);

    res.render("bookinstance_detail", {
      title: "Book:",
      bookinstance: bookInstance,
    });
  } catch (err) {
    next(err);
  }
};

exports.bookinstance_create_get = async function (req, res, next) {
  try {
    const books = await Book.find({}, "title");
    res.render("bookinstance_form", {
      title: "Create BookInstance",
      book_list: books,
    });
  } catch (err) {
    next(err);
  }
};

exports.bookinstance_create_post = [
  body("book", "Book must be specified").isLength({ min: 1 }).trim().escape(),
  body("imprint", "Imprint must be specified")
    .isLength({ min: 1 })
    .trim()
    .escape(),
  body("status").trim().escape(),
  body("due_back", "Invalid date")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  async function (req, res, next) {
    try {
      const errors = validationResult(req);
      const bookinstance = new BookInstance({
        book: req.body.book,
        imprint: req.body.imprint,
        status: req.body.status,
        due_back: req.body.due_back,
      });

      if (!errors.isEmpty()) {
        const books = await Book.find({}, "title");
        res.render("bookinstance_form", {
          title: "Create BookInstance",
          book_list: books,
          selected_book: bookinstance.book._id,
          errors: errors.array(),
          bookinstance: bookinstance,
        });
        return;
      } else {
        bookinstance.save();
        res.redirect(bookinstance.url);
      }
    } catch (err) {
      next(err);
    }
  },
];

exports.bookinstance_delete_get = async function (req, res, next) {
  try {
    const bookinstance = await BookInstance.findById(req.params.id);
    if (bookinstance === null) {
      res.redirect("/catalog/bookinstances");
    }
    const book = await Book.findById(bookinstance.book);
    const author = await Author.findById(book.author);
    res.render("bookinstance_delete", {
      title: "Delete BookInstance",
      bookinstance: bookinstance,
      book: book,
      author: author,
    });
  } catch (err) {
    next(err);
  }
};

exports.bookinstance_delete_post = async function (req, res, next) {
  try {
    await BookInstance.findOneAndDelete({ _id: req.body.bookinstanceid });
    res.redirect("/catalog/bookinstances");
  } catch (err) {
    next(err);
  }
};

exports.bookinstance_update_get = async function (req, res, next) {
  try {
    const bookinstance = await BookInstance.findById(req.params.id);
    catchNotFoundError(bookinstance, next);

    const books = await Book.find();

    res.render("bookinstance_form", {
      title: "Update BookInstance",
      book_list: books,
      bookinstance: bookinstance,
    });
  } catch (err) {
    next(err);
  }
};

exports.bookinstance_update_post = [
  body("book", "Book must be specified").isLength({ min: 1 }).trim().escape(),
  body("imprint", "Imprint must be specified")
    .isLength({ min: 1 })
    .trim()
    .escape(),
  body("status").trim().escape(),
  body("due_back", "Invalid date")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  async function (req, res, next) {
    try {
      const errors = validationResult(req);
      const bookinstance = new BookInstance({
        book: req.body.book,
        imprint: req.body.imprint,
        status: req.body.status,
        due_back: req.body.due_back,
        _id: req.params.id,
      });

      if (!errors.isEmpty()) {
        const books = await Book.find({}, "title");
        res.render("bookinstance_form", {
          title: "Update BookInstance",
          book_list: books,
          selected_book: bookinstance.book._id,
          errors: errors.array(),
          bookinstance: bookinstance,
        });
        return;
      } else {
        await BookInstance.findByIdAndUpdate(req.params.id, bookinstance);
        res.redirect(bookinstance.url);
      }
    } catch (err) {
      next(err);
    }
  },
];
