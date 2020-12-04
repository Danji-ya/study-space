import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Fragment } from "react";
import RequestForm from "../Components/RequestForm";
import FoodList from "../Components/FoodList";
import FoodDetail from "../Components/FoodDetail";
import './RestMenu.css'


function RestMenu( {match} ) {

    const [foods, setFoods] = useState(0);


    function onSearchSubmit(list) {
        setFoods(list);
    }

    //Nested Router
    //Form형식 및 음식 리스트 및 상세정보
    return (
        <Fragment>
            <RequestForm onSubmit={onSearchSubmit}/>
            <Router>
                <Route exact path={match.path}
                       render={(props) => <FoodList {...props} foods={foods} />} />
                <Route path={`${match.path}/:id`}
                       render={(props) => <FoodDetail {...props} foods={foods} />} />
            </Router>
        </Fragment>
    )
}

export default RestMenu;

