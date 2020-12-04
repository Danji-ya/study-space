import React from "react";

const FoodList = ({ foodNm, foodCost }) => {

    return (
        <li>
            <span> { foodNm }</span>
            <span> { foodCost }원</span>
        </li>
    );
};

export default FoodList;