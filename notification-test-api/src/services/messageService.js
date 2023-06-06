const user = require("../database/user");
const notificationFactory = require("../services/notificationFactory")

const sendMessage = (subscription, message) =>{
    try {
        const users = user.getUsersBySuscription(subscription);
        let notifications = [];
        //group by type of notification
        users.forEach(user => {
            notifications.push(user.channels.join().split(","));
        });

        //get all the possibles channels (notifications)
        const channels = new Set(notifications.flat());

        //Send notifications
        channels.forEach(channel =>{
            const notification = notificationFactory.notificationFactory(channel);//verify
            users.forEach(user =>{
                if(user.channels.includes(channel)) {
                    notification.sendNotification(user, subscription, channel, message);
                }
            });
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendMessage
}