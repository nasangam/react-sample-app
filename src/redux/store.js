import {createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import myloggerMiddleware from './middleware/myLogger';
export const initialState = {counter: 0 , random: 0};
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(myloggerMiddleware, logger)));
export default store;