import React from "react";
import {createStore} from "redux";


export const Redux = (props) => {
    const store = createStore((state = {count: 0}, action) => {
        switch (action.type) {
            case 'INCREMENT':
                // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
                return {
                    count: state.count + (action.incrementBy || 1)
                };
            case 'DECREMENT':
                return {
                    count: state.count - (action.decrementBy || 1)
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
    });

    const unsubscribe = store.subscribe(() => {
        console.log(store.getState())
    });


    store.dispatch({
        type: 'INCREMENT',
        incrementBy: 15
    });

    store.dispatch({
        type: 'RESET'
    });
    store.dispatch({
        type: 'DECREMENT',
        decrementBy: 10
    });

    store.dispatch({
        type: 'SET',
        count: 101
    });
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
