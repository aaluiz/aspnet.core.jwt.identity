import React from 'react';

class CollapseMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className={this.props.icon}></i>
                    <span>{this.props.name}</span>
                </a>

                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">{this.props.subtitle}</h6>
                        {this.props.children}
                    </div>
                </div>

            </li>
        );
    }
}

export default CollapseMenu;