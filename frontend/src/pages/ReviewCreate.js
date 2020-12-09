import React, {useState} from 'react';
import { Fragment } from "react";
import RequestForm from "../Components/RequestForm";
import MakeReview from "../Components/MakeReview";
import "./ReviewCreate.css";



function ReviewCreate({user}) {

    const [foods, setFoods] = useState(0);
    const [disable, setDisable] =useState(true);


    function onSearchSubmit(list) {
        setFoods(list);
        setDisable(false);
    }

    function onReviewSubmit() {
        setDisable(true);
    }


    //send 시 음식 목록이 보내지기 때문에 RequestForm hidden
    return (
        <Fragment>
            <div className="h1-top"/><h1> {`고객님의 생생한 리뷰를 작성해주세요`} </h1>
            {disable && <RequestForm onSubmit={onSearchSubmit}/> }
            {disable ? <div id="Not-found-review"></div> : <MakeReview user={user} foodList={foods} onSubmit={onReviewSubmit} />}
        </Fragment>
        )

}

export default ReviewCreate;