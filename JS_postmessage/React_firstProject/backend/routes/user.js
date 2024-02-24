var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password()
var express = require('express');
var router = express.Router();

const User = require('../models/user');


//회원가입
router.post("/join", function (req, res) {

    const {email, password} = req.body.user;

    User.findOne({email: email})
        .then( emailCheck => {

            if(emailCheck){
                res.json({message: "Existing email"})
            }else {
                hasher({password: password}, (err, pass, salt, hash) => {
                    //salt는 나중에 복원시킬 때
                    const user = new User({
                        email: email,
                        password: hash,
                        salt: salt,
                    });

                    //유저 저장
                    user.save((err) => {
                        res.json({ message: "Success" });
                    });
                });
            }
        })
});


//로그인
router.post('/signIn', function(req, res, next) {

    const {email, password} = req.body.user;

    User.findOne({ email: email })
        .then( account => {

            if(!account) {
                return res.json({ message: "Fail" });
            }

            //받아온 정보를 이용해서
            hasher({ password: password, salt: account.salt }, (err, pass, salt, hash) => {

                if (hash === account.password) {
                    return res.json( account );
                }
                else{
                    return res.json({ message: "Fail" });
                }
            });
    })
});


module.exports = router;