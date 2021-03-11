import { connect } from "react-redux";
import PlayButton from "./playbutton.jsx";
import { receiveCurrentSong, playSong, pauseSong, receivePrevSong } from '../../actions/music_player_actions';

const mSTP = (state,ownProps) => {
    debugger
    return {
        playing: state.ui.musicPlayer.playing,
        currentSong: state.entities.songs[state.ui.musicPlayer.currentSongId]
    }
}

const mDTP = dispatch => {
    debugger
    return {
        receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
        playSong: () => dispatch(playSong()),
        pauseSong: () => dispatch(pauseSong()),
        receivePreviousSong: songId => dispatch(receivePrevSong(songId)),
    }
}

export default connect(mSTP,mDTP)(PlayButton);