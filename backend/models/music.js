// models/music.js
const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  audio: { type: String, required: true },
  // Otros campos que desees para tu modelo de música
});

module.exports = mongoose.model('Music', musicSchema);
