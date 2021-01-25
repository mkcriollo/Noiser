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
                    <div className="discover-center">
                    <div className="main-content">
                        <div className="loading-song">
                            <br/>
                            <div className="mixed-selection">
                                <h2>Charts: Top 50</h2>
                                <p>The most played tracks  on Noiser this week</p>
                            </div>
                            <div className="mixed-selection">
                                <h2>New Music Now</h2>
                                <p>The lastest hits,updated all the time</p>
                            </div>
                            <div className="mixed-selection">
                                <h2>Charts: New & hot</h2>
                                <p>Up-and-coming tracks on Noiser</p>
                            </div>
                            <div className="mixed-selection">
                                <h2>Dancing on Your Own</h2>
                                <p>Stay at home dance party</p>
                            </div>
                            <div className="mixed-selection">
                                <h2>Workout</h2>
                                <p>Songs for your exercise routine</p>
                            </div>
                            <div className="mixed-selection">
                                <h2>Trap</h2>
                                <p>The latest and hottest trap</p>
                            </div>
                            <div className="mixed-selection">
                                <h2>R&B</h2>
                                <p>The latest and hottest R&B</p>
                            </div>
                            <div className="mixed-selection">
                                <h2>Feel-Good Tunes</h2>
                                <p>Upbeat sounds and positive vibes</p>
                            </div>
                            <div className="mixed-selection">
                                <h2>Chill Tunes</h2>
                                <p>Music for relaxation and focus</p>
                            </div>
                            <div className="mixed-selection">
                                <h2>Rock & Metal</h2>
                                <p>The latest and hottest rock & metal</p>
                            </div>
                        </div>
                    </div>
                    <div className="side-content">
                        <div className="dash-box"></div>
                        <div className="side-footer">
                            <br/>
                            <li>Legal -</li>
                            <li>Privacy -</li>
                            <li>Cookies -</li>
                            <li>Imprint -</li>
                            <li>Creator Resources -</li>
                            <li>Blog -</li>
                            <li>Charts -</li>
                            <li>Popular searches</li>
                            <br/>
                            <a>Language:<p className="side-footer-p">English (US)</p></a>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Discover;