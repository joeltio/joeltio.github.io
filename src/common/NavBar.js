import React from "react";

import SmallName from "../common/SmallName";
import NavName from "../common/NavName";

import styles from "./navBar.css"

const NAV_NAMES = {
    "/": "home",
    "/about": "about",
    "/blog": "blog",
};

const NavBar = () => {
    let navNames = [];

    for (const nav in NAV_NAMES) {
        const name = NAV_NAMES[nav];
        const isSelected = window.location.href.endsWith(nav);
        navNames.push(
            <NavName key={nav} to={nav}
                     className={styles.navItem} selected={isSelected}>
                {name}
            </NavName>
        );
    }

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

export default NavBar;