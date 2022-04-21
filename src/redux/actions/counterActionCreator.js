import {REDUX_CONSTANTS} from '../constants';
//export const counterActionCreator = (dispatch)=>dispatch({type: REDUX_CONSTANTS.ACTION_TYPES.INCR});

export const counterActionCreator = function(dispatch, getState, apiCtx){
    dispatch({type:"INCR"});
    setTimeout(()=>{
        dispatch({type:"INCR"});
    }, 3000);
    console.log("apiCtx: ", apiCtx);
    const promise = fetch(apiCtx.baseUrl+apiCtx.posts).then(res=>res.json());
    // const promise = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve([{id:1}, {id:2}]);
    //     },1000);
    // })
    dispatch({
        type: "GET_POSTS",
        payload: promise
    });
    
    /**
     *  if(action.payload is promise){ action.payload.then(res => dispach({type:"GET_POSTS_SUCCESS", payload: res})}
     */

    // .then(res=>{
    //     dispatch({type:"GET_POSTS", payload: res});
    // })
};