import { createStore } from 'redux';

// destructure arguements if object
const add = ({a, b}, c) => {
    return a + b + c;
};
console.log(add({a: 1, b: 2}, 100)); // should return 103.


// Action Generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy // b/c object propty is the same as the arguement
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET', 
})

//

// Reducers
// 1. Reducers are pure functions
// 2. Reducers never change state or action.

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }

}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// older way
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// newer/cleaner way
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch({ type: 'RESET' });

store.dispatch(setCount ({ count: 15 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());