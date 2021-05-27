import * as SongUtil from "../util/song_util";

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const DELETE_SONG = "DELETE_SONG";

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs,
});
const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song,
});
const deleteSong = (songs) => ({
  type: RECEIVE_SONGS,
  songs,
});

// thunks action creator

export const createNewSong = (formSong) => (dispatch) =>
  SongUtil.createSong(formSong).then((song) => dispatch(receiveSong(song)));

// will see how to handle the error for this ^

export const deleteCurrentSong = (songId) => (dispatch) => {
  return SongUtil.deleteSong(songId).then(() => dispatch(deleteSong(songId)));
};

export const editCurrentSong = (songId) => (dispatch) =>
  SongUtil.editSong(songId).then((song) => dispatch(receiveSong(song)));

export const receiveCurrentSong = (songId) => (dispatch) =>
  SongUtil.getSong(songId).then((song) => dispatch(receiveSong(song)));

export const receiveAllSongs = () => (dispatch) => {
  return SongUtil.getSongs()
    .then((songs) => dispatch(receiveSongs(songs)))
    .then((res) =>
      window.localStorage.setItem("songs", JSON.stringify(res.songs))
    );
};

export const receiveArtistSongs = (userId) => (dispatch) => {
  return SongUtil.getArtistSongs(userId).then((songs) =>
    dispatch(receiveSongs(songs))
  );
};
