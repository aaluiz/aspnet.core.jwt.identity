import React, { Component } from 'react';
import ContentPage from '../pageContent/pageContainer.jsx'
import PageHeading from '../pageContent/pageHeading.jsx';
class registerRole extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div>
                <ContentPage>
                    <PageHeading title="Cadastra Nova Função" />
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="p-lg-5">
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="RoleName"></input>
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

export default registerRole;