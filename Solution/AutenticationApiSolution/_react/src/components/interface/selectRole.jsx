import React, { Component } from 'react';
import ApiCaller from '../../services/ServiceApiIntegrator.js';

class selectRole extends Component {
    constructor(props) {
        super(props);


        this.state = {
            caller: new ApiCaller(),
            dados: []
        };

        this.getDataFromServer = this.getDataFromServer.bind(this);
    }

    componentWillMount(){
        this.setState({
            dados: this.state.api.get('api/identity/funcoes')
        })
    }

    getDataFromServer(){
        let caller = this.state.caller;
        let api = this.state.caller.getApi();

        api.get('api/identity/funcoes')
    }

    render() {
        let data = this.state.dados;
        let list = [];

        data.forEach(item => {
            list.push(item.name)
        });

       let selectCore = list.map((func, index) => {
            return (
                <option key={index} value={func.name}>{func.name}</option>
            );
        });

        return (
            <select className="form-control form-control-user" id="roles" name="roles">
                {selectCore}
            </select>
        );
    }
}

export default selectRole;