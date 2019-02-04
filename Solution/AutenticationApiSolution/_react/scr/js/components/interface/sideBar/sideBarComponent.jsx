import React from 'react';

import Wrapper from '../../wrapper.jsx';
import SideBar from './sideBar.jsx';
import Brande from './brande.jsx';
import Divider from './divider.jsx';
import Heading from './heading.jsx'
import CollapseMenu from './collapseMenu/collapseMenu.jsx';
import CollapseMenuItem from './collapseMenu/itemCollapseMenu.jsx';

class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
                <SideBar>
                    <Brande brande={"Gestão de API"} />
                    <Divider />
                    <Heading HeadingName={"Usuários"} />
                    <CollapseMenu icon={"fas fa-user fa-sm fa-fw"} name={"Gerenciamento"} subtitle={"Ações"}>
                        <CollapseMenuItem name={"Cadastrar"} link={"/register"} />
                    </CollapseMenu>
                </SideBar>
        );
    }
}

export default SideBarComponent;