import React, { Component } from 'react';
import ContentPage from '../pageContent/pageContainer.jsx'
import PageHeading from '../pageContent/pageHeading.jsx';
import SelectRole from '../interface/selectRole.jsx';
class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : "",
            visible : "invisible",
            data: {
                userID: "",
                Password: "",
                email: "",
                role: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.criarNovaConta = this.criarNovaConta.bind(this);
    }

    criarNovaConta(){
        if (this.state.password != this.state.rpassword){
            this.setState({
                visible: "visible"
            });
            return null;
        }
        else{

        }
    }

    render() {
        return (
            <div>
                <ContentPage>
                    <PageHeading title="Cadastra Novo Usuário" />
                    <div className="card-body p-0">
                        <div className="row">
                            <div className={"alert alert-danger "+this.state.visible}>
                                <strong>Atenção!</strong> as senhas divergentes, favor digitar novamente!
                            </div>
                            <div className="col-lg-12">
                                <div className="p-lg-5">
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="username" name="username" placeholder="UserName"></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <SelectRole/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="email" name="email" placeholder="Email Address"></input>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user" id="password" name="password" placeholder="Password"></input>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user" id="rpassword" placeholder="Repet Password"></input>
                                            </div>
                                        </div>
                                        <div className="btn btn-primary btn-user btn-block">
                                            Registrar Nova Conta
                                        </div>
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

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default register;