import React from "react";

import NavBar from "../common/NavBar";
import AboutMe from "./AboutMe";

const AboutLayout = ({navLocations}) => (
    <div>
        <NavBar navLocations={navLocations} />
        <AboutMe />
    </div>
)

export default AboutLayout;