import React from "react";
import ReviewList from "./ReviewList";



const FoodDetail = ({ foods, match, history }) => {

    const food = foods[match.params.id]

    return (
        <div id="detail-form">
            <img className="food-detail-img" src={window.location.origin+'/'+food.url} alt=""/>
            <h2>상세 정보</h2>

            <p>{food.foodNm}</p>
            <p>가격: {food.foodCost}</p>

            <button onClick={() => history.goBack()}>뒤로 가기</button>
            <div className="review-list">
                <h2>리뷰 <span>{food.reviewList.length}개</span></h2>

                <ul>
                    {food.reviewList.map((list, index) =>
                        <ReviewList review={list} key={index}/>
                    )}
                </ul>

            </div>
        </div>
    );
};
export default FoodDetail;




