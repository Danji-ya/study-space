const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');


const foodSchema = new mongoose.Schema({
    routeNm: {
        type: String,
        trim : true,
        required: true,
    },
    stdRestNm: {
        type: String,
        trim : true,
        required: true,
    },
    foodNm: {
        type: String,
        trim : true,
        required: true,
    },
    foodCost: {
        type: Number,
        trim : true,
        required: true,
    },
    url: {
        type: String,
        trim : true,
        required: true,
    },
    seasonMenu: {
        type: String,
        trim : true,
        required: true,
    },
    reviewList: [{ email: String, rating: Number, text: String}],
    ratingAvg: {
        type: Number,
        trim : true,
    }
});

//사용할 model export
foodSchema.plugin(autoIncrement.plugin, {
    model: 'food',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('food', foodSchema);


