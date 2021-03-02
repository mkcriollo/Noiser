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
import UploadContainer from "./upload/upload_container";
import SongContainer from "./songs/songs_container";
import Musicplayer from './musicplayer/music_player_container';
import UserContainer from "./users/user_container";

const App = () => (
    <div>
        <Modal />
        <Switch>
            <AuthRoute exact path='/' component={SplashContainer}/>
            <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
            <ProtectedRoute exact path="/upload" component={UploadContainer} />
            <ProtectedRoute exact path="/songs/:songId" component={SongContainer} />
            <ProtectedRoute exact path="/users/:userId" component={UserContainer} />
        </Switch>
        {/* <Musicplayer /> */}
    </div>
)


export default App;