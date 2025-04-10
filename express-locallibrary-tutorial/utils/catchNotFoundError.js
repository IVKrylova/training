const catchNotFoundError = (object, next) => {
  if (object === null) {
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }
};

module.exports = catchNotFoundError;
