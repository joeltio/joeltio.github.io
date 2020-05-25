import React from "react";

import SmallName from "../common/SmallName";
import NavName from "../common/NavName";

import styles from "./navBar.css"

const NavBar = () => (
    <nav>
        <div className={styles.container}>
            <div className={styles.signature}>
                <SmallName inline>joel tio</SmallName>
            </div>
            <NavName className={styles.navItem} to="/">home</NavName>
            <NavName className={styles.navItem} to="/about">about me</NavName>
            <NavName className={styles.navItem} to="/blog" selected>blog</NavName>
        </div>
    </nav>
);

export default NavBar;