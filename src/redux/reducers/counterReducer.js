const initialState = {counter: 0 , random: 0};
const counterReducer = (state=initialState.counter, action)=>{
    switch(action.type){
        case 'INCR':
        return state+1;
        default:
        return state;
    }
}
export default counterReducer;