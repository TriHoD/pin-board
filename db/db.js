// const mongoose = require('mongoose');

// const connectionString = 'mongodb://localhost:27017/ShopStop';

// mongoose.connect(connectionString, { useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });


// mongoose.connection.on('connected', () => {
// console.log(`Mongoose connected to ${connectionString}`);
// });

// mongoose.connection.on('disconnected', () => {
// console.log('Mongoose disconnected');
// });

// mongoose.connection.on('error', (err) => {
// console.log('Mongoose error: ', err);
// });

// require('../models/Product');
// require('../models/Category');
// require('../models/User').seedAdminUser();

// module.exports = (config) => {
//     mongoose.connect(config.connectionString);

//     let database = mongoose.connection;

//     database.once('open', (err) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log('Connected!');
//     });

//     database.on('error', (err) => {
//         console.log(err);
//     });

//     require('../models/Product');
//     require('../models/Category');
//     require('../models/User').seedAdminUser();
// };