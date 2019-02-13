import React, { Component } from 'react';
class pageHeading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{this.props.title}</h1>
            </div>
        );
    }
}

export default pageHeading;