import React from 'react';

import Wrapper from '../../layout.jsx';
import SideBar from './sideBar.jsx';
import Brande from './brande.jsx';
import Divider from './divider.jsx';
import Heading from './heading.jsx'
import CollapseMenu from './collapseMenu/collapseMenu.jsx';
import CollapseMenuItem from './collapseMenu/itemCollapseMenu.jsx';
import NavItem from './navItem.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from '../../pageContent/pageContainer.jsx';
import Head from '../../pageContent/pageHeading.jsx';
import ExceptionHandler from '../../../services/ErrorBoundary.jsx';

class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        const routes = [
            {
                path: "/teste",
                exact: true,
                sidebar: () => <Brande brande={"Gestão de API"} />,
                main: () => {
                    return(
                        <p>oi</p>
                    );
                   
                }
            }
        ];

        return (
            <Router>
                <ExceptionHandler>
                <div>
                    <SideBar>
                        <Link to="/teste">   <Brande brande={"Gestão de API"} /></Link>
                        <Divider />
                    </SideBar>
                    
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </div>
                </ExceptionHandler>
            </Router>
        );
    }
}

export default SideBarComponent;