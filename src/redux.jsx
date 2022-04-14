import store from './redux/store';
import logger from 'redux-logger';


//store = createStore(reducer, initialState, enhancers/middleware)
//reducer(){}

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