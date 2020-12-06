import React from "react";
import ReviewList from "./ReviewList";



const FoodDetail = ({ foods, match, history }) => {

    const food = foods[match.params.id]

    return (
        <div id="detail-form">
            <img className="food-detail-img" src={window.location.origin+'/'+food.url} alt=""/>
            <h2>Food Detail</h2>

            <p>{food.foodNm}</p>
            <p>가격: {food.foodCost}</p>
            <p>리뷰 평균점수: {food.ratingAvg}</p>
            <ul className="review-list">Reviews

                {food.reviewList.map((list, index) =>
                    <ReviewList review={list} key={index}/>
                )}
            </ul>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    );
};
export default FoodDetail;




