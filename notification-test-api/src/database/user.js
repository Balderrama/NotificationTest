const DB = require("./users.json");

const getAllUsers = () => {
    try {
        return DB.users;
    } catch(error) {
        throw { status: 500, message: error?.message };
    }
}

const getUsersBySuscription = (subscription) => {
    try {
        return getAllUsers().filter(user => {
            return  user.subscribed.includes(subscription.toLowerCase()) 
        });
    } catch(error) {
        throw { status: 500, message: error?.message };
    }
}

module.exports = {
    getAllUsers,
    getUsersBySuscription
}