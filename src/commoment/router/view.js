import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Frame from '../frame';


export default withRouter(function (props) {
    const { routers, Page, match } = props;
    const matchPath = match.path === '/' ? '' : match.path
    return (
        <Switch>
            {
                routers.map((Routes, index) => {
                    const Compoment = Page[index];
                    return (
                        <Route
                            exact={Routes.exact}
                            key={Routes.key}
                            path={`${matchPath}${Routes.path}`}
                            render={() => (
                                Routes.children ? <Compoment Page={Compoment} route={Routes} /> :
                                    <Frame Page={Compoment} route={Routes} />
                            )}
                        />
                    )
                })
            }
            <Redirect from='/' to={{
                pathname: `${matchPath}${routers[0].path}`
            }} />
        </Switch>
    )
})