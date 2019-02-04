import React from 'react';

class Brande extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-address-card"></i>
                </div>
                <div className="sidebar-brand-text mx-2">{this.props.brande} </div>
            </a>
        );
    }
}

export default Brande;