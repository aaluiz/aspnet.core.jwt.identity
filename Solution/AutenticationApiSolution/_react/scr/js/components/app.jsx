import React from 'react';
import AuthService from '../components/withAuth.jsx';
import withAuth from '../services/authService.jsx';
const Auth = new AuthService();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cpf: ""
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        Auth.logout()
        this.props.history.replace('/login');
     }

    render() {
        return (
            <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome {this.props.user.username}</h2>
            </div>
            <p className="App-intro">
                <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
            </p>
            </div>
        );
    }
}


export default withAuth(App);