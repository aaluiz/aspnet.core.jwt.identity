import React, { Component } from 'react';
class TopNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ul className="navbar-nav ml-auto">
                {this.props.children}
            </ul>
        );
    }
}

export default TopNavBar;