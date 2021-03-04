import { createNewSong, deleteCurrentSong, receiveAllSongs, receiveCurrentSong, editCurrentSong} from "../../actions/song_actions";
import { connect } from "react-redux";
import Songs from "./songs"
import { receiveOneSong } from "../../actions/music_player";
import { fetchSongComments, createComment, deleteComment } from '../../actions/comment_actions';
import { fetchUsers } from "../../actions/user_actions";


export const mSTP = (state,ownProps) => {
    const song = state.entities.songs[ownProps.match.params.songId];
    let artist = state.entities.users[song.artist_id];

    debugger
    return {
        users: Object.values(state.entities.users),
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