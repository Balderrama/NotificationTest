
const express = require("express"); 
const cors = require('cors');
const bodyParser = require("body-parser");
const v1Router = require("./v1/routes/notificationRoutes");

const app = express(); 
const PORT = process.env.PORT || 8000; 

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use("/api/v1", v1Router);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});