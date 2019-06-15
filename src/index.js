import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/styles.css';
import * as serviceWorker from './serviceWorker';

const Index = () => (
    <p>This is my Boilerplate</p>
);

const AddExpensePage = () => (
    <p>This is my AddExpensePage component</p>
);

const EditExpensePage = () => (
    <p>This is my EditExpensePage component</p>
);
const HelpPage = () => (
    <p>This is Help Page</p>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path={'/'} component={Index} exact={true}/>
            <Route path={'/create'} component={AddExpensePage}/>
            <Route path={'/edit'} component={EditExpensePage}/>
            <Route path={'/help'} component={HelpPage}/>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
