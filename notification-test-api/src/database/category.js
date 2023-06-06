const DB = require("./categories.json");

const getAllCategories = () => {
    try {
        return DB.categories;
    } catch(error) {
        throw { status: 500, message: error?.message };
    }
}


module.exports = {
    getAllCategories,
}