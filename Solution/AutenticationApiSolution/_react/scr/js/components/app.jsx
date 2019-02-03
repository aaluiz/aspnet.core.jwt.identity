import React from 'react';
import AuthService from '../services/AuthService.js';
import {withAuth} from '../services/withAuth.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Auth: new AuthService('http://localhost:64042/'),
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.state.Auth.logout();
        this.props.history.replace('/login');
     }

    render() {
        return (
            <div className="App">
            <div className="App-header">
             
            <h2>Welcome {this.props.user.aud}</h2>
            </div>
            <p className="App-intro">
                <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
            </p>
            </div>
        );
    }
}


export default withAuth(App);