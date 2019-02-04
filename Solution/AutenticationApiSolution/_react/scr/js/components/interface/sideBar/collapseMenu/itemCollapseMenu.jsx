import React from 'react';
import { Link } from 'react-router-dom';

class ItemCollapseMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Link to={this.props.link}>
                <div className="collapse-item">{this.props.name} </div>
            </Link>
        );
    }
}

export default ItemCollapseMenu;