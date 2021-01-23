const { Component } = require("react");
import { withRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from 'react';

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Redirect to="/discover" />
        ) : (
            <Component {...props} />
        )
    )}/>
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/' />
        )
    )} />
);



const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.id)
    };
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute =withRouter(connect(mSTP)(Protected))