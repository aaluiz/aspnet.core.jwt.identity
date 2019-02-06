import React, { Component } from 'react';
import ContentPage from './pageContent/pageContainer.jsx'
import PageHeading from './pageContent/pageHeading.jsx';
class register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <ContentPage>
                    <PageHeading title="Cadastra Novo Usuário" />
                    <div className="card-body p-0">
                        <div className="row">
                            
                            <div className="col-lg-12">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Criar uma Conta</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name"></input>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name"></input>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address"></input>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"></input>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password"></input>
                                            </div>
                                        </div>
                                        <a href="login.html" className="btn btn-primary btn-user btn-block">
                                            Registrar Nova Conta
                                    </a>
                                        <hr />

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </ContentPage>
            </div>
        );
    }
}

export default register;