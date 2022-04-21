const myloggerMiddleware = function(store){
    return function(next){
        return function (action) {
            console.log("MyLogger:: state:", store.getState(), ", next:", next, ", action:", action);
            next(action);
        }
    }
}

export default myloggerMiddleware;