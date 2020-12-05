import React from "react";



const FoodDetail = ({ foods, match, history }) => {

    const food = foods[match.params.id]

    return (
        <div className="food-detail">
            <img className="food-detail-img" src={window.location.origin+'/'+food.url} alt=""/>
            <h2>Food Detail</h2>

            <p>{food.foodNm}</p>
            <p>가격</p>
            <p>{food.foodCost}</p>
            <p>평균 점수</p>
            <p>{food.ratingAvg}</p>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    );
};
export default FoodDetail;




