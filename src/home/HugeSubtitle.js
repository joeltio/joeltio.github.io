import React from "react";

import styles from "./hugeSubtitle.css"

const HugeSubtitle = (props) => (
    <h2 className={styles.subtitle}>{props.children}</h2>
);

export default HugeSubtitle;