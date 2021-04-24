import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import NavBar from "../navbar/navbar_container";
import { Link } from "react-router-dom";
import Musicplayer from "../musicplayer/music_player_container";
import PlayButton from "../musicplayer/playbutton_container";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      moreusers: [],
    };

    // this.playMusicBar = this.playMusicBar.bind(this)
  }

  componentDidMount() {
    this.props.getAllSongs();
    this.props.fetchUsers().then(this.randomThree());
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (prevState.moreusers.length === 0) {
      this.props.fetchUsers().then(this.randomThree());
    }
    if (prevProps.match.url !== this.props.match.url) {
      this.props.fetchUsers().then(this.randomThree());
    }
  }

  randomThree() {
    let { users } = this.props;

    if (users.length >= 3) {
      let otherUsers = [];

      while (otherUsers.length < 3) {
        let randUser = users[Math.floor(Math.random() * users.length)];
        console.log(randUser);
        if (!otherUsers.includes(randUser)) {
          otherUsers.push(randUser);
        }
      }
      console.log(otherUsers);
      this.setState({ moreusers: otherUsers });
    } else {
      return null;
    }
  }

  // playMusicBar(e){
  //     e.preventDefault()
  //    return {
  //     <Musicplayer />
  //    }
  // }

  randomArr(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      let randomNum = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randomNum]] = [arr[randomNum], arr[i]];
    }

    return arr;
  }

  reverseArr(arr) {
    let str = [];
    for (let i = arr.length - 1; i > 0; i--) {
      str.push(arr[i]);
    }
    return str;
  }

  //   generatePlaylist(playlist) {
  //     ;
  //     let newPlaylist = playlist.map((song, i) => {
  //       return (
  //         <Link key={i} to={`/songs/${song.id}`}>
  //           <img src={song.photoUrl} />
  //         </Link>
  //       );
  //     });
  //   }

  render() {
    const { songs } = this.props;

    let randomSongs = this.randomArr(songs);
    let reversedSongs = this.reverseArr(songs);

    let rockPlaylist = [];
    let rapPlaylist = [];
    let chill80Songs = [];
    let danceLatin = [];
    let trapPlaylist = [];
    let rnbPlaylist = [];
    let workoutPlaylist = [];
    let feelGoodplaylist = [];

    songs.map((song) => {
      switch (song.genre) {
        case "Rock":
          rockPlaylist.push(song);
          break;
        case "Throwbacks":
          chill80Songs.push(song);
          break;
        case "Rap":
          rapPlaylist.push(song);
          break;
        case "Latin":
          danceLatin.push(song);
          break;
        case "Trap":
          trapPlaylist.push(song);
          break;
        case "R&B":
          rnbPlaylist.push(song);
          break;
        case "Workout":
          workoutPlaylist.push(song);
          break;
        case "Pop":
          feelGoodplaylist.push(song);
          break;
      }
    });

    const trapSongs = trapPlaylist.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <div>
            <img src={song.photoUrl} />
            <button id="song-show-play-dis"></button>
            <div id="overlay-dis"></div>
          </div>
        </Link>
      );
    });

    const feelGoodSongs = feelGoodplaylist.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <div>
            <img src={song.photoUrl} />
            <button id="song-show-play-dis"></button>
            <div id="overlay-dis"></div>
          </div>
        </Link>
      );
    });

    const workoutSongs = workoutPlaylist.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <div>
            <img src={song.photoUrl} />
            <button id="song-show-play-dis"></button>
            <div id="overlay-dis"></div>
          </div>
        </Link>
      );
    });

    const rnbSongs = rnbPlaylist.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <div>
            <img src={song.photoUrl} />
            <button className="song-show-play-dis"></button>
            <div id="overlay-dis"></div>
          </div>
        </Link>
      );
    });

    const latinSongs = danceLatin.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <div>
            <img src={song.photoUrl} />
            <button id="song-show-play-dis"></button>
            <div id="overlay-dis"></div>
          </div>
        </Link>
      );
    });

    const rapSongs = rapPlaylist.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <div>
            <img src={song.photoUrl} />
            <button id="song-show-play-dis"></button>
            {/* <PlayButton songId={song.songId} song={song} /> */}
            <div id="overlay-dis"></div>
            <p className="dis-song-title">{song.title}</p>
          </div>
        </Link>
      );
    });

    const chillSongs = chill80Songs.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <div>
            <img src={song.photoUrl} />
            <button className="song-show-play-dis"></button>
            <div id="overlay-dis"></div>
          </div>
        </Link>
      );
    });

    const rockSongs = rockPlaylist.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <img src={song.photoUrl} />
        </Link>
      );
    });

    const newSongs = songs.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <div>
            <img src={song.photoUrl} />
            <button id="song-show-play-dis"></button>
            <div id="overlay-dis"></div>
          </div>
        </Link>
      );
    });

    const reversed = reversedSongs.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <div>
            <img src={song.photoUrl} />
            <button id="song-show-play-dis"></button>
            <div id="overlay-dis"></div>
          </div>
        </Link>
      );
    });

    const hotSongs = randomSongs.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <div>
            <img src={song.photoUrl} />
            <button id="song-show-play-dis"></button>
            <div id="overlay-dis"></div>
          </div>
        </Link>
      );
    });

    const allUsers = this.state.moreusers.map((user, i) => {
      return (
        <div className="other-users-container">
          <Link key={i} to={`/users/${user.id}`}>
            <img src={user.photoUrl} alt="" className="other-user-img" />
          </Link>

          <div className="other-user-info">
            <div className="other-users-name">
              <Link key={i} to={`/users/${user.id}`}>
                <h1>{user.username}</h1>
              </Link>
              <div className="icon-vertified-small"></div>
            </div>
            <div className="other-user-followers">
              <div className="following-count"></div>
              <button>
                <div className="icon-follow"></div>
                Follow
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="app-discover">
        <NavBar />
        <div className="discover-center">
          <div className="main-content">
            <div className="loading-song">
              <br />
              <div className="mixed-selection">
                <h2>Charts: Top 50</h2>
                <p>The most played tracks on Noiser this week</p>
                <div className="showing-songs">
                  <div className="inner-showing">{hotSongs}</div>
                </div>
              </div>
              <div className="mixed-selection">
                <h2>New Music Now</h2>
                <p>The lastest hits,updated all the time</p>
                <div className="showing-songs">
                  <div className="inner-showing">{reversed}</div>
                </div>
              </div>
              <div className="mixed-selection">
                <h2>Charts: New & hot</h2>
                <p>Up-and-coming tracks on Noiser</p>
                <div className="showing-songs">
                  <div className="inner-showing">{rapSongs}</div>
                </div>
              </div>
              <div className="mixed-selection">
                <h2>Dancing on Your Own</h2>
                <p>Stay at home dance party</p>
                <div className="showing-songs">
                  <div className="inner-showing">{latinSongs}</div>
                </div>
              </div>
              <div className="mixed-selection">
                <h2>Workout</h2>
                <p>Songs for your exercise routine</p>
                <div className="showing-songs">
                  <div className="inner-showing">{workoutSongs}</div>
                </div>
              </div>
              <div className="mixed-selection">
                <h2>Trap</h2>
                <p>The latest and hottest trap</p>
                <div className="showing-songs">
                  <div className="inner-showing">{trapSongs}</div>
                </div>
              </div>
              <div className="mixed-selection">
                <h2>R&B</h2>
                <p>The latest and hottest R&B</p>
                <div className="showing-songs">
                  <div className="inner-showing">{rnbSongs}</div>
                </div>
              </div>
              <div className="mixed-selection">
                <h2>Feel-Good Tunes</h2>
                <p>Upbeat sounds and positive vibes</p>
                <div className="showing-songs">
                  <div className="inner-showing">{feelGoodSongs}</div>
                </div>
              </div>
              <div className="mixed-selection">
                <h2>Chill Tunes</h2>
                <p>Music for relaxation and focus</p>
                <div className="showing-songs">
                  <div className="inner-showing">{chillSongs}</div>
                </div>
              </div>
              <div className="mixed-selection">
                <h2>Rock & Metal</h2>
                <p>The latest and hottest rock & metal</p>
                <div className="showing-songs">
                  <div className="inner-showing">{rockSongs}</div>
                </div>
              </div>
            </div>
            <div className="side-content">
              <div className="side-inside-info">
                <div className="dash-box"></div>
                <div className="who-to-follow-header">
                  <div className="who-to-follow-header-logo-words">
                    <span className="sc-icon sc-icon-follower sc-icon-large sidebarHeader__icon"></span>
                    <p>Who to follow</p>
                  </div>
                  <div className="users-refresh-discover">
                    <span></span>
                    <p>Refresh list</p>
                  </div>
                </div>
                {allUsers}
                <div className="side-footer">
                  <br />
                  <li>Legal -</li>
                  <li>Privacy -</li>
                  <li>Cookies -</li>
                  <li>Imprint -</li>
                  <li>Creator Resources -</li>
                  <li>Blog -</li>
                  <li>Charts -</li>
                  <li>Popular searches</li>
                  <br />
                  <a>
                    Language:<p className="side-footer-p">English (US)</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
