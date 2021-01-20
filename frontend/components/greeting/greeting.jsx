import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    render() { 
        let { currentUser, logout } = this.props
        let greetingUser = () => (
            <div>
                <h1>`Welcome ${currentUser.username}`</h1>
                <button onClick={() => logout(currentUser.id)}>Log Out</button>
            </div>
        )
        let sessionLinks = () => (
            <nav>
                <Link to="/signup">Sign Up</Link>
                &nbsp;or&nbsp;
                <Link to='/login'>Log In</Link>
            </nav>
        )
        return currentUser ? greetingUser() : sessionLinks()
    }
}
 
export default Greeting;