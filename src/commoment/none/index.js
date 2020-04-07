import React from "react";
import { withRouter } from "react-router-dom";
import Son1 from './son1';
import Son2 from './son2';
import RouterView from '../router/view';


export default withRouter(function (props) {
    const { route } = props;
    const Page = [Son1, Son2];
    return (
        <RouterView
            routers={route.children}
            Page={Page}
        />
    )
})