import React, { Component } from 'react';   
import ContentPage from '../pageContent/pageContainer.jsx';
import PageHeading from '../pageContent/pageHeading.jsx';
import ApiCaller from '../../services/ServiceApiIntegrator.js'
var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class funcoes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleDel = this.handleDel.bind(this);
    }

    handleDel(){
        alert('deleted');
    }
    render() {
        var products = [{
            id: 1,
            name: "Product1",
            price: 120,

        }, {
            id: 2,
            name: "Product2",
            price: 80,

        }];

        return (
            <ContentPage>
                <PageHeading title="Deletar Função" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-lg-5">
                                <BootstrapTable data={products} striped hover deleteRow={true}  selectRow={{mode:'radio'}} options={{onDeleteRow:this.handleDel}}>
                                    <TableHeaderColumn isKey dataField='id' width='40'>Product ID</TableHeaderColumn>
                                    <TableHeaderColumn dataField='name' width='120'>Product Name</TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                        </div>
                    </div>
            </ContentPage>
        );
    }
}

export default funcoes;