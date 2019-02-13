
import React from 'react';
import DOM from 'react-dom';
import App from './components/app.jsx';
import Login from './components/login.jsx';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

DOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" component={Login} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));