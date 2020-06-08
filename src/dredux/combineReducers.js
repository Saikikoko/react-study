export default function combineReducers(reducers) {
    return function(state = {}, action) {
        let nextState = {};
        let hasChanged = false;

        for (const key in reducers) {
            const reducer = reducers[key];
            nextState[key] = reducer(state[key], action)
            hasChanged = nextState[key] !== state[key]
        }

        hasChanged = hasChanged || Object.keys(reducers).length !== Object.keys(state).length

        return hasChanged ? nextState : state
    }
}