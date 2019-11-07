const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;
mongoose.connect(connectionString, { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
console.log('Mongoose error: ', err);
});

require('../models/Product');
require('../models/Category');
require('../models/User').seedAdminUser();
