import React from "react";
import { withRouter } from "react-router-dom";
import Header from '../header';
// import Footer from '../footer';
// import style from './style.scss';
import Menu from "../menu";

export default withRouter(function (props) {
    const { route, Page } = props;
    const { layoutOption } = route;
    return (
        <div className={'frame'}>
            {
                layoutOption && layoutOption.header ? <Header /> : ''
            }
            <div>
                <Page routers={route.children ? route.children : route} />
            </div>
            {
                route.layoutOption && route.layoutOption.menu ? < Menu /> : ''
            }
        </div>
    )
})