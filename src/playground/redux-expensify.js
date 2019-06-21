import {createStore, combineReducers} from "redux";
import React from "react";
import uuid from 'uuid';


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

    const addExpense = (
        {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    });

    const removeExpense = ({id} = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
    });

    const editExpense = (id, updates) => ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    });


    const expensesReducerDefaultState = [];
    const expensesReducer = (state = expensesReducerDefaultState, action) => {
        switch (action.type) {
            case 'ADD_EXPENSE':
                return [...state, action.expense];
            case 'REMOVE_EXPENSE':
                return state.filter(({id}) => id !== action.id);
            case'EDIT_EXPENSE':
                return state.map((expense) => {
                    if (expense.id === action.id) {
                        return {
                            ...expense,
                            ...action.updates
                        }
                    } else {
                        return expense
                    }
                });
            default:
                return state
        }

    };

    const setTextFilter = (text = '') => ({
        type: 'SET_TEXT_FILTER',
        text
    });

    const filtersReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const filtersReducer = (state = filtersReducerDefaultState, action) => {
        switch (action.type) {
            case 'SET_TEXT_FILTER':
                return {
                    ...state,
                    text: action.text
                };
            default:
                return state
        }
    };


    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }));

    store.subscribe(() => {
        console.log(store.getState());
    });

    const expense1 = store.dispatch(addExpense({description: 'rent', amount: 1}));
    const expense2 = store.dispatch(addExpense({description: 'coffee', amount: 3, note: 'this one'}));
    const expense3 = store.dispatch(addExpense({description: 'tea', amount: 2}));

    store.dispatch(removeExpense({id: expense1.expense.id}));

    console.log({...expense2, me: 'David'});

    store.dispatch(editExpense(expense2.expense.id, {description: 'coca-cola', amount: 7}));

    store.dispatch(setTextFilter('rent'));
    store.dispatch(setTextFilter());


    return (
        <div>It's me</div>
    )
};