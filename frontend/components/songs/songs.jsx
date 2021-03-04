import React from 'react';
import { Link } from 'react-router-dom';
import Musicplayer from "../musicplayer/music_player_container";
import Navbar from "../navbar/navbar_container";


class Songs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: ""
         }
        debugger

        // this.update = this.update.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getSong(this.props.match.params.songId);
        this.props.fetchSongComments(this.props.match.params.songId);
        this.props.fetchUsers();
        this.props.getAllSongs();
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleCommentSubmit(e){
        e.preventDefault();
        debugger
        const comment = {
            author_id: this.props.currentUser.id,
            song_id: this.props.song.id,
            body: this.state.comment
        };
        debugger

        this.setState({comment: ""})
        debugger
        this.props.createComment(comment);
    }

    render() { 
        debugger
        if(!this.props.song) {
            return null;
        }

        if(!this.props.artist){
            return null;
        }

        if(!this.props.comments){
            return null;
        }

        if(!this.props.songs){
            return null;
        }
  
        let { comments, songs, currentUser, artist } = this.props;

        let currentComments = comments.reverse()

        let allSongComments = currentComments.map((comment, i) => {
            return (
               <div className="song-comment-holder">
                   <Link to={`/users/${currentUser.id}`}>
                        <img src={currentUser.photoUrl} alt="" className="comment-user-pic"/>
                   </Link>
                   <div className="comment-info-body">
                       <Link to={`/users/${currentUser.id}`}>
                            <p>{currentUser.username}</p>
                       </Link>
                       <div className="actual-comment">
                           {comment.body}
                       </div>
                   </div>
                   <div className="time-comment-posted">1 Year Ago</div>
               </div> 
            );
        });

        let otherSongs = [];

        for(let i = 0; i < 3; i++){
            let randSong = songs[Math.floor(Math.random() * songs.length)];
            otherSongs.push(randSong) 
        }

        let allSongs = otherSongs.map((song, i) => {
            return (
                <div className="songs-holder">
                    <Link key={i} to={`/songs/${song.id}`}>
                        <img src={song.photoUrl} alt="" className="other-songs-img"/>
                    </Link>
                    <div className="other-songs-info">
                        {/* <h2 className="other-songs-artist">{song.username}</h2> */}
                        <Link key={i} to={`/songs/${song.id}`}>
                            <h2 className="other-song-name">{song.title}</h2>
                        </Link>
                    </div>
                </div>
            );
        });

        return ( 
            <div className="full-screen-song">
                <Navbar />
                <div className="song-show-center">
                    <div className="main-song-show">
                        <div className="song-show-player">
                            <div className="song-show-title">
                                <button className="song-show-play"></button>
                                <div className="header-show-info">
                                    <p>2 weeks</p>
                                    <Link to={`/users/${artist.id}`}>
                                        <h3>{artist.username}</h3>
                                    </Link>
                                    <h2>{this.props.song.title}</h2>   
                                </div>
                            </div>
                            <div className="waveform-show">
                                {/* <div id="waveform">

                                </div> */}
                            </div>
                        </div>
                        <img className="song-show-pic" src={this.props.song.photoUrl} ></img>
                    </div>
                    <div className="song-show-body">
                            <div className="song-info">
                                <div className="actions-tab-show">
                                    <img src={currentUser.photoUrl} alt="" className="song-currentuser-pic"/>
                                    <form className="comment-holder" onSubmit={this.handleCommentSubmit}>
                                         <input 
                                            type="text" 
                                            className="write-a-comment" 
                                            placeholder="Write a comment"
                                            value={this.state.comment}
                                            onChange={this.update("comment")}    
                                        />
                                    </form>
                                </div>
                                <div className="about-show">
                                    <div className="about-left">
                                        <Link to={`/users/${artist.id}`}>
                                            <img className="image-icon" src={artist.photoUrl}></img>
                                        </Link>
                                        <Link to={`/users/${artist.id}`}>
                                            <h2>{artist.username}</h2>
                                        </Link>
                                        <p></p>
                                        <button>Follow</button>
                                    </div>
                                    <div className="about-right">
                                        <p>{this.props.song.description}</p>
                                        <div className="show-comments">
                                            <p className="total-comments">
                                                <span className="comment-icon"></span>
                                                <span id="comment-icon-words">{comments.length} comments</span>
                                            </p>
                                            {allSongComments}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-song-info">
                                <div className="song-show-banner"></div>
                                <div className="other-songs-container">
                                    <div className="related-tracks">
                                        <h1>Related Tracks</h1>
                                        <p>View all</p>
                                    </div>
                                    {allSongs}
                                </div>
                            </div>
                    </div>
                </div>
                {/* <Musicplayer song={this.props.song.songUrl} photo={this.props.song.photoUrl} title={this.props.song.title}/> */}
            </div>
         );
    }
}
 
export default Songs;