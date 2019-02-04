import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**Carregar no DOM */
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));