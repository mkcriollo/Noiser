export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const RECEIVE_PREVIOUS_SONG = "RECEIVE_PREVIOUS_SONG";
export const RECEIVE_NEXT_SONG = "RECEIVE_NEXT_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const RECEIVE_QUEUE = "RECEIVE_QUEUE";

export const receiveCurrentSong = songId => {
    return {
        type: RECEIVE_CURRENT_SONG,
        songId
    };
};
export const receivePrevSong = songId => {
    return {
        type: RECEIVE_PREVIOUS_SONG,
        songId
    };
};
export const receiveNextSong = songId => {
    return {
        type: RECEIVE_NEXT_SONG,
        songId
    };
};
export const playSong = () => {
    return {
        type: PLAY_SONG,
    };
};
export const pauseSong = () => {
    return {
        type: PAUSE_SONG,
    };
};
export const receiveQueue = songs => {
    return {
        type: RECEIVE_QUEUE,
        songs
    };
};

