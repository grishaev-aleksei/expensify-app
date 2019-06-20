import {createStore, combineReducers} from "redux";
import React from "react";


export const ReduxExpensify = () => {

    const demoState = {
        expenses: [{
            id: 'aa faewfae fawe fawe ',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 545,
            createdAt: 0
        }],
        filters: {
            text: 'rent',
            sortBy: 'amount', //date or amount
            startDate: undefined,
            endDate: undefined
        }
    };


    const expensesReducerDefaultState = [];
    const expensesReducer = (state = expensesReducerDefaultState, action) => {
        switch (action.type) {

            default:
                return state
        }

    };
    const filtersReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const filtersReducer = (state = filtersReducerDefaultState, action) => {
        switch (action.type) {
            default:
                return state
        }
    }


    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }));

    console.log(store.getState());

    return (
        <div>It's me</div>
    )
};