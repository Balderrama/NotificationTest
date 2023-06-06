const logger = require("../logger")
module.exports = class Email {
    constructor() {
    }
    sendNotification(user, suscription, channel, sms) {
        logger.saveLog(user, suscription, channel, sms);
     }
}
