import React from 'react';
import GreetingContainer from '../greeting/greeting_container'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    componentDidMount() {
        this.props.getAllSongs()
    }
                

    render() { 
        let twelve = this.props.songs.slice(0,12)

        const newSongs = twelve.map(song => {
            return (
                <div onClick={() => this.props.openModal("signup")} className ="song-splash">
                    <img src={song.photoUrl} />
                    {/* {song.title} */}
                </div>
            );
        });

        return ( 
            <div className="splash-container">
                <div className="slideshow-container">
                    <div className="header-slide">
                        <h1 className="noiser-logo">Noiser</h1>
                        <GreetingContainer />
                    </div>
                </div>

                <div className="trending-songs-container">
                    <div className="searchbar-container">
                        <input className="searchbar" placeholder="Search for artists, bands, tracks, podcasts" type="text" name="" id=""/>
                        <p>or</p>
                        <button className="splash-upload-button" onClick={() => this.props.openModal("signup")}>Upload your Own</button>
                    </div>
                    <div className="trending-tracks-title">Hear what's trending for free in the Noiser community</div>
                    <div className="splash-songs">
                        {newSongs}
                    </div>
                    <button className="explore-music-button" value="Explore trending playlists" onClick={() => this.props.openModal("signup")}>Explore trending playlists</button>
                </div>
                <div className="banner-mobile">
                    <div className="mobile-pic-ad"></div>
                    <div className="mobile-info-ad">
                        <h2>Never stop listening</h2>
                        <div className="rainbow-line"></div>
                        <p className="mobile-info-text">Noiser is soon available on Web, iOS, Android, Sonos, Chromecast, and Xbox One</p>
                    </div>
                </div>
                <div className="noiser-teaser">
                    <h2 className="teaser-header">Calling all Creators</h2>
                    <p className="teaser-text">Get on Noiser to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
                    <button className="teaser-button" onClick={() => this.props.openModal("signup")}>Find out more</button>
                </div>
                <div className="bottom-container">
                    <h2 className="bottom-header">Thanks for listening. Now join in.</h2>
                    <h2 className="bottom-text">Save tracks, follow artist and build playlist. All for free.</h2>
                    <button className="bottom-button-signup" onClick={() => this.props.openModal("signup")}>Create account</button>
                    <div className="signin-bottom">
                        <p>Already have an account?</p>
                        <button className="bottom-button-login" onClick={() => this.props.openModal("login")}>Sign in</button>
                    </div>
                </div>
                <div className="splash-footer">
                    <hr className="gray-line"></hr>
                    <p>Popular searches - Directory - About us - Creator Resources - Blog - Jobs - Developers - Help - Legal - Privacy - Cookies - Imprint - Charts </p>
                    <p>Language:English (US)</p>
                </div>
            </div>

         );
    }
}
 
export default Splash;