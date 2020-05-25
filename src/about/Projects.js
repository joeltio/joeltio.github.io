import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [numProjects, setNumProjects] = useState(-1);
    const [projects, setProjects] = useState([]);

    // Get number of projects
    useEffect(() => {
        const source = axios.CancelToken.source();
        axios.get("/projects/index.json", {
            cancelToken: source.token,
        }).then(response => {
            setNumProjects(response.data.numProjects);
        })

        return () => source.cancel();
    }, []);

    // Get each project
    useEffect(() => {
        const source = axios.CancelToken.source();

        for (let i=0; i<numProjects; i++) {
            axios.get(`/projects/${i}.json`, {
                cancelToken: source.token,
            }).then(response => {
                const project = response.data;

                setProjects(prevProjects => {
                    const newProjects = prevProjects.concat(project);
                    newProjects.sort((a, b) => a.number > b.number);
                    return newProjects;
                });
            });
        }

        return () => source.cancel();
    }, [numProjects]);

    const projectCards = projects.map(project =>
        <div key={project.number}>
            <ProjectCard project={project} />
        </div>
    );

    return (
        <div className={styles.container}>
            <h1>Projects</h1>
            <div className={styles.projectsDisplay}>
                {projectCards}
            </div>
        </div>
    );
};

export default Projects;