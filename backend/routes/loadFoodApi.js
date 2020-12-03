var express = require('express');
var router = express.Router();
var request = require('request');

const Food = require('../models/food');


var requestFoodApi = (page)  => {
    return new Promise( function(resolve, reject) {

        var url = 'http://data.ex.co.kr/exopenapi/restinfo/restBestfoodList';
        var queryParams = '?' + encodeURIComponent('ServiceKey') + '=QrEhR8UQBNs8lGAosaLK3EMV55TY6u5n8%2FIcwwiwRYbRNXVfb3NV9tgLQkCp2VhZsQZ3XcjUUkMI2t856Mu%2Fdw%3D%3D';
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('999');
        queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json');
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(page);

        request({
            url: url + queryParams,
            method: 'GET'
        }, function (error, response, body) {
            if(body) {
                resolve(body);
            }
            else{
                reject(Error("No response"));
            }
        });
    });
};

//처음 시작 시 api에서 데이터 가져온 후 DB에 저장.
router.get('/', function(req,res, next){

    //foodList를 담을 공간
    let foodList=[];

    requestFoodApi(1).then((body) => {

        const food = JSON.parse(body);
        food["list"].forEach( function(food) {
            foodList.push(food);
        });

        // page 별로 request 요청
        let foodPageList=[];
        if( food["pageSize"]>=2 ){

            for(var i=2; i<=food["pageSize"]; i++){
                foodPageList.push(requestFoodApi(i));
            }
        }

        return Promise.all(foodPageList);

    }).then((body) => {

        //promise.all이기 때문에 배열로 존재한다.
        body.forEach( function( rq ) {
            const rqList=JSON.parse(rq);
            rqList["list"].forEach( function(food) {
                foodList.push(food);
            });
        });


        //replace white_space
        foodList=foodList.map(obj => ( {...obj, foodNm: obj["foodNm"].replace(/ /g,"")}));

        //String to Number
        foodList=foodList.map(obj => ( {...obj, foodCost: Number(obj["foodCost"])}));


        //임시사진 url, reviewList, ratingAvg 추가
        foodList=foodList.map(obj => {
            if(obj["foodNm"].includes("국밥")){
                return  {...obj, url: "images/foodImg/soup.jpg", reviewList: new Array(), ratingAvg: 0}
            }
            else if(obj["foodNm"].includes("튀김")){
                return  {...obj, url: "images/foodImg/friedFood.jpg", reviewList: new Array(), ratingAvg: 0}
            }
            else if(obj["foodNm"].includes("비빔밥")){
                return  {...obj, url: "images/foodImg/bibimbap.jpg", reviewList: new Array(), ratingAvg: 0}
            }
            else if(obj["foodNm"].includes("김밥")){
                return  {...obj, url: "images/foodImg/kimbab.jpg", reviewList: new Array(), ratingAvg: 0}
            }
            else if(obj["foodNm"].includes("가스") || obj["foodNm"].includes("까스")){
                return  {...obj, url: "images/foodImg/porkCutlet.jpg", reviewList: new Array(), ratingAvg: 0}
            }
            else if(obj["foodNm"].includes("우동")){
                return  {...obj, url: "images/foodImg/Udon.jpg", reviewList: new Array(), ratingAvg: 0}
            }
            else {
                return  {...obj, url: "images/foodImg/hamburger.jpg", reviewList: new Array(), ratingAvg: 0}
            }
        })



        let filtered=[];
        foodList.forEach( function (food){

            filtered.push(['routeNm', 'stdRestNm','foodNm','foodCost','url', 'seasonMenu','reviewList','ratingAvg'].reduce((result, key) => { result[key] = food[key]; return result; }, {}));
        })


        //collection에 추가.
        Food.collection.insert(filtered, function (err, docs) {
            if (err){
                return console.error(err);
            } else {
                console.log("Multiple documents inserted to Collection");
            }
        });


        next();

        //console.log("------------foodList Length=  "+foodList.length+"------------------");
        //foodList에는 배열로 담겨 있어서 foreach를 통해 각 food["foodNm"] 이용
    }).catch(e =>
        alert(e)
    );

})

module.exports = router;
