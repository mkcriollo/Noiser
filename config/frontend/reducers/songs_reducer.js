import {
  RECEIVE_SONGS,
  RECEIVE_SONG,
  DELETE_SONG,
} from "../actions/song_actions";

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      return Object.assign({}, state, { [action.song.id]: action.song });
    case DELETE_SONG:
      let newState = Object.assign({}, state);
      delete newState[action.songId];
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
