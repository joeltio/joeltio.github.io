import React from "react";

import SmallName from "../common/SmallName";
import NavName from "../common/NavName";

import styles from "./titleNav.css";

const TitleNav = () => (
    <div className={styles.container}>
        <SmallName>joel tio</SmallName>
        <NavName to="/" selected>home</NavName>
        <NavName to="/blog">blog</NavName>
    </div>
);

export default TitleNav;
