import React from 'react';


class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {this.props.children}
            </nav>
        );
    }
}

export default TopBar;