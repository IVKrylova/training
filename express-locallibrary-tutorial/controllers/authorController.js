const Author = require("../models/author");
const Book = require("../models/book");

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

    if (author === null) {
      const err = new Error("Author not found");
      err.status = 404;
      return next(err);
    }

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
  res.send("NOT IMPLEMENTED: Author create GET");
};

exports.author_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create POST");
};

exports.author_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

exports.author_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

exports.author_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update GET");
};

exports.author_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update POST");
};
