import React from 'react';
import { formatTime } from "../../util/music_player";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            duration: 0,
            timeElapsed: 0,
            volume: 0.05,
            mutedVolume: 0.0,
            volumeHover: false,
         }

        this.handleMetadata = this.handleMetadata.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
        this.handleRewind = this.handleRewind.bind(this);
        this.handleSkipAhead = this.handleSkipAhead.bind(this);
        this.handleTimeElapsed = this.handleTimeElapsed.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleSkipBack = this.handleSkipBack.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handleSetup = this.handleSetup.bind(this);
        debugger
    }

    handleSetup(){
        const musicPlayer = document.getElementById("audio");
        musicPlayer.volume = 0.05;
        setTimeout(() => this.props.receiveQueue(this.props.songs), 1000);
    }

    handleMetadata() {
        const musicPlayer = document.getElementById("audio");
        this.setState({ duration: musicPlayer.duration })
    }

    handlePlay() {
        const musicPlayer = document.getElementById("audio");

        if (this.props.playing) {
        clearInterval(this.playInterval);
        this.props.pauseSong();
        musicPlayer.pause();
        } else {
        this.props.playSong();
        musicPlayer.play();
        }
    }

    handleNext() {
        this.props.receivePreviousSong(this.props.currentSong.id);
        this.props.receiveCurrentSong(this.props.queue.shift());
        this.props.playSong();
        this.setState({ timeElapsed: 0 });
    }

    handleSkipBack() {
        const musicPlayer = document.getElementById("audio");

        this.props.receivePreviousSong(this.props.currentSong.id);
        this.props.receiveCurrentSong(this.props.queue.shift());
        musicPlayer.currentTime = 0;
        this.props.playSong();
        this.setState({ timeElapsed: 0 });
    }

    handleSkipAhead(e) {
        const musicPlayer = document.getElementById("audio");

        musicPlayer.currentTime = e.target.value;
        this.setState({ timeElapsed: e.target.value });
    }

    handleVolume(e) {
        const musicPlayer = document.getElementById("audio");

        musicPlayer.volume = e.target.value / 1000.0;
        this.setState({ volume: e.target.value / 1000.0 });
    }

    handleTimeElapsed() {
    const musicPlayer = document.getElementById("audio");
    const scrollBar = document.getElementById("scrollbar")

    if (!musicPlayer.paused) {
      this.playInterval = setInterval(() => {
        scrollBar.value = musicPlayer.currentTime;
        this.setState({ timeElapsed: musicPlayer.currentTime })
      }, 50);
    }
    }

    handleMute() {
        const musicPlayer = document.getElementById("audio");
        const volumeBar = document.getElementById("volume");

        if (musicPlayer.volume > 0) {
        this.setState({ volume: 0, mutedVolume: musicPlayer.volume });
        musicPlayer.volume = 0;
        volumeBar.value = 0;
        } else {
        this.setState({ volume: this.state.mutedVolume });
        musicPlayer.volume = this.state.mutedVolume;
        volumeBar.value = this.state.mutedVolume * 1000.0;
        }
    }

    handleRewind() {
    const musicPlayer = document.getElementById("audio");
    
    if (musicPlayer.currentTime < 5 && this.props.played.length > 0) {
      this.props.receiveNextSong(this.props.currentSong.id);
      this.props.receiveCurrentSong(this.props.played.pop());
    } else {
      musicPlayer.currentTime = 0;
      this.props.playSong();
      musicPlayer.play();
      this.setState({ timeElapsed: 0 });
    }
    }

    render() { 
        debugger
        if(!this.props.currentSong){
            return null;
        }
        debugger
        const { currentSong, artist, playing } = this.props;

        const musicPlayerOn = currentSong ?
                <div className="music-player-container">
                    <div className="inner-music-player-holder">
                        <button className="mp-prev" onClick={this.handleSkipBack}></button>
                        <button className="mp-play" onClick={this.handlePlay}></button>
                        <button className="mp-next" onClick={this.handleNext}></button>
                        <button className="mp-shuffle"></button>
                        <button className="mp-repeat" onClick={this.handleRewind}></button>

                        <div className="music-player-song-bar">
                            <div className="current-song-current-time">{formatTime(this.state.timeElapsed)}</div>
                            <input className="scrollbar" id="scrollbar" type="range" min="0" max={this.state.duration} defaultValue="0" onInput={this.handleSkip}></input>
                            <div className="current-song-length">{formatTime(this.state.duration)}</div>
                        </div>

                        <div className="volume">
                            <button></button>
                        </div>

                        <div className="mp-song-info-holder">
                            <img src={currentSong.photoUrl} alt=""/>
                            <div className="mp-song-links">
                                <a className="player-artist" href="">{artist.username}</a>
                                <a className="player-song" href="">{currentSong.title}</a>
                            </div>
                        </div>
                    </div>
                </div> 
            : null;

    
        return (
            <>
            <audio 
            src={currentSong.songUrl}
            id="audio"
            controls
            controlsList="nodownload"
            handleSetup={this.handleSetup}
            onLoadedMetadata={this.handleMetadata}
            onPlaying={this.handleTimeElapsed}
            onEnded={this.handleNext}
            />
            {musicPlayerOn}
            </>
        )
    }
}
 
export default MusicPlayer;