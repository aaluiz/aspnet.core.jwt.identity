import React, { Component } from 'react';
import ContentPage from '../pageContent/pageContainer.jsx'
import PageHeading from '../pageContent/pageHeading.jsx';
import ApiCaller from '../../services/ServiceApiIntegrator.js'

class registerRole extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            roleName: "",
            apiCaller: new ApiCaller() ,
            data: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.clickRegister = this.clickRegister.bind(this);
    }

    clickRegister(e){
       this.setState({data: this.state.apiCaller.post("api/identity/create/role/"+this.state.roleName)});
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
                                                <input type="text" className="form-control form-control-user" id="roleName" name="roleName" placeholder="RoleName" onChange={this.handleChange}></input>
                                            </div>
                                        </div>
                                        <div className="btn btn-primary btn-user btn-block" onClick={this.clickRegister}>
                                            Registrar Nova Função (Role)
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

export default registerRole;