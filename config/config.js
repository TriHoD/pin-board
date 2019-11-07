const path = require('path');

module.exports = {
    development: {
        // connectionString: 'mongodb://localhost/pinBoard',
        connectionString: process.env.MONGODB_URI,
        // connectionString: 'mongodb://pin_board_13:pin_board_13@ds241258.mlab.com:41258/heroku_ppggmwh8',
        rootPath: path.normalize(path.join(__dirname, '../'))
    },
    production:{
    }
};
