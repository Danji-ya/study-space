const mongoose = require('mongoose');
const myKey = require('./dbUrl');

module.exports = () => {

    const connection = mongoose.connect(myKey.privateDbKey, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('Successfully connected to mongodb!'))
        .catch(e => console.error(e))

};