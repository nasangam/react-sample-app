import {REDUX_CONSTANTS} from '../constants';
//export const randomActionCreator = (dispatch)=>dispatch({type:"RANDOM"})
export const randomActionCreator = function(dispatch, getState, apiCtx){
    dispatch({type:"RANDOM"});
    setTimeout(()=>{
        dispatch({type:"RANDOM"});
    }, 3000);
    console.log("apiCtx: ", apiCtx);
};