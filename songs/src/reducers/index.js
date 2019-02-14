import { combineReducers } from 'redux';



const songsReducer = () => {
  return [
    { title: 'Reflection', duration: '3:38' },
    { title: 'I See the Light', duration: '3:44' },
    { title: 'City of Stars', duration: '2:30' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});