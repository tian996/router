import React, { lazy, Suspense } from 'react';
//import Loadable from "react-loadable";
import { BrowserRouter } from "react-router-dom";
import Loading from '../common/loading';
import RouterView from './view';
import router from './router.js';
import { user, UserInfoContext } from './hooks';

const Page = [
    // Loadable({ loader: () => import("../none"), loading: Loading }),
    // Loadable({ loader: () => import("../tow"), loading: Loading }),
    lazy(() => import("../none")),
    lazy(() => import("../tow")),
]

export default function (props) {
    return (
        <UserInfoContext.Provider value={{ ...user }}>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <RouterView
                        Page={Page}
                        routers={router}
                    />
                </BrowserRouter>
            </Suspense>
        </UserInfoContext.Provider>
    )
}
