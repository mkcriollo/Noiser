import {
  RECEIVE_CURRENT_SONG,
  RECEIVE_QUEUE,
  RECEIVE_NEXT_SONG,
  RECEIVE_PREVIOUS_SONG,
  PAUSE_SONG,
  PLAY_SONG,
} from "../actions/music_player_actions";

const defaultStatus = {
  playing: false,
  played: [],
  currentSongId: null,
  queue: [],
};

const musicPlayerReducer = (state = defaultStatus, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      newState.currentSongId = action.songId;
      return newState;
    case RECEIVE_NEXT_SONG:
      newState.queue.unshift(action.songId);
      return newState;
    case RECEIVE_PREVIOUS_SONG:
      if (!newState.played.includes(action.songId)) {
        newState.played.push(action.songId);
      }

      return newState;
    case PLAY_SONG:
      newState.playing = true;
      return newState;
    case PAUSE_SONG:
      newState.playing = false;
      return newState;
    case RECEIVE_QUEUE:
      const allSongs = Object.values(action.songs);

      // for (let i = allSongs.length - 1; i > 0; i--) {
      //     let randomNum = Math.floor(Math.random() * (i + 1));
      //     [allSongs[i], allSongs[randomNum]] = [allSongs[randomNum], allSongs[i]]
      // }
      debugger;

      allSongs.forEach((song) => {
        newState.queue.push(song.id);
      });
      debugger;
      return newState;
    default:
      return state;
  }
};

export default musicPlayerReducer;
