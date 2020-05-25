import React from "react";

import NavBar from "../common/NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const AboutLayout = ({navLocations}) => (
    <div>
        <NavBar navLocations={navLocations} />
        <AboutMe />
        <Projects />
    </div>
)

export default AboutLayout;