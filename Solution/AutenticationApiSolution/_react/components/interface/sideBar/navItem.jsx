import React from 'react';
import { Link } from 'react-router-dom';

class NavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <li class="nav-item">
                <Link to={this.props.link}>
                    <div class="nav-link" href="charts.html">
                        <i class={this.props.icon}></i>
                        <span>{this.props.name}</span>
                    </div>
                </Link>
            </li>
        );
    }
}

export default NavItem;