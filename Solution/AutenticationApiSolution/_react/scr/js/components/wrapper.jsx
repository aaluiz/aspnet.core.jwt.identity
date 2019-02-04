import React from 'react';
import SideBar from './interface/sideBar/sideBarComponent.jsx';
import Content from '../components/form/content.jsx';
import Topbar from '../components/form/topBar.jsx';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="wrapper">
                <Wrapper>
                    <SideBar />
                    <Content>
                        <Topbar>
                            {this.props.children}
                        </Topbar>
                    </Content>
                </Wrapper>
            </div>
        );
    }
}

export default Wrapper;