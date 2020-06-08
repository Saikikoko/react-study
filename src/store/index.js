// import { createStore } from "redux";
import { createStore, applyMiddleware, combineReducers } from "../dredux/";
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import { createStore, applyMiddleware, combineReducers } from "redux";

export const CounterReducer = (state = 0, {type, payload = 1}) => {
    switch (type) {
        case 'ADD':
            return state + payload
        case 'MINUS':
            return state - payload
        default:
            return state
    }
}

const store = createStore(combineReducers({
    user: CounterReducer
}), applyMiddleware(thunk, logger))
// const store = createStore(CounterReducer)

export default store


function logger({getState, dispatch}) {
    return next => action => {
        console.log("-------------------");
        const prevState = store.getState();
        console.log('prev State', prevState);
        next(action)
        console.log('action type', action.type);
        
        const nextState = store.getState();
        console.log('next State', nextState);
        
        console.log("-------------------");
    }
    
}

// (action => {

// }) => action => {

// }
function thunk({dispatch, getState}) {
    return next => action => {
        console.log('enter thunk');
        
        if(typeof action === 'function') {
            return action(dispatch, getState)
        }
        return next(action)
    }
}