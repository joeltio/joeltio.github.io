import React from "react";
import styles from "./smallName.css";

const SmallName = props => {
    var nameStyles = styles.name;
    if (props.inline) {
        nameStyles += " " + styles.inline;
    }
    return (
        <p className={nameStyles}>{props.children}</p>
    );
}

export default SmallName;