import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Fragment } from "react";
import RequestForm from "../Components/RequestForm";
import FoodList from "../Components/FoodList";
import FoodDetail from "../Components/FoodDetail";
import './RestMenu.css'


function RestMenu( {match, user} ) {

    const [foods, setFoods] = useState(0);


    function onSearchSubmit(list) {
        setFoods(list);
    }

    //Nested Router
    //Form형식 및 음식 리스트 및 상세정보
    return (
        <Fragment>
            <div className="h1-top"/> <h1> {'당신의 소중한 한끼를 위한'}<br/>{'휴게소 메뉴'} </h1>
            <Router>
                <Route exact path={match.path}
                       render= { props =>
                           <Fragment>
                               <RequestForm {...props} onSubmit={onSearchSubmit} />
                               <FoodList {...props} foods={foods} />
                           </Fragment>
                       } />
                <Route path={`${match.path}/:stdRestNm/:foodNm`}
                       render={(props) => <FoodDetail {...props}  user={user} foods={foods} />} />
            </Router>
        </Fragment>
    )
}

export default RestMenu;

