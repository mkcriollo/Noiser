export const formatTime = (time) => {
    let seconds = Math.floor(parseFloat(time))
    let minutes = Math.floor(seconds/60);
    seconds -= minutes * 60;

    if(seconds < 10){
        seconds = `0${seconds}`
    } else {
        seconds = `${seconds}`
    }

    return `${minutes}:${seconds}`;
}