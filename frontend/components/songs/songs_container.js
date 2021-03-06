import { createNewSong, deleteCurrentSong, receiveAllSongs, receiveCurrentSong, editCurrentSong} from "../../actions/song_actions";
import { connect } from "react-redux";
import Songs from "./songs"
import { fetchSongComments, createComment, deleteComment, fetchUserComments } from '../../actions/comment_actions';
import { fetchUsers } from "../../actions/user_actions";


export const mSTP = (state,ownProps) => {
    const song = state.entities.songs[ownProps.match.params.songId];
    let artist = state.entities.users[song.artist_id];
    // const userComments = Object.values(state.entities.comments)
    // .filter(comment => comment.author_id === parseInt(ownProps.match.params.userId)).reverse();

    return {
        // userComments: userComments,
        childComments: Object.values(state.entities.comments),
        users: Object.values(state.entities.users),
        user: state.entities.users[ownProps.match.params.userId],
        comments: Object.values(state.entities.comments),
        songs: Object.values(state.entities.songs),
        artist: artist,
        currentUser: state.entities.users[state.session.id],
        song: song
    }
}

export const mDTP = dispatch => {
    debugger
    return {
        fetchUserComments: userId => dispatch(fetchUserComments(userId)),
        createSong: song => dispatch(createNewSong(song)),
        deleteSong: songId => dispatch(deleteCurrentSong(songId)),
        getSong: songId => dispatch(receiveCurrentSong(songId)),
        getAllSongs: () => dispatch(receiveAllSongs()),
        receiveOneSong: songId => dispatch(receiveOneSong(songId)),
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        fetchSongComments: songId => dispatch(fetchSongComments(songId)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP,mDTP)(Songs)