const Author = require("../models/author");
const Book = require("../models/book");
const { body, validationResult } = require("express-validator");
const catchNotFoundError = require("../utils/catchNotFoundError");

exports.author_list = async function (req, res, next) {
  try {
    const list_authors = await Author.find().sort([
      ["family_name", "ascending"],
    ]);

    res.render("author_list", {
      title: "Author List",
      author_list: list_authors,
    });
  } catch (err) {
    next(err);
  }
};

exports.author_detail = async function (req, res, next) {
  try {
    const [author, allBooksByAuthor] = await Promise.all([
      Author.findById(req.params.id),
      Book.find({ author: req.params.id }, "title summary"),
    ]);
    catchNotFoundError(author, next);

    res.render("author_detail", {
      title: "Author Detail",
      author: author,
      author_books: allBooksByAuthor,
    });
  } catch (err) {
    next(err);
  }
};

exports.author_create_get = function (req, res) {
  res.render("author_form", { title: "Create Author" });
};

exports.author_create_post = [
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters."),
  body("family_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
    .withMessage("Family name has non-alphanumeric characters."),
  body("date_of_birth", "Invalid date of birth")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),
  body("date_of_death", "Invalid date of death")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),

  async function (req, res, next) {
    try {
      const errors = validationResult(req);

      const author = new Author({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        date_of_birth: req.body.date_of_birth,
        date_of_death: req.body.date_of_death,
      });

      if (!errors.isEmpty()) {
        res.render("author_form", {
          title: "Create Author",
          author: author,
          errors: errors.array(),
        });
        return;
      } else {
        await author.save();
        res.redirect(author.url);
      }
    } catch (err) {
      next(err);
    }
  },
];

exports.author_delete_get = async function (req, res, next) {
  try {
    const author = await Author.findById(req.params.id);
    if (author === null) {
      res.redirect("/catalog/authors");
    }
    const authors_books = Book.find({ author: req.params.id });
    res.render("author_delete", {
      title: "Delete Author",
      author: author,
      author_books: authors_books,
    });
  } catch (err) {
    next(err);
  }
};

exports.author_delete_post = async function (req, res, next) {
  try {
    const author = await Author.findById(req.body.authorid);
    const authors_books = await Book.find({ author: req.body.authorid });

    if (authors_books.length > 0) {
      res.render("author_delete", {
        title: "Delete Author",
        author: author,
        author_books: authors_books,
      });
      return;
    } else {
      await Author.findOneAndDelete({ _id: req.body.authorid });
      res.redirect("/catalog/authors");
    }
  } catch (err) {
    next(err);
  }
};

exports.author_update_get = async function (req, res, next) {
  try {
    const author = await Author.findById(req.params.id);
    catchNotFoundError(author, next);

    res.render("author_form", {
      title: "Update Author",
      author: author,
    });
  } catch (err) {
    next(err);
  }
};

exports.author_update_post = [
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters."),
  body("family_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
    .withMessage("Family name has non-alphanumeric characters."),
  body("date_of_birth", "Invalid date of birth")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),
  body("date_of_death", "Invalid date of death")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),

  async function (req, res, next) {
    try {
      const errors = validationResult(req);
      const author = new Author({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        date_of_birth: req.body.date_of_birth,
        date_of_death: req.body.date_of_death,
        _id: req.params.id,
      });

      if (!errors.isEmpty()) {
        res.render("author_form", {
          title: "Update Author",
          author: author,
          errors: errors.array(),
        });
        return;
      } else {
        await Author.findByIdAndUpdate(req.params.id, author);
        res.redirect(author.url);
      }
    } catch (err) {
      next(err);
    }
  },
];
