import React, { Component } from 'react';
class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <section className="background-login">
                <header className="masthead d-flex">
                    <div className="container text-center my-auto">
                        <div id="box" class="card card-container">
                            <p id="profile-name" class="profile-name-card"></p>
                            <h6 className="card-title text-info">Sitema de Gerenciaamento de APIs REST</h6>
                            <form>
                                <br />
                                <div class="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="Username"
                                        name="username"
                                        type="text"
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <input
                                        className="form-control"
                                        placeholder="Password "
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <input
                                        className="form-submit"
                                        value="Logar"
                                        type="submit"
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