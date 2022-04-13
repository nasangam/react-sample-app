import {combineReducers, createStore } from 'redux';


//store = createStore(reducer, initialState, enhancers/middleware)
//reducer(){}
const initialState = {counter: 0 , random: 0}
const counterReducer = (state=initialState.counter, action)=>{
    switch(action.type){
        case 'INCR':
        return state+1;
        default:
        return state;
    }
}
const randomReducer = (state=initialState.random, action)=>{
    switch(action.type){
        case 'RANDOM':
        return Math.random()
        default:
        return state;
    }
}

const combinedReducers = combineReducers({counter:counterReducer,random: randomReducer})
export const store = createStore(combinedReducers, initialState);

store.subscribe(()=> console.log("from subscriber", store.getState()))
// store.dispatch({ type: "INCR" });
// store.dispatch({ type: "INCR" });
// setTimeout(()=>{
//     //store.dispatch({ type: "RANDOM" });
//     store.dispatch({ type: "INCR" });
// },5000);
 

export const incriment =  () =>{
    store.dispatch({ type: "INCR" });
}