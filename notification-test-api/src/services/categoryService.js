const category = require("../database/category");

const getAllCategories = () =>{
    try {
        return category.getAllCategories();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllCategories
}