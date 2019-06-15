import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
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

const NotFoundPage = () => (
    <div>404!</div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path={'/'} component={Index} exact={true}/>
            <Route path={'/create'} component={AddExpensePage}/>
            <Route path={'/edit'} component={EditExpensePage}/>
            <Route path={'/help'} component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
