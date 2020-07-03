import { createStore, combineReducers, compose } from 'redux';

import songsReducer from './reducers/songsReducer';

const initialState = {};

const reducers = combineReducers({
  songs: songsReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

export default store;
