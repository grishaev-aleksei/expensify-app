import React from "react";
import {createStore} from "redux";


export const Redux = (props) => {

    const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
    });

    const decrementCount = ({decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
    });

    const setCount = ({count}) => ({
        type: 'SET',
        count
    });

    const resetCount = () => ({
        type: 'RESET'
    });


    //Reducers

    const countReducer = (state = {count: 0}, action) => {
        switch (action.type) {
            case 'INCREMENT':
                // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
                return {
                    count: state.count + action.incrementBy
                };
            case 'DECREMENT':
                return {
                    count: state.count - action.decrementBy
                };
            case 'RESET':
                return {
                    count: 0
                };
            case 'SET':
                return {
                    count: action.count
                };
            default:
                return state
        }
    };

    const store = createStore(countReducer);

    const unsubscribe = store.subscribe(() => {
        console.log(store.getState())
    });


    // store.dispatch({
    //     type: 'INCREMENT',
    //     incrementBy: 15
    // });
    store.dispatch(incrementCount({incrementBy: 15}));
    store.dispatch(incrementCount());

    store.dispatch(resetCount());
    store.dispatch(decrementCount({decrementBy: 22}));

    store.dispatch(setCount({count: 55}));
    unsubscribe();

    return (
        <div>
            this is div
            {
                props.name
            }
        </div>
    )
};
