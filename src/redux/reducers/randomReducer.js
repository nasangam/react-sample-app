const initialState = {counter: 0 , random: 0};
const randomReducer = (state=initialState.random, action)=>{
    switch(action.type){
        case 'RANDOM':
        return Math.random()
        default:
        return state;
    }
}
export default randomReducer;