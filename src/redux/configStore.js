import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, createStore, combineReducers } from 'redux';

import covidStatsReducer from './Covid/covid';

const reducer = combineReducers({
  covidStatsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
