import React from 'react';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }

    render() { 
        let { currentUser, logout,} = this.props
        let greetingUser = () => (
            <div className="user-profile-header">
                <h1>{currentUser.username}</h1>
                <button onClick={() => logout(currentUser.id)}>Log Out</button>
            </div>
        )
        let sessionLinks = () => (
            <nav>
                <button className="login-button" onClick={() => this.props.openModal("login")}>Sign in</button>
                <button className="signup-button" onClick={() => this.props.openModal("signup")}>Create account</button>
            </nav>
        )
        return currentUser ? greetingUser() : sessionLinks()
    }
}
 
export default Greeting;

