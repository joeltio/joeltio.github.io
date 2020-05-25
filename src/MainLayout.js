import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Route, HashRouter } from "react-router-dom";

import NavLocationType from "./common/NavLocationType";
import Loading from "./common/Loading";

import styles from "./mainLayout.css"
import containerStyles from "./common/container.css"

const MainLayout = ({navLocations}) => {
    const routes = navLocations.map(location => (
        <Route key={location.path} path={location.path} exact
               render={() => ( <location.component navLocations={navLocations} /> )} />
    ));

    return (
        <HashRouter>
            <Suspense fallback={<Loading />}>
                <div className={`${styles.container} ${containerStyles.container}`}>
                    {routes}
                </div>
            </Suspense>
        </HashRouter>
    );
};

MainLayout.propTypes = {
    navLocations: PropTypes.arrayOf(NavLocationType),
}

export default MainLayout;