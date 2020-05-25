import React from "react";

import HugeTitle from "./HugeTitle";
import HugeSubtitle from "./HugeSubtitle";
import TitleNav from "./TitleNav";

import styles from "./index.css";

const HomeLayout = () => (
    <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
            <TitleNav />
            <HugeTitle highlight>I make things</HugeTitle>
            <HugeSubtitle>click here</HugeSubtitle>
        </div>
    </div>
);

export default HomeLayout;