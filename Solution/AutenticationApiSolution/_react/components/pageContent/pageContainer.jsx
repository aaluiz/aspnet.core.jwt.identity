import React, { Component } from 'react';

class pageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid">
                {this.props.children}
            </div>
        );
    }
}

export default pageContainer;