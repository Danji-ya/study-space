const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim : true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    }
});

//사용할 model export
userSchema.plugin(autoIncrement.plugin, {
    model: 'user',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('user', userSchema);