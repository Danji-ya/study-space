import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import MyInfo from "../Components/MyInfo";
import MainPage from "./MainPage";
import RestMenu from "./RestMenu";
import ReviewCreate from "./ReviewCreate";


class App extends Component {

  render() {
    return (
        <Router>
        <div id="page" className="container">
          <Navbar />

          <div id="main">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/RestMenu" component={RestMenu} />
              <Route exact path="/ReviewCreate" component={ReviewCreate} />
            </Switch>
            <MyInfo />
          </div>
        </div>
        </Router>
    )}
}

export default App;
