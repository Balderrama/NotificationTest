const category = require('../database/category');

test('array with the categories should be returned',() =>{
    expect(category.getAllCategories()).not.toBe([])

})

