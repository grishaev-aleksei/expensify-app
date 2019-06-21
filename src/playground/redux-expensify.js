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

    const editExpense = ({id, description, note, amount, createdAt} = {}) => ({
        type: 'EDIT_EXPENSE',
        expense: {id, description, note, amount, createdAt}
    });


    const expensesReducerDefaultState = [];
    const expensesReducer = (state = expensesReducerDefaultState, action) => {
        switch (action.type) {
            case 'ADD_EXPENSE':
                return [...state, action.expense];
            case 'REMOVE_EXPENSE':
                return state.filter(({id}) => id !== action.id);
            case'EDIT_EXPENSE':
                const [expense] = state.filter(({id}) => id === action.expense.id);
                const newExpense = {
                    ...expense,
                    description: action.expense.description || expense.description,
                    note: action.expense.note || expense.note,
                    amount: action.expense.amount || expense.amount,
                    createdAt: action.expense.createdAt || expense.createdAt
                };
                const filteredArray = state.filter(({id}) => id !== action.expense.id);
                return [...filteredArray, newExpense];
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

    store.dispatch(editExpense({id: expense2.expense.id, description: 'coca-cola', amount: 7}));


    return (
        <div>It's me</div>
    )
};