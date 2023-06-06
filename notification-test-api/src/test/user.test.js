const user = require('../database/user');

test('array should be returned instead of empty afer passing the category',() =>{
    expect(user.getUsersBySuscription("Sport")).not.toBe([])

})

