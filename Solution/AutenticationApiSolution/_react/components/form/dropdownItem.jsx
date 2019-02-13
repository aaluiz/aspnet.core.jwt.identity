import React from 'react';
class DropdownItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Link to={this.props.link}>
                <div className="dropdown-item">
                    <i className={this.props.classIcon}></i>
                    {this.props.name}
                </div>
            </Link>
        );
    }
}

export default DropdownItem;