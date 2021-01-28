import React from 'react';
import Musicplayer from "../musicplayer/music_player_container";
import Navbar from "../navbar/navbar_container";
// import WaveSurfer from 'wavesurfer.js';

class Songs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }

    componentDidMount(){
        this.props.getSong(this.props.match.params.songId)
    }
    render() { 

        // const wavef = document.getElementById("waveform")
        // var wavesurfer = WaveSurfer.create({
        //     container: wavef
        // });
        if(!this.props.song) {
            return null;
        }
        return ( 
            <div>
                <Navbar />
                <div className="song-show-center">
                    <div className="main-song-show">
                        <div className="song-show-player">
                            <div className="song-show-title">
                                <button className="song-show-play"></button>
                                <div className="header-show-info">
                                    <p>2 weeks</p>
                                    <h3>{this.props.currentUser.username}</h3>
                                    <h2>{this.props.song.title}</h2>   
                                </div>
                            </div>
                            <div className="waveform-show">
                            </div>
                        </div>
                        <img className="song-show-pic" src={this.props.song.photoUrl} ></img>
                    </div>
                    <div className="song-show-body">
                            <div className="song-info">
                                <div className="actions-tab-show"></div>
                                <div className="about-show">
                                    <div className="about-left">
                                        <img className="image-icon" src={this.props.song.photoUrl}></img>
                                        <h2>{this.props.currentUser.username}</h2>
                                        <p></p>
                                        <button>Follow</button>
                                    </div>
                                    <div className="about-right">
                                        <p>{this.props.song.description}</p>
                                        <div className="show-comments">
                                            <p className="total-comments">
                                                <span className="comment-icon"></span>
                                                <span>1,270 comments</span>
                                            </p>
                                            <div className="comment-body">
                                                <div className="profile-show-img"></div>
                                                <div className="c-body-left">
                                                <p>underw6ter at 0:01:</p>
                                                <p>Rare playlist with underground bangers and other playlists with nothin but fire!!! Like up the playlists and let me put yall on!!!</p>
                                                </div>
                                                <div className="c-body-right">1 year ago</div>
                                            </div>
                                            <div className="comment-body">
                                                <div className="profile-show-img"></div>
                                                <div className="c-body-left">
                                                <p>Playboi Judah at 0:44:</p>
                                                <p>one of my favorites to listen during a wrestling tournament</p>
                                                </div>
                                                <div className="c-body-right">1 year ago</div>
                                            </div>
                                            <div className="comment-body">
                                                <div className="profile-show-img"></div>
                                                <div className="c-body-left">
                                                <p>Kord at 0:15:</p>
                                                <p>yo check out the songs i reposted they FYEEE</p>
                                                </div>
                                                <div className="c-body-right">2 year ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="song-show-banner">
                                
                            </div>
                    </div>
                </div>
                <Musicplayer song={this.props.song.songUrl} photo={this.props.song.photoUrl} title={this.props.song.title}/>
            </div>
         );
    }
}
 
export default Songs;