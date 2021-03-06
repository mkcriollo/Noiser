import React from 'react';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount(){
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

    handleNextSong() {
        this.props.receivePreviousSong(this.props.currentSong.id);
        this.props.receiveCurrentSong(this.props.queue.shift());
        this.props.playSong();
        this.setState({ timeElapsed: 0 });
    }

    handleSkip() {
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

    render() { 
        return ( <div>
            hello
        </div> );
    }
}
 
export default MusicPlayer;