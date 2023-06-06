const { v4: uuidv4 } = require('uuid');
var fs = require("fs");
var os = require("os");
const FILE_NAME = 'LOG.txt';
const saveLog = (user,suscription,channel, message) => {
    const logObject = { id: uuidv4(), suscription, channel, user: {...user}, date: new Date(), message };
    saveFile(logObject);
    
}

const saveFile = (logObject) => {
    fs.writeFile(FILE_NAME,JSON.stringify(logObject) + os.EOL ,{flag: 'a+'},(err) => { 
        if (err) throw err; 
    });
    return true;
}

const getLogs = async () => {
    try {
        if(!fs.existsSync(FILE_NAME)) return "";
        const buffer = await fs.readFileSync(FILE_NAME, "utf-8");
        return buffer.toString();
  
    } catch (error) {
        throw error;
    }
}

module.exports = {saveLog, saveFile, getLogs}
