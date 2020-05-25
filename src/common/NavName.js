import React from "react";
import { Link } from "react-router-dom";

import styles from "./navName.css";

const NavName = ({selected, to, children, className, ...other}) => {
    let pStyle = styles.nav;
    if (selected) {
        pStyle += " " + styles.selected;
    } else {
        pStyle += " " + styles["not-selected"];
    }

    let linkStyle = styles.linkStyle;
    if (className !== undefined) {
        linkStyle += " " + className;
    }

    return (
        <Link to={to} className={linkStyle} {...other}>
            <p className={pStyle}>{children}</p>
        </Link>
    );
};

export default NavName;