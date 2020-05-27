import React from "react";

const NavBar = React.lazy(() => import("../common/NavBar"));
const AboutMe = React.lazy(() => import("./AboutMe"));
const Projects = React.lazy(() => import("./Projects"));

const AboutLayout = ({navLocations}) => (
    <div>
        <NavBar navLocations={navLocations} />
        <AboutMe />
        <Projects />
    </div>
)

export default AboutLayout;