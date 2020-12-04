var express = require('express');
var router = express.Router();

const Food = require('../models/food');


//중복없이 노선 리스트
router.get('/getRouteNmList', function(req, res, next) {

    Food.find().distinct('routeNm')
        .then((food)=>{
            res.json(food);
        })
        .catch((err)=>{
            res.json(err);
        });
});

//휴게소 리스트
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


//해당 휴게소의 음식 리스트
router.get('/getFoodList/:routeNm/:restNm', function(req, res, next) {
    const {routeNm, restNm} = req.params;

    Food.find({ routeNm: routeNm, stdRestNm: restNm}).then((food)=>{
        res.json(food);
    }).catch((err)=>{
        res.json(err);
    });
});











//create Review
router.post('/createReview', function(req, res, next) {

    /*example*/
    var rating1=3;
    var review1="주메뉴로 먹기엔 살짝 아쉬운 감이 없지않아 있네요";
    var newRatingAvg=0;


    function makeReview (exRest,exFood) {
        return Food.findOne({
            stdRestNm: exRest,
            foodNm: exFood
        }).then(food => {
            newRatingAvg= ( food["ratingAvg"] * food["reviewList"].length + rating1 )  /   (food["reviewList"].length + 1)
            newRatingAvg = newRatingAvg.toFixed(1)
            return Food.updateOne({ stdRestNm: exRest, foodNm:exFood },
                {
                    ratingAvg: newRatingAvg,
                    $push: {
                        reviewList: {
                            "rating": rating1,
                            "text": review1
                        }
                    }})
        })
    }


    makeReview("서울만남(부산)휴게소","생선까스").then( result => {
        res.render('testMain.html' );
    }).catch(err => {
        res.send(err);
    });


});









module.exports = router;