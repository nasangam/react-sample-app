const myloggerMiddleware = function(store){
    return function(nextAction){
        return function (action) {
            console.log("MyLogger:: state:", store.getState(), ", nextAction:", nextAction, ", action:", action);
            nextAction(action);
        }
    }
}

export default myloggerMiddleware;