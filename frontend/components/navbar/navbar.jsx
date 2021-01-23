import React from 'react';
import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom"

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() { 
        return ( 
            <div>
                <div className="navbar">
                    <button className="logo">
                        <Link to="/discover" />
                        NOISER
                    </button>
                    <button className="header-nav" >
                        <Link to="/discover" />
                        Home
                    </button>
                    <button className="header-nav" >Stream</button>
                    <button className="header-nav" >Library</button>
                    <div className="discover-search">
                        <input type="text" placeholder="Search" />
                    </div>
                    <button className="upgrade-header">Upgrade</button>
                    <button className="upload-header">Upload</button>
                    <div>
                        <GreetingContainer />
                    </div>
                    <button className="activites-header-bell"></button>
                    <button className="activites-header-mail"></button>
                    <button className="activites-header-dots"></button>
                </div>
            </div>
         );
    }
}
 
export default NavBar;