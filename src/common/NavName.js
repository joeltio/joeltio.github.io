import React from "react";
import { Link } from "react-router-dom";

import styles from "./navName.css";

const NavName = props => {
    let styleName = styles.nav;
    if (props.selected) {
        styleName += " " + styles.selected;
    } else {
        styleName += " " + styles["not-selected"];
    }

    return (
        <Link to={props.to}>
            <p className={styleName}>{props.children}</p>
        </Link>
    );
};

export default NavName;