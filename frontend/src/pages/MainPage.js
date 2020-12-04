import React from 'react';
import { Fragment } from "react";
import Welcome from "../Components/Welcome";
import MainContent from "../Components/MainContent";


function MainPage() {

    // Logo 및 주 내용 component
    return (
        <Fragment>
            <Welcome />
            <MainContent />
        </Fragment>
    )
}

export default MainPage;