import { connect } from "react-redux";
import Musicplayer from "./music_player";
import { pauseSong, playSong } from "../../actions/music_player";

const mSTP = (state,ownProps) => {
    debugger
    // const currentSong = state.entities.songs[state.ui.musicPlayer.currentSongId] ? state.entities.songs[state.ui.musicPlayer.currentSongId] : null;
    return {
        songs: state.entities.songs,
        // currentSong: currentSong,
        // playing: state.ui.musicPlayer.playing,
    }
}

const mDTP = dispatch => {
    return {
        receiveOneSong: songId => dispatch(receiveOneSong(songId)),
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong())
    }
}


export default connect(mSTP,mDTP)(Musicplayer)