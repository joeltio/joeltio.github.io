import React from "react";

import HugeTitle from "./HugeTitle";
import HugeSubtitle from "./HugeSubtitle";
import TitleNav from "./TitleNav";

import styles from "./index.css";

const subtitles = [
    "Now with no added preservatives!",
    "It works! (sometimes)",
    "Center aligned!",
    "(Tests not included)",
    "Covered by warranty until the coming code review",
    "Now with a 10% higher project completion rates than before!",
    "(Documentation not included)",
    "but that bug wasn't me",
    "Thank you for your support!",
    "self_explanatory_variable_names_are_not_long",
    "It's not a bug, it's a feature!",
    "No trailing whitespaces included! ",
]

const HomeLayout = () => {
    const subtitleIndex = Math.floor(Math.random() * subtitles.length);
    const subtitleText = subtitles[subtitleIndex];
    
    return (
    <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
            <TitleNav />
            <HugeTitle highlight>I make things</HugeTitle>
            <HugeSubtitle>{subtitleText}</HugeSubtitle>
        </div>
    </div>
    );
}

export default HomeLayout;