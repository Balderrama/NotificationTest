const logger = require("../logger")
module.exports = class Sms {
    constructor() {
    }
    sendNotification(user, suscription, channel, sms) {
       logger.saveLog(user, suscription, channel, sms);
    }
}


