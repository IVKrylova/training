const BookInstance = require("../models/bookinstance");
const Book = require("../models/book");
const { body, validationResult } = require("express-validator");
const catchNotFoundError = require("../utils/catchNotFoundError");

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

exports.bookinstance_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
};

exports.bookinstance_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

exports.bookinstance_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
};

exports.bookinstance_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};
