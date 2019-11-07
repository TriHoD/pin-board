const path = require('path');

module.exports = {
    development: {
        // connectionString: 'mongodb://localhost/pinBoard',
        connectionString: process.env.MONGODB_URI,
        rootPath: path.normalize(path.join(__dirname, '../'))
    },
    production:{
    }
};