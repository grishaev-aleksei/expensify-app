import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import {AppRouter} from "./routers/AppRouter";
import configureStore from './store/configureStore'
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import {getVisibleExpenses} from "./selectors/expenses";


const store = configureStore();

store.dispatch(addExpense({description: 'water bill'}));
store.dispatch(addExpense({description: 'gas bill'}));

store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

setTimeout(() => {
    store.dispatch(setTextFilter('Amazonia'));

}, 5000);


const Jsx = () => (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(<Jsx/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
