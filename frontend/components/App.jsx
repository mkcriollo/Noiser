import React from 'react';
import GreetingContainer from "../components/greeting/greeting_container";
import Modal from "./modal/modal"
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";
import SplashContainer from '../components/splash/splash_conatiner'
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import DiscoverContainer from "./discover/discover_container";

const App = () => (
    <div>
        <Modal />
        
        <Switch>
            <AuthRoute exact path='/' component={SplashContainer}/>
            <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
        </Switch>

    </div>
)


export default App;