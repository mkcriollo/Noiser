import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar_container";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreusers: [],
      username: "",
      open: false,
      imageUrl: this.props.currentUser.photoUrl || null,
      imageFile: null,
      backUrl: this.props.currentUser.backPhotoUrl || null,
      backImageFile: null,
    };
    debugger;
    this.editProfilePic = this.editProfilePic.bind(this);
    this.previewFile = this.previewFile.bind(this);
    this.previewBackground = this.previewBackground.bind(this);
    this.editBackground = this.editBackground.bind(this);
    debugger;
  }

  previewFile(e) {
    let btn = document.querySelector(".btn-change-profile");
    debugger;
    const file = e.target.files[0];
    debugger;
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        this.setState({ imageFile: file, imageUrl: fileReader.result });
      };
      btn.style.backgroundColor = "green";
    }
  }

  previewBackground(e) {
    let btn = document.querySelector(".btn-change-background");
    const file = e.target.files[0];
    debugger;
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        this.setState({ backImageFile: file, backUrl: fileReader.result });
      };
      btn.style.backgroundColor = "green";
    }
  }

  openEdit() {
    let editBtn = document.querySelector(".edit-profile-btn");
    let editOption = document.querySelector(".edit-username-holder");
    let input = document.querySelector(".edit-username-holder > input");
    if (this.state.open === false) {
      editOption.style.visibility = "visible";
      this.setState({ username: "" });
      this.setState({ open: true });
    } else if (this.state.open === true) {
      editOption.style.visibility = "hidden";
      this.setState({ open: false });
      this.setState({ username: "" });
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchUsers().then(this.randomThree());
    this.props.receiveArtistSongs(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.moreusers.length === 0) {
      this.props.fetchUsers().then(this.randomThree());
      this.props.receiveArtistSongs(this.props.match.params.userId);
    }
    if (prevProps.match.url !== this.props.match.url) {
      this.props.receiveArtistSongs(this.props.match.params.userId);
      this.props.fetchUsers().then(this.randomThree());
    }
  }

  editProfilePic() {
    let btn = document.querySelector(".btn-change-profile");
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append("user[photo]", this.state.imageFile);
    }
    this.props.updateUser(formData, this.props.user.id);
    btn.style.backgroundColor = "white";
  }

  editBackground() {
    let btn = document.querySelector(".btn-change-background");
    const formData = new FormData();
    if (this.state.backUrl) {
      formData.append("user[backphoto]", this.state.backImageFile);
    }
    this.props.updateUser(formData, this.props.user.id);
    btn.style.backgroundColor = "white";
  }

  editUsername() {
    const formData = new FormData();
    formData.append("user[username]", this.state.username);

    // if (this.state.imageFile) {
    //   formData.append("user[photo]", this.state.imageFile);
    // }
    this.props
      .updateUser(formData, this.props.user.id)
      .then(this.setState({ open: true }));
    this.openEdit();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
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

  render() {
    if (!this.props.user) {
      return null;
    }
    debugger;
    let { userSongs, user } = this.props;

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

    const artistSongs = userSongs.map((song, i) => {
      return (
        <div className="artist-song-container">
          <Link key={i} to={`/songs/${song.id}`}>
            <img src={song.photoUrl} alt="" className="artist-song-picture" />
          </Link>
          <div className="user-song-details">
            <div className="song-details-header">
              <div className="user-song-playbutton">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="play"
                  className="svg-inline--fa fa-play fa-w-14 play-icon"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  ></path>
                </svg>
              </div>
              <div className="user-word">
                <div className="the-song-info1">
                  <div className="userpage-artist-name">
                    {this.props.user.username}
                  </div>
                  <p>1 Year Ago</p>
                </div>
                <div className="the-song-info2">
                  <Link key={i} to={`/songs/${song.id}`}>
                    <div>{song.title}</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="user-song-wave">
              <div ref={this.waveformRef}></div>
            </div>
            <div className="user-song-action">
              <button>Like</button>
              <button>Share</button>
              <button>Edit</button>
              <button>More</button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="all-page">
        <NavBar />
        <div className="userProfileMain">
          <div className="profile-header">
            <div className="edit-username-holder">
              <h2>Display Name: </h2>
              <input
                onChange={this.update("username")}
                value={this.state.username}
                maxLength="30"
              />
              <button onClick={() => this.editUsername()}>Enter</button>
            </div>
            <div
              className={
                this.props.currentUser.id === this.props.user.id
                  ? "edit-user-profile-img-holder"
                  : "show-nothing"
              }
            >
              <i class="fas fa-camera-retro"></i>
              <input
                // className="replace-img"
                type="file"
                onChange={this.previewFile}
              />
              <button
                onClick={() => this.editProfilePic()}
                className="btn-change-profile"
              >
                Enter
              </button>
            </div>
            <div
              className={
                this.props.currentUser.id === this.props.user.id
                  ? "edit-user-back-img-holder"
                  : "show-nothing"
              }
            >
              <i class="fas fa-image"></i>
              <input
                // className="replace-img"
                type="file"
                onChange={this.previewBackground}
              />
              <button
                onClick={() => this.editBackground()}
                className="btn-change-background"
              >
                Enter
              </button>
            </div>
            <img src={user.backPhotoUrl} alt="" />
            <div className="profile-header-info">
              <div className="profile-page-pic">
                <img src={user.photoUrl} alt="" />
              </div>
              <div className="profile-page-info">
                <h3 className="artist-name-block">
                  {this.props.user.username}
                  <div className="vertified-large"></div>
                </h3>
                <div className="artist-song-name"></div>
              </div>
            </div>
          </div>
          <div className="user-info-bar">
            <ul className="user-info-tab">
              <li className="tab-links">All</li>
              <li className="tab-links">Popular tracks</li>
              <li className="tab-links">Tracks</li>
              <li className="tab-links">Albums</li>
              <li className="tab-links">Playlist</li>
              <li className="tab-links">Reposts</li>
            </ul>
            <div className="user-action-bar">
              <div className="user-buttons">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="external-link-alt"
                  className="svg-inline--fa fa-external-link-alt fa-w-16 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                  ></path>
                </svg>
                Share
              </div>
              <div
                className={
                  this.props.currentUser.id ===
                  Number(this.props.match.params.userId)
                    ? "edit-profile-btn"
                    : "edit-profile-btn-hide"
                }
                onClick={() => this.openEdit()}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="pencil-alt"
                  className="svg-inline--fa fa-pencil-alt fa-w-16 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                  ></path>
                </svg>
                Edit
              </div>
            </div>
          </div>
          <div className="profile-users-songs">
            <div className="profile-songs">
              <h2>Spotlight</h2>
              {artistSongs}
            </div>
            <div className="profile-sidebar">
              <div className="profile-sidebar-content">
                <div className="user-data">
                  <div className="user-follows">
                    <p>Followers</p>
                    <h1>300</h1>
                  </div>
                  <div className="user-follows">
                    <p>Following</p>
                    <h1>20</h1>
                  </div>
                  <div className="user-tracks-total">
                    <p>Tracks</p>
                    <h1>1</h1>
                  </div>
                </div>
                <div className="user-bio">
                  Welcome to the Artist profile page, Here you will find all the
                  artist current songs, Enjoy the noise !
                </div>
                <div className="fans-also-like">
                  <div className="fal-header">
                    <div className="fal-header-left">
                      <div></div>
                      <p>Fans also like</p>
                    </div>
                    <button className="fal-header-right">Refresh</button>
                  </div>
                  {allUsers}
                </div>
                <div className="user-page-devlinks">
                  <a href="">GitHub</a>
                  <p>-</p>
                  <a href="">Linkedin</a>
                  <p>-</p>
                  <a href="">AngelList</a>
                  <p>-</p>
                  <a href="">Portfolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
