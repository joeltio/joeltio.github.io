import React from "react";

import styles from "./smallName.css";

const SmallName = ({inline, children, className, ...other}) => {
    let nameStyles = styles.name;
    if (inline) {
        nameStyles += " " + styles.inline;
    }

    if (className !== undefined) {
        nameStyles += " " + className;
    }

    return (
        <p className={nameStyles} {...other}>{children}</p>
    );
}

export default SmallName;