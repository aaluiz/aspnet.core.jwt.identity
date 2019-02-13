import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {this.props.children}
            </ul>  
        );
    }
}

export default SideBar;