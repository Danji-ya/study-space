import React, {Fragment, useEffect, useState} from "react";
import ReviewList from "./ReviewList";
import requests from "../lib/requests";
import swal from "sweetalert";



const FoodDetail = ({match, history, user }) => {
    const [food, setFood] = useState();
    const {stdRestNm, foodNm} = match.params;


    async function callDelete(text) {
        const comment = {
            stdRestNm: stdRestNm,
            foodNm: foodNm,
            email: user.email,
            comment: text
        }
        let res = await requests.delReview(comment);
        if (res.message) {
            swal({
                title: "삭제 완료",
                icon: "success",
                button: "확인",
            })
            requests.getFoodDetail(stdRestNm, foodNm).then(result => {
                setFood(result);
            });
        }
    }


    //두번째 인자로 인해 didmount효과
    useEffect(() => {
        requests.getFoodDetail(stdRestNm, foodNm).then(result => {
            setFood(result);
        });
    },[stdRestNm,foodNm])

    return (
        <div id="detail-form">
            {food ? (
                <Fragment>
                    <img className="food-detail-img" src={window.location.origin + '/' + food.url} alt=""/>
                    <h2>상세 정보</h2>

                    <p>{food.foodNm}</p>
                    <p>가격: {food.foodCost}</p>

                    <button onClick={() => history.goBack()}>뒤로 가기</button>
                    <div className="review-list">
                    <h2>리뷰 <span>{food.reviewList.length}개 ({food.ratingAvg})</span></h2>

                    <ul>
                    {food.reviewList.map((list, index) =>
                        <ReviewList  delComment={callDelete} user={user} review={list} key={index}/>
                    )}
                    </ul>

                    </div>
                </Fragment>
                ): ""}
        </div>
    );
};
export default FoodDetail;





