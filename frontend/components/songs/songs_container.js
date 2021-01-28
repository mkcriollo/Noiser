import { createNewSong, deleteCurrentSong, receiveAllSongs, receiveCurrentSong, editCurrentSong} from "../../actions/song_actions";
import { connect } from "react-redux";
import Songs from "./songs"
import { receiveOneSong } from "../../actions/music_player";

export const mSTP = (state,ownProps) => {
    // const song = state.entities.songs[ownProps.match.params.songId];
    // let artist = state.entities.users[song.artist_id];

    return {
        currentUser: state.entities.users[state.session.id],
        song: state.entities.songs[ownProps.match.params.songId]
        // artist: artist
    }
}

export const mDTP = dispatch => {
    return {
        createSong: song => dispatch(createNewSong(song)),
        deleteSong: songId => dispatch(deleteCurrentSong(songId)),
        getSong: songId => dispatch(receiveCurrentSong(songId)),
        getAllSongs: () => dispatch(receiveAllSongs(songs)),
        receiveOneSong: songId => dispatch(receiveOneSong(songId))
    }
}

export default connect(mSTP,mDTP)(Songs)