import React from 'react'
import { Fragment } from "react";


const ReviewStar = ({number}) => {

    const starList =[];
    for (let i = 0; i < Math.round(number) ; i++) {
        starList.push(<img className="review-Rating" src={window.location.origin+"/images/star.svg"} key={i} alt="profile"/> );
    }

    return <Fragment> {starList} </Fragment>
}

export default ReviewStar;