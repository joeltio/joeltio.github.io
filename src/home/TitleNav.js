import React from "react";

import SmallName from "../common/SmallName";
import NavName from "../common/NavName";

const TitleNav = () => (
    <div class="d-flex flex-row no-gutters justify-content-between align-items-baseline">
        <SmallName>joel tio</SmallName>
        <div class="align-self-center">
            <NavName to="/" selected>home</NavName>
        </div>
        <NavName to="/blog">blog</NavName>
    </div>
);

export default TitleNav;
