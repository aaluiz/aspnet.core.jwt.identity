import React, { Component } from 'react';


class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="text-center">
                <div className="card">
                    <div class="card-body">
                        <h1>Login</h1>
                        <form>
                            <div class="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Username goes here..."
                                    name="username"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                                <input
                                    className="form-control"
                                    placeholder="Password goes here..."
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                />
                                <input
                                    className="form-submit"
                                    value="SUBMIT"
                                    type="submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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