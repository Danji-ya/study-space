const mongoose = require('mongoose');
const myKey = require('./dbUrl');
const autoIncrement = require("mongoose-auto-increment");

module.exports = () => {

    mongoose.connect(myKey.privateDbKey, {
        //dbName: " test",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('Successfully connected to mongodb!'))
        .catch(e => console.error(e))

    autoIncrement.initialize(mongoose.connection);
};