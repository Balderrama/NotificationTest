const messageService = require("../services/messageService");

const sendNewMessage = (req, res) => {
    const { body } = req;
    const { category, message } = body;
    try {
       if(message === "") throw new Error("The message can't be empty");
        messageService.sendMessage(category, message);
        res.status(200).send({status: 200, data:"", message:"success"});
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
}

module.exports = {
    sendNewMessage
}