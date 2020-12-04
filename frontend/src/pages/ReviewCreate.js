import React, {useState} from 'react';
import { Fragment } from "react";
import RequestForm from "../Components/RequestForm";
import CreateReview from "../Components/CreateReview";
import "./ReviewCreate.css";



function ReviewCreate() {

    const [foods, setFoods] = useState(0);
    const [disable, setDisable] =useState(true);


    function onSearchSubmit(list) {
        setFoods(list);
        setDisable(false);
    }




    return (
        <Fragment>
            <RequestForm onSubmit={onSearchSubmit}/>
            {disable ? "Not" : <CreateReview foodList={foods} />}
        </Fragment>
        )

}

export default ReviewCreate;