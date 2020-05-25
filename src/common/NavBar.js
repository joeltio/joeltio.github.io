import React from "react";
import PropTypes from "prop-types";

import SmallName from "./SmallName";
import NavName from "./NavName";
import NavLocationType from "./NavLocationType";

import styles from "./navBar.css"

const NavBar = (navLocations) => {
    let navNames = navLocations.map(location => {
        const isSelected = window.location.href.endsWith(location.path);

        return (
            <NavName key={location.path} to={location.path}
                     className={styles.navItem} selected={isSelected}>
                {location.name}
            </NavName>
        )
    });

    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.signature}>
                    <SmallName inline>joel tio</SmallName>
                </div>
                {navNames}
            </div>
        </nav>
    )
};

NavBar.propTypes = {
    navLocations: PropTypes.arrayOf(NavLocationType),
}

export default NavBar;