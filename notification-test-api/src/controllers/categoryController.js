const categoryService = require("../services/categoryService");

const categoryController = (req, res) => {
    
    try {
        const categories = categoryService.getAllCategories()
        res.status(200).send({status: 200, data:categories, message:"success"});
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
}

module.exports = {
    categoryController,
}