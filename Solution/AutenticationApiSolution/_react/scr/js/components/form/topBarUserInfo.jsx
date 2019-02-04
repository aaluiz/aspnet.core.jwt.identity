import React from 'react';
class TopBarUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          
            <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"></img>
              </a>
   
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    {this.props.children}
              </div>
            </li>
        );
    }
}

export default TopBarUserInfo;