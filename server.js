
const express = require('express');

require('dotenv').config();
require('./db/db')

const app = express();
let env = process.env.NODE_ENV || 'development';

require('./config/express')(app);
require('./config/routes')(app);
require('./config/passport')();

app.listen(process.env.PORT, () => {
    console.log(`Server listen on port ${process.env.PORT}...`)
})

