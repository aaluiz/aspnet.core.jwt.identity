import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Content;

