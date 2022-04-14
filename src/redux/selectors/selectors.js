import {createSelector} from 'reselect';

export const selectCounter = (state) => state.counter;

export const selectRandom = (state) => Math.ceil(state.random*10);

//export const activeUserSelector = (state) => state.users.map(user => user.active);

export const memoizedSelectCounter = createSelector([selectCounter], (counter)=>{
    return counter;
})
export const memoizedSelectRandom = createSelector([selectRandom], (random)=>{
    return random;
})

 