import React, {Fragment} from "react";
import { Link } from "react-router-dom"

const FoodList = ( {foods, match } ) => {

    if (foods === 0){
        return (
            <div id="Not-found"></div>
        )
    }
    function changePosition() {

        window.scrollTo(0, 600)
    }

    return (
        <Fragment>
        <h2> {`${foods[0].stdRestNm} 메뉴`} </h2>
        <ul>
            {foods.map( (list, index) =>
                <li key={index}>
                    <Link onClick={changePosition} className="restMenu-link" to={{
                        pathname: `${match.url}/${index}`,
                        state : {
                            foods: foods
                        }
                    }}><img className="restMenu-img" src={list.url} alt="profile"/>
                        <h4 className="restMenu-text">{list.foodNm}</h4>
                        <p className="restMenu-text">{list.foodCost}원</p></Link>
                </li>
            )}
        </ul>
        </Fragment>
    );
};
export default FoodList;

