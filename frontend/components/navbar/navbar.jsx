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
                    <div className="dropdown">
                        <div className="img-profile"/>
                        <p>{this.props.currentUser.username}</p>
                        <div className="arrow-button"></div>
                        {/* <GreetingContainer /> */}
                        <div className="dropdown-menu">
                            <div className="left-drop">
                                <li className="profile-icon"></li>
                                <li className="likes-icon"></li>
                                <li className="stations-icon"></li>
                                <li className="follow-icon"></li>
                                <li className="pro-icon"></li>
                                <li className="tracks-icon"></li>
                                <li className="distribute-icon"></li>
                            </div>
                            <div className="right-drop">
                                <li>Profile</li>
                                <li>Likes</li>
                                <li>Stations</li>
                                <li>Who to follow</li>
                                <li>Try Pro</li>
                                <li>Tracks</li>
                                <li>Distribute</li>
                            </div>
                        </div>
                    </div>
                    <button className="activites-header-bell"></button>
                    <button className="activites-header-mail"></button>
                    <div className="activites-header-dots">
                        <div className="logout-drop">
                            <button onClick={() => this.props.logout(this.props.currentUser.id)}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div> 
         );
    }
}
 
export default NavBar;