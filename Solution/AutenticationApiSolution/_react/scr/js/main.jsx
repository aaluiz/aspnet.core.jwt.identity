import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
let application = (<App />);

/**Carregar no DOM */
ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} />
        </div>
    </Router>
    , document.getElementById('root'));