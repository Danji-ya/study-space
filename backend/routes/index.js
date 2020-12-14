var express = require('express');
var router = express.Router();
var request = require('request');
const requestFoodApi = require('./loadFoodApi');
const Food = require('../models/food');

//한국 시간 가져오기
var moment = require('moment');
require('moment-timezone');
//moment.tz.setDefault("Asia/Seoul");


//----처음 시작 시 api에서 데이터 가져온 후 DB에 저장하는 미들웨어-------
//router.get('/',requestFoodApi);
//--------------------------------------------------------------




function deleteNumberDot(x) {
    return x.replace(/[\^(0-9)\.]/gi, "");
}


/* GET Main page. */
router.get('/', function(req, res, next) {


  let bestMenu, randomMenu, seasonMenus;

  //베스트 메뉴 선택 및 랜덤 음식 선택
  Food.find({ratingAvg: { $gt: 0}}).sort( {ratingAvg: -1} ).limit(1)
      .then( result => {

          result[0].foodNm= deleteNumberDot(result[0].foodNm)
          result[0].ratingAvg = result[0].ratingAvg.toFixed(1)
          bestMenu = result[0];

        return Food.countDocuments();
      })
      .then( count =>{

        //랜덤 음식 선택
        let random = Math.floor(Math.random() * (count-1))
        return Food.findOne().skip(random);
      })
      .then( result => {

          result.foodNm= deleteNumberDot(result.foodNm);
          randomMenu = result;

        //현재 시간 이용하여 계절음식 리스트 얻어오기.
        var date = moment().format('MM');

        if (date >= 11 || (1 <= date && date<= 2)) {
          return Food.find({seasonMenu: "w"})

        } else if (6 <= date && date<= 8) {
          return Food.find({seasonMenu: "s"})
        } else {
          return "no seasonMenu";
        }
      })
      .then( result => {
        if(result === "no seasonMenu"){
            seasonMenus="Nothing";
            res.json({ bestMenu: bestMenu, randomMenu: randomMenu, seasonMenu: seasonMenus });
        } else {

          let random = Math.floor(Math.random() * (result.length-1));

          result[random].foodNm= deleteNumberDot(result[random].foodNm);
          seasonMenus= result[random];
          res.json({ bestMenu: bestMenu, randomMenu: randomMenu, seasonMenu: seasonMenus });

        }
      })
      .catch( err => {
        res.json(err);
      })
});



module.exports = router;
