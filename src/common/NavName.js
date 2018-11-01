import React from "react";
import styles from "./navName.css";

const NavName = props => {
    var styleName = styles.nav;
    if (props.selected) {
        styleName += " " + styles.selected;
    } else {
        styleName += " " + styles["not-selected"];
    }

    return (
        <p className={styleName}>{props.children}</p>
    );
};

export default NavName;