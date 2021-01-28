import { RECEIVE_CURRENT_SONG, PLAY_SONG, PAUSE_SONG} from "../actions/music_player";


const currentState = {
    playing: false,
    played: [],
    currentSongId: null,
}

const MusicPlayerReducer = (state= currentState, action) => {
    Object.freeze(state)

    switch (action.type){
        case RECEIVE_CURRENT_SONG:
            newState = Object.assign({}, state)
            newState.currentSongId = action.songId;
            return newState;
        case PLAY_SONG:
            newState.playing = true;
            return newState;
        case PAUSE_SONG:
            newState.playing = false;
            return newState;
        default:
            return state
    }

}

export default MusicPlayerReducer