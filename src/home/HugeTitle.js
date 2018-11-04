import React from "react";

import styles from "./hugeTitle.css";

const HugeTitle = (props) => {
    let styleClassName = styles.title;
    if (props.highlight) {
        styleClassName += " " + styles.highlight;
    }

    return (
        <h1 className={styleClassName}>{props.children}</h1>
    );
};

export default HugeTitle;