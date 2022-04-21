import {createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import myloggerMiddleware from './middleware/myLogger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

export const initialState = {counter: 0 , random: 0};
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const apiCtx = {
    baseUrl: "https://jsonplaceholder.typicode.com",
    posts: "/posts",
    users: "/users"
}
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(myloggerMiddleware, logger, promiseMiddleware, thunkMiddleware.withExtraArgument(apiCtx))));
export default store;