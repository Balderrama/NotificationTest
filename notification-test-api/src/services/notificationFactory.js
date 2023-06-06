const Sms = require("./notifications/sms");
const Email = require("./notifications/email");
const PushNotification = require("./notifications/pushNotification");

const notificationFactory = type => {
    switch(type.toUpperCase()) {
        case "SMS":
            return new Sms();
        case "EMAIL":
            return new Email();
        case "PUSHNOTIFICATIONS":
            return new PushNotification();
        default:
            throw new Error("unsupported notification type provided");
    }
}

module.exports = { notificationFactory }