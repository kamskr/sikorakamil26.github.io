import { CHANGE_SONG, PLAY, PAUSE, CHANGE_REPEAT } from '../actions/songsActions';
import { songs } from '../../tempData/songs';

const songList = Object.values(songs).map((s) => s.id);

const initialState = {
  byId: songs,
  allIds: songList,
  activeSongIndex: 0,
  isPlaying: true,
  repeat: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SONG:
      return {
        ...state,
        activeSongIndex: action.payload.songIndex,
      };
    case PLAY:
      return {
        ...state,
        isPlaying: true,
      };
    case PAUSE:
      return {
        ...state,
        isPlaying: false,
      };

    case CHANGE_REPEAT:
      return {
        ...state,
        repeat: !state.repeat,
      };

    default:
      return state;
  }
};
