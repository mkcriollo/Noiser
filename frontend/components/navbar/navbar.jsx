import React from 'react';
import { Link } from "react-router-dom"

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        
    }
    render() { 
        // if(!this.props.currentUser){
        //     return null
        // }
        
        return ( 
            <div>
                <div className="navbar">
                    {/* <div className="holder"></div> */}
                        <div className="nav-holder">
                            <Link className="logo" to="/discover" >
                            <i className="fas fa-cloud"></i>
                            </Link>
                            <Link className="header-nav" to="/discover">
                                Home
                            </Link>
                            <button className="header-nav" >Stream</button>
                            <button className="header-nav" >Library</button>
                            <div className="discover-search">
                                <input type="text" placeholder="Search" />
                            </div>
                            <button className="upgrade-header">Upgrade</button>
                            <Link className="upload-header" to="/upload">
                                Upload
                            </Link>
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
                    {/* <div className="holder"></div> */}
                </div>
            </div> 
         );
    }
}
 
export default NavBar;