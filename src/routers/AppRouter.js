import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {HelpPage} from "../components/help";
import AddExpensePage from "../components/AddExpensePage";
import {EditExpensePage} from "../components/EditExpensePage";
import {NotFoundPage} from "../components/not-found";
import {Header} from "../components/header";
import {Home} from "../components/home";
import {ExpenseDashboardPage} from "../components/ExpenseDashboardPage";


export const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path={'/'} component={ExpenseDashboardPage} exact={true}/>
                <Route path={'/create'} component={AddExpensePage}/>
                <Route path={'/edit/:id'} component={EditExpensePage}/>
                <Route path={'/help'} component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

