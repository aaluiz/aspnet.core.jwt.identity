import React from 'react';
import SideBar from './interface/sideBar/sideBarComponent.jsx';
import Content from '../components/form/content.jsx';
import Topbar from '../components/form/topBar.jsx';
import Search from '../components/form/topBarSearch.jsx';
import TopNavBar from '../components/form/topNavBar.jsx';
import UserInfo from '../components/form/userInfo.jsx';


class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="wrapper">
                <SideBar />
                <Content>
                    <Topbar>
                        <Search visible={this.props.withSearch} />
                        <TopNavBar>
                            <UserInfo username ={this.props.username}/>
                        </TopNavBar>
                    </Topbar>

                    {this.props.children}
                </Content>
            </div>
        );
    }
}

export default Wrapper;