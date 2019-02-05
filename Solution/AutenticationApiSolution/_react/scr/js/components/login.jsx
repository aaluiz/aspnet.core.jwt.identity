import React, { Component } from 'react';
import  AuthService  from "../services/AuthService.js"

class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            auth: new AuthService()
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.state.auth.login(this.state.username, this.state.password)
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }

    componentWillMount() {
        if (this.state.auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {
        return (
            <section className="background-login ">
                <header className="masthead d-flex">
                    <div className="container text-center my-auto">
                        <div id="box" class="card card-container">
                            <p id="profile-name" class="profile-name-card"></p>
                            <h4 className="card-title text-info">Gerenciamento de APIs </h4>
                            <form>
                                <br />
                                <div class="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="Usuário"
                                        name="username"
                                        type="text"
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <input
                                        className="form-control"
                                        placeholder="Senha "
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <input
                                        className="btn btn-lg btn-primary btn-block btn-signin"
                                        value="Logar"
                                        type="button" onClick={this.handleFormSubmit}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </header>
            </section>
        );
    }

    handleChange(e) {
        this.setState(
            {
               [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;