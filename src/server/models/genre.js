const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  }
});

const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre) {
  // this is the joi schema
  const schema = {
    name: Joi.string().min(3).max(50).required()
  };

  return Joi.validate(genre, schema);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;
