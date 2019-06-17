import React from 'react';
import ReactDOM from 'react-dom';
import {NavNavLink, NavLink, Switch, BrowserRouter, Route} from 'react-router-dom';
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
    <div>
        404! - <NavLink to={'/'}>Go Home</NavLink>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to={'/'} activeClassName={'is-active'} exact={true}>Home</NavLink><br/>
        <NavLink to={'/create'} activeClassName={'is-active'}>Create</NavLink><br/>
        <NavLink to={'/edit'} activeClassName={'is-active'}>Edit</NavLink><br/>
        <NavLink to={'/help'} activeClassName={'is-active'}>Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path={'/'} component={Index} exact={true}/>
                <Route path={'/create'} component={AddExpensePage}/>
                <Route path={'/edit'} component={EditExpensePage}/>
                <Route path={'/help'} component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
