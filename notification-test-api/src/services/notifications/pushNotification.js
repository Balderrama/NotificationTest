const logger = require("../logger")
module.exports = class PushNotification {
    constructor() {
    }
    sendNotification(user, suscription, channel, sms) {
        logger.saveLog(user, suscription, channel, sms);
     }
}

