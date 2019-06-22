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

    const sortByDate = () => ({
        type: 'SORT_BY_DATE',
    });

    const sortByAmount = () => ({
        type: 'SORT_BY_AMOUNT',
    });

    const setStartDate = (startDate) => ({
        type: 'SET_START_DATE',
        startDate
    });

    const setEndDate = (endDate) => ({
        type: 'SET_END_DATE',
        endDate
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
            case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy: 'date'
                };
            case 'SORT_BY_AMOUNT':
                return {
                    ...state,
                    sortBy: 'amount'
                };
            case 'SET_START_DATE':
                return {
                    ...state,
                    startDate: action.startDate
                };
            case 'SET_END_DATE':
                return {
                    ...state,
                    endDate: action.endDate
                };
            default:
                return state
        }
    };
    //get visible expenses
    const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

        return expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
            const textMatch = typeof text !== "string" || expense.description.toLowerCase().includes(text.toLowerCase());
            return startDateMatch && endDateMatch && textMatch
        })
    };


    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }));

    store.subscribe(() => {
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
        console.log(visibleExpenses);
    });

    const expense1 = store.dispatch(addExpense({description: 'rent', amount: 1, createdAt: 1000}));
    const expense2 = store.dispatch(addExpense({description: 'coffee', amount: 3, note: 'this one', createdAt: -1000}));
    const expense3 = store.dispatch(addExpense({description: 'tea', amount: 2, createdAt: 12512512321}));
    //
    // store.dispatch(removeExpense({id: expense1.expense.id}));
    //
    // console.log({...expense2, me: 'David'});
    //
    // store.dispatch(editExpense(expense2.expense.id, {description: 'coca-cola', amount: 7}));
    //
    store.dispatch(setTextFilter('rent'));
    // store.dispatch(setTextFilter());
    //
    // store.dispatch(sortByAmount());
    // store.dispatch(sortByDate());

    // store.dispatch(setStartDate(123));
    // store.dispatch(setStartDate());
    // store.dispatch(setEndDate(12123));


    return (
        <div>It's me</div>
    )
};