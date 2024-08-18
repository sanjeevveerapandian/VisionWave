const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number
});

module.exports = mongoose.model('Resource', ResourceSchema);
