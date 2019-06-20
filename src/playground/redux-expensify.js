import {createStore, combineReducers} from "redux";

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