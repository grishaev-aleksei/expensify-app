import React from 'react';
import ReactDOM from 'react-dom';
import {AppRouter} from "./routers/AppRouter";
import './styles/styles.css';
import * as serviceWorker from './serviceWorker';

import {Redux} from "./playground/redux";
import {ReduxExpensify} from "./playground/redux-expensify";

ReactDOM.render(<ReduxExpensify/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
