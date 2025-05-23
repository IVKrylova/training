const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
  return this.family_name + ", " + this.first_name;
});

AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

AuthorSchema.virtual("lifespan").get(function () {
  return `${
    this.date_of_birth ? moment(this.date_of_birth).format("MMMM Do, YYYY") : ""
  } - ${this.date_of_death ? moment(this.date_of_death).format("MMMM Do, YYYY") : ""}`;
});

AuthorSchema.virtual("date_of_birth_formatted").get(function () {
  return this.date_of_birth
    ? moment(this.date_of_birth).format("YYYY-MM-DD")
    : "";
});

AuthorSchema.virtual("date_of_death_formatted").get(function () {
  return this.date_of_death
    ? moment(this.date_of_death).format("YYYY-MM-DD")
    : "";
});

module.exports = mongoose.model("Author", AuthorSchema);
