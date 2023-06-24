const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: [true, 'Please provide unique Id'],
    unique: true,
  },

  quantity: {
    type: Number,
    required: [true, 'Please provide quantity'],
  },

  operation: {
    //example given as "add"
    type: String,
    required: [true, 'Please provide operation name'],
  },
});

module.exports = mongoose.model('product', productSchema);
