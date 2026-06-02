const ekartSchema = require("../model/schema");

//! Add Product
exports.addProduct = async (req, res) => {
  try {
    let payload = await ekartSchema.create(req.body);
    res.status(200).json({
      success: true,
      message: "Product is Added",
      payload,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product is not Added",
      error: error.message,
    });
  }
};

//! Get Data
exports.getAllProducts = async (req, res) => {
  try {
    let payload = await ekartSchema.find({});
    res.status(200).json({
      success: true,
      message: "All Products are displayed",
      payload,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Products are not displayed",
      error: error.message,
    });
  }
};

//! find product by id (get particular data)
exports.getSingleProduct = async (req, res) => {
  try {
    let payload = await ekartSchema.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Single Data is fetched based on id",
      payload,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Single data is not fetched",
      error: error.message,
    });
  }
};

//! Delete the product by Id
exports.deleteOneProduct = async (req, res) => {
  try {
    let payload = await ekartSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product is Deleted",
      payload,
    });
  } catch (error) {
    res.status(500).json({
        success : false,
        message : "Product is not Deleted",
        error : error.message
    })
  }
};
