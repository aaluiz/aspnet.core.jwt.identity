import React from 'react';
import AuthService from '../services/AuthService.js';
import { withAuth } from '../services/withAuth.js';
import SideBar from './interface/sideBar/sideBar.jsx';
import Content from './form/content.jsx';
import Topbar from './form/topBar.jsx';
import Search from './form/topBarSearch.jsx';
import TopNavBar from './form/topNavBar.jsx';
import UserInfo from './form/userInfo.jsx';
import Brande from './interface/sideBar/brande.jsx';
import Heading from './interface/sideBar/heading.jsx';
import Divider from './interface/sideBar/divider.jsx';
import CollapseMenu from './interface/sideBar/collapseMenu/collapseMenu.jsx';
import CollapseMenuItem from './interface/sideBar/collapseMenu/itemCollapseMenu.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './pages/registerAccount.jsx';
import Role from './pages/registerRole.jsx';
import Contas from './pages/contas.jsx';
import Funcoes from './pages/funcoes.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Auth: new AuthService(),
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.state.Auth.logout();
        this.props.history.replace('/login');
    }

    render() {

        const routes = [
            {
                path: "/castrarRole",
                exact: true,
                component: () => {return (<Role/>)}
            },
            {
                path:'/cadastrarAccount',
                exact: false,
                component:()=>{return(<Register/>)}
            },
            {
                path: "/contas",
                exact: true,
                component: () => {return (<Contas/>)}
            },
            {
                path:'/funcoes',
                exact: false,
                component:()=>{return(<Funcoes/>)}
            }
        ];

        return (
            <Router>
                <div id="wrapper">
                    <SideBar>
                        <Link to={"/"}>
                            <Brande brande={"Gestão de API"} />
                        </Link>
                        <Divider />
                        <Heading HeadingName={"Usuários"} />
                        <CollapseMenu icon={"fas fa-user fa-sm fa-fw"} name={"Cadastrar"} subtitle={"Ações"}>
                            <CollapseMenuItem name={"Nova Conta"} link={"/cadastrarAccount"} />
                            <CollapseMenuItem name={"Nova Função"} link={"/castrarRole"} />
                        </CollapseMenu>
                        <CollapseMenu icon={"fas fa-clipboard-list fa-sm fa-fw"} name={"Gerenciar"} subtitle={"Ações"}>
                            <CollapseMenuItem name={"Contas"} link={"/contas"} />
                            <CollapseMenuItem name={"Funções"} link={"/funcoes"} />
                        </CollapseMenu>
                    </SideBar>
                    <Content>
                        <Topbar>
                            <Search visible={this.props.withSearch} />
                            <TopNavBar>
                                <UserInfo username={this.props.user.unique_name[1]} logout={this.handleLogout} />
                            </TopNavBar>
                        </Topbar>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
                    </Content>
                </div>
            </Router>
        );
    }
}


export default withAuth(App);