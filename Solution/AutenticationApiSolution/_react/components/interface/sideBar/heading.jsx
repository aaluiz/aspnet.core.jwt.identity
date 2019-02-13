import  React from 'react';

class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="sidebar-heading">
                {this.props.HeadingName}
            </div>
        );
    }
}

export default Heading;