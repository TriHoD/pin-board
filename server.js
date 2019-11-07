
const Config = require('./config/config');
const database = require('./config/database.config');
const express = require('express');

require('dotenv').config();


let app = express();
let env = process.env.NODE_ENV || 'development';



database(Config[env]);
require('./config/express')(app, Config[env]);
require('./config/routes')(app);
require('./config/passport')();

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log(`Server listen on port ${PORT}...`);
});
