import React from 'react';

class PlayButton extends React.Component {
    constructor(props) {
        super(props);

        this.handlePlay = this.handlePlay.bind(this);
        debugger
    }

    handlePlay() {
    let {song} = this.props 

    debugger
    const musicPlayer = document.getElementById("audio");
    debugger 

    if (this.props.playing && this.props.currentSong.id === this.props.song.id) {
        debugger
      this.props.pauseSong();
      musicPlayer.pause();
    } else {
        debugger
      this.props.receiveCurrentSong(this.props.song.id);
      this.props.receivePreviousSong(this.props.song.id);
      debugger
      this.props.playSong();
      debugger
      musicPlayer.setAttribute("autoPlay", "");
      musicPlayer.play();
    }
    }

    render() { 
        return ( 
            <button 
                className="song-show-play"
                onClick={this.handlePlay}
            ></button>
         );
    }
}
 
export default PlayButton;