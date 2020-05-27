import React from "react";

import styles from "./projectCard.css";

const ProjectCard = ({project}) => {
    let containerStyles = {
        backgroundColor: project.backgroundColor,
        color: project.textColor || "black",
    };

    if (project.backgroundImage) {
        containerStyles.backgroundImage = `url(${project.backgroundImage})`;
    }

    return (
        <a className={styles.anchor} href={project.link} target="_blank">
            <div className={styles.container} style={containerStyles}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.date}>{project.date}</p>
                <p>{project.description}</p>
            </div>
        </a>
    );
}

export default React.memo(ProjectCard);