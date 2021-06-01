import React from "react";
import { formatTime } from "../../util/music_player";
import { Link } from "react-router-dom";

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      timeElapsed: 0,
      volume: 0.05,
      mutedVolume: 0.0,
      volumeHover: false,
      songs: [],
      openQueue: false,
    };

    this.handlePlayAgain = this.handlePlayAgain.bind(this);
    this.handleMetadata = this.handleMetadata.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRewind = this.handleRewind.bind(this);
    this.handleSkipAhead = this.handleSkip.bind(this);
    this.handleTimeElapsed = this.handleTimeElapsed.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleSkipBack = this.handleSkipBack.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleSetup = this.handleSetup.bind(this);
  }

  openQueueWindow() {
    let queueBtn = document.querySelector(".queue-btn");
    let queueWindow = document.querySelector(".queue-window");

    if (this.state.openQueue) {
      queueWindow.style.visibility = "hidden";
      this.setState({ openQueue: false });
    } else {
      queueWindow.style.visibility = "visible";
      this.setState({ openQueue: true });
    }
  }

  componentDidMount() {
    let allsongs = this.props.receiveQueue(this.props.songs);
    this.setState({ songs: allsongs.songs });
    debugger;
  }

  handleSetup() {
    const musicPlayer = document.getElementById("audio");
    musicPlayer.volume = 0.05;
    setTimeout(() => this.props.receiveQueue(this.props.songs), 1000);
  }

  handleMetadata() {
    const musicPlayer = document.getElementById("audio");
    this.setState({ duration: musicPlayer.duration });
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
    this.props.receiveCurrentSong(this.props.queue.pop());
    this.props.playSong();
    this.setState({ timeElapsed: 0 });
  }

  handlePlayAgain() {
    const musicPlayer = document.getElementById("audio");

    musicPlayer.currentTime = 0;
  }

  handleSkipBack() {
    const musicPlayer = document.getElementById("audio");
    this.props.receivePreviousSong(this.props.currentSong.id);
    this.props.receiveCurrentSong(this.props.queue.shift());
    musicPlayer.currentTime = 0;
    this.props.playSong();
    this.setState({ timeElapsed: 0 });
  }

  handleSkip(e) {
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
    const scrollBar = document.getElementById("scrollbar");

    if (!musicPlayer.paused) {
      this.playInterval = setInterval(() => {
        scrollBar.value = musicPlayer.currentTime;
        this.setState({ timeElapsed: musicPlayer.currentTime });
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
    if (!this.props.currentSong) {
      return null;
    }

    if (!this.state.songs) {
      return null;
    }

    let nextSongs = [];

    Object.entries(this.state.songs).forEach(([key, song]) => {
      debugger;
      nextSongs.push(
        <div className="next-song-holder">
          <Link to={`/songs/${key}`}>
            <img src={song.photoUrl} alt="" />
          </Link>
          <div className="queue-song-info-holder">
            <h3>{song.description}</h3>
            <Link to={`/songs/${key}`}>
              <h3>{song.title}</h3>
            </Link>
          </div>
        </div>
      );
    });
    debugger;

    // let nextSongs = this.state.songs.map((song, i) => {
    //   return (
    //     <div>
    //       <div className="next-song-holder">
    //         <Link to={`/songs/${i}`}>
    //           <img src={song.photoUrl} alt="" />
    //         </Link>
    //         <div className="queue-song-info-holder">
    //           <h3>{song.description}</h3>
    //           <Link to={`/songs/${i}`}>
    //             <h3>{song.title}</h3>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // });

    const { currentSong, artist, playing } = this.props;

    const musicPlayerOn = currentSong ? (
      <div className="music-player-container">
        <div className="inner-music-player-holder">
          <button className="mp-prev" onClick={this.handleRewind}></button>
          <button
            className={!this.props.playing ? "mp-play" : "mp-pause"}
            onClick={this.handlePlay}
          ></button>
          <button className="mp-next" onClick={this.handleNext}></button>
          <button className="mp-shuffle"></button>
          <button className="mp-repeat" onClick={this.handlePlayAgain}></button>

          <div className="music-player-song-bar">
            <div className="current-song-current-time">
              {formatTime(this.state.timeElapsed)}
            </div>
            <input
              className="scrollbar"
              id="scrollbar"
              type="range"
              min="0"
              max={this.state.duration}
              defaultValue="0"
              onInput={this.handleSkip}
            ></input>
            <div className="current-song-length">
              {formatTime(this.state.duration)}
            </div>
          </div>

          <div className="volume">
            {/* <input
              className="scrollbar"
              id="scrollbar"
              type="range"
              min="0"
              max={this.state.duration}
              defaultValue="0"
              onInput={this.handleSkip}
            ></input> */}
          </div>

          <div className="mp-song-info-holder">
            <img src={currentSong.photoUrl} alt="" />
            <div className="mp-song-links">
              <a className="player-artist" href="">
                {artist.username}
              </a>
              <a className="player-song" href="">
                {currentSong.title}
              </a>
            </div>
          </div>
          <div className="queue-btn" onClick={() => this.openQueueWindow()}>
            <i class="fas fa-stream"></i>
          </div>
          <div className="queue-window">
            <div className="queue-headliner">
              <h2>Up Next</h2>
              <i
                class="fas fa-times"
                onClick={() => this.openQueueWindow()}
              ></i>
            </div>
            {nextSongs}
          </div>
        </div>
      </div>
    ) : null;

    return (
      <>
        <audio
          src={currentSong.songUrl}
          id="audio"
          controls
          controlsList="nodownload"
          // handleSetup={this.handleSetup}
          onLoadedMetadata={this.handleMetadata}
          onPlaying={this.handleTimeElapsed}
          onEnded={this.handleNext}
        />
        {musicPlayerOn}
      </>
    );
  }
}

export default MusicPlayer;
