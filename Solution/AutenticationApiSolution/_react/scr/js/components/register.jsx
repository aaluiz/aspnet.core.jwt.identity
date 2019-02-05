import React from 'react';
import AuthService from '../services/AuthService.js';
import { withAuth } from '../services/withAuth.js';
import Wrapper from '../components/wrapper.jsx';


class Register extends React.Component {
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
            <Wrapper withSearch={true} username={this.props.user.aud}>
                
                
            </Wrapper>
        );
    }
}

export default withAuth(Register);