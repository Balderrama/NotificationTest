const loggerService = require("../services/logger");

const getLogs = async (req, res) => {
    try {
        const logs = await loggerService.getLogs(req,res);
        res.status(200).send({status: 200, data:logs, message:"success"});
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
}

module.exports = {
  getLogs
}