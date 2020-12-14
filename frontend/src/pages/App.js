import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import MyInfo from "../Components/MyInfo";
import MainPage from "./MainPage";
import RestMenu from "./RestMenu";
import ReviewCreate from "./ReviewCreate";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import SignOut from "../Components/SignOut";
import PermissionRoute from "./PermissionRoute";




function App() {

  const [user, setUser] = useState(null);
  const authenticated = user != null;

  function logIn(user) {
    setUser(user);
  }

  function logOut() {
    setUser(null);
  }

  return (
      <Router>
        <div id="page" className="container">
          <Navbar authenticated={authenticated} />
          <div id="main">
            <div className="loginbar">
              { authenticated ? (<SignOut user={user} logOut={logOut} />) : (
                  <Link to="/signIn">
                    <button>로그인</button>
                  </Link>)
              }
            </div>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/RestMenu"
                     render ={ props => <RestMenu {...props} user={user} />} />
              <PermissionRoute
                  path="/ReviewCreate"
                  authenticated={authenticated}
                  render={props => (
                      <ReviewCreate {...props} user={user}  />)}
              />
              <Route path="/signUp" component={SignUp} />
              <Route
                  path="/signIn"
                  render={ props =>(
                      <SignIn {...props} authenticated={authenticated} logIn={logIn} />)}
              />
            </Switch>
            <MyInfo />
          </div>
        </div>
      </Router>
  )
}



export default App;
