import React from "react";

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    this.props.receiveCurrentSong(this.props.song.id);
    // this.props.receivePreviousSong(this.props.song.id);
  }

  handlePlay() {
    let { song } = this.props;

    const musicPlayer = document.getElementById("audio");
    if (
      this.props.playing &&
      this.props.currentSong.id === this.props.song.id
    ) {
      this.props.pauseSong();
      musicPlayer.pause();
    } else {
      this.props.receiveCurrentSong(this.props.song.id);
      this.props.playSong();
      musicPlayer.setAttribute("autoPlay", "");
      musicPlayer.play();
    }
  }

  render() {
    if (!this.props.song) {
      return null;
    }
    if (!this.props.currentSong) {
      return null;
    }

    return (
      <button
        className={
          this.props.playing === false ||
          this.props.currentSong.id !== this.props.song.id
            ? "song-show-play"
            : "song-show-pause"
        }
        onClick={this.handlePlay}
      ></button>
    );
  }
}

export default PlayButton;
