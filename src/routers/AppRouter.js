import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {HelpPage} from "../components/help";
import {AddExpensePage} from "../components/create";
import {EditExpensePage} from "../components/edit";
import {NotFoundPage} from "../components/not-found";
import {Header} from "../components/header";
import {Home} from "../components/home";


export const AppRouter = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path={'/'} component={Home} exact={true}/>
                <Route path={'/create'} component={AddExpensePage}/>
                <Route path={'/edit/:id'} component={EditExpensePage}/>
                <Route path={'/help'} component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

