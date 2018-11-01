import React from "react";
import styles from "./smallName.css";

const SmallName = props => (
    <p className={styles.name}>{props.children}</p>
);

export default SmallName;