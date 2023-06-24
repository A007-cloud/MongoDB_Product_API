const Product = require('../models/products');

const storePorduct = async (req, res) => {
  try {
    const saveProduct = await Product.save();
    res.status(201).json({
      success: true,
      data: saveProduct,
      message: 'Product saved successfully',
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = storePorduct;
