import createStore from "./createStore"

function applyMiddleware(...middlewares) {
    return createStore => reducer => {
        const store = createStore(reducer)
        let dispatch = store.dispatch;
        //todo 加强dispatch
        const midApi = {
            getState: store.getState,
            dispatch: (action, ...args) => dispatch(action, ...args),
        }

        const middlewaresChain = middlewares.map(middleware => middleware(midApi))
        console.log(middlewaresChain);
        console.dir(compose(...middlewaresChain)(dispatch));
        
        dispatch = compose(...middlewaresChain)(dispatch)
        console.log(dispatch);
        

        return {
            ...store,
            dispatch
        }
    }
}

export default applyMiddleware

function compose(...funs) {
    // console.log(funs);
    if(funs.length === 0) {
        return args => args
    }

    if(funs.length === 1) {
        return funs[0];
    }
    
    return funs.reduce((a,b) => (...args) => a(b(...args)))
}