import React from "react";
import { Fragment } from "react";


const FoodDetail = ({ foods, match, history }) => {

    const food = foods[match.params.id]

    return (
        <Fragment>
            <h2>Food Detail</h2>
            <p>이름</p>
            <p>{food.foodNm}</p>
            <p>가격</p>
            <p>{food.foodCost}</p>
            <button onClick={() => history.goBack()}>Back</button>

        </Fragment>
    );
};
export default FoodDetail;




