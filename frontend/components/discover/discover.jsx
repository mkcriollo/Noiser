import React from 'react';
import GreetingContainer from "../greeting/greeting_container";
import NavBar from "../navbar/navbar_container";

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="app-discover">
                <NavBar />
                <div className="discover-app">
                    <div className="main-content">

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Discover;