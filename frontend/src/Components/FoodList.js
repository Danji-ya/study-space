import React from "react";
import { Link } from "react-router-dom"

const FoodList = ( {foods, match} ) => {

    if (foods ===0){
        return (
            <div id="Not-found"></div>
        )
    }

    return (
        <ul>
            {foods.map( (list, index) =>
                <li key={index}>
                    <span>{list.foodNm}</span>
                    <span>{list.foodCost} 원</span>
                    <Link to={{
                        pathname: `${match.url}/${index}`,
                        state : {
                            foods: foods
                        }
                    }}>{list.foodNm}</Link>
                </li>
            )}
        </ul>
    );
};
export default FoodList;

