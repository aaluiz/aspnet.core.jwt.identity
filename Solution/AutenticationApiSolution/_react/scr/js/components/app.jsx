import React from 'react';
import AuthService from '../services/AuthService.js';
import { withAuth } from '../services/withAuth.js';
import Wrapper from '../components/wrapper.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Auth: new AuthService(),
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.state.Auth.logout();
        this.props.history.replace('/login');
    }

    render() {
        return (
            <Wrapper username={this.props.user.aud}>

            </Wrapper>
        );
    }
}


export default withAuth(App);