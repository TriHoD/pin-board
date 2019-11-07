const path = require('path');

module.exports = {
    development: {
        connectionString: 'mongodb://localhost/pinBoard',
        rootPath: path.normalize(path.join(__dirname, '../'))
    },
    production:{
    }
};