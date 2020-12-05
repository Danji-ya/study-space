import React, {useState} from 'react';
import { Fragment } from "react";
import RequestForm from "../Components/RequestForm";
import MakeReview from "../Components/MakeReview";
import "./ReviewCreate.css";



function ReviewCreate({history}) {

    const [foods, setFoods] = useState(0);
    const [disable, setDisable] =useState(true);


    function onSearchSubmit(list) {
        setFoods(list);
        setDisable(false);
    }

    function onReviewSubmit() {
        setDisable(true);
    }




    return (
        <Fragment>
            <div className="h1-top"/><h1> {`고객님의 생생한 리뷰를 작성해주세요`} </h1>
            <RequestForm onSubmit={onSearchSubmit}/>
            {disable ? <div id="Not-found"></div> : <MakeReview foodList={foods} onSubmit={onReviewSubmit} />}
        </Fragment>
        )

}

export default ReviewCreate;