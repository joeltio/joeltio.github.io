import React from "react";

import SmallName from "../common/SmallName";
import NavName from "../common/NavName";

import styles from "./titleNav.css";

const TitleNav = () => (
    <div className={styles.container}>
        <div className={styles.leftItem}><SmallName>Joel Tio</SmallName></div>
        <div className={styles.centerItem}><NavName to="/about" >about me</NavName></div>
        <div className={styles.rightItem}><NavName to="/blog">blog</NavName></div>
    </div>
);

export default TitleNav;
