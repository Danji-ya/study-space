var express = require('express');
var router = express.Router();

const Food = require('../models/food');


//find distinct routeNm list
router.get('/getRouteNmList', function(req, res, next) {

    Food.find().distinct('routeNm')
        .then((food)=>{
            res.json(food);
        })
        .catch((err)=>{
            res.json(err);
        });
});

//find rest list
router.get('/getStdRestNmList/:routeNm', function(req, res, next) {
    const {routeNm} = req.params;

    Food.find({routeNm: routeNm})
        .then((food)=>{
            res.json(food);
        })
        .catch((err)=>{
            res.json(err);
        });
});


//find food list
router.get('/getFoodList/:routeNm/:restNm', function(req, res, next) {
    const {routeNm, restNm} = req.params;

    Food.find({ routeNm: routeNm, stdRestNm: restNm}).then((food)=>{
        res.json(food);
    }).catch((err)=>{
        res.json(err);
    });
});




//create Review
router.post('/createReview/:routeNm/:restNm', function(req, res, next) {
    const {routeNm, restNm} = req.params;
    const {foodNm, reviewText, rating, email} = req.body.foodReview;
    let newRatingAvg =0;

    function makeReview (routeName, restName, foodName) {
        return Food.findOne({
            routeNm: routeName,
            stdRestNm: restName,
            foodNm: foodName
        }).then(food => {

            newRatingAvg=  ((food["ratingAvg"] * food["reviewList"].length + parseInt(rating))/(food["reviewList"].length + 1));
            newRatingAvg = newRatingAvg.toFixed(1)
            return Food.updateOne({ routeNm: routeName, stdRestNm: restName, foodNm: foodName },
                {
                    ratingAvg: newRatingAvg,
                    $push: {
                        reviewList: {
                            "email": email,
                            "text": reviewText,
                            "rating": rating
                        }
                    }})
        })
    }

    makeReview(routeNm, restNm, foodNm).then( result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});









module.exports = router;