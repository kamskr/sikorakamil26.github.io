import { CHANGE_SONG, PLAY, PAUSE, CHANGE_REPEAT } from '../actions/songsActions';

export const changeSong = (songIndex) => ({ type: CHANGE_SONG, payload: { songIndex } });
export const play = () => ({ type: PLAY });
export const pause = () => ({ type: PAUSE });
export const changeRepeat = () => ({ type: CHANGE_REPEAT });
