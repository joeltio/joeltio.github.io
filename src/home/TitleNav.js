import React from "react";
import { Link } from "react-router-dom";

import SmallName from "../common/SmallName";
import NavName from "../common/NavName";

const TitleNav = () => (
    <div class="d-flex flex-row no-gutters justify-content-between align-items-baseline">
        <SmallName>joel tio</SmallName>
        <Link to="/">
            <div class="align-self-center">
                <NavName selected>home</NavName>
            </div>
        </Link>
        <Link to="/blog">
            <NavName>blog</NavName>
        </Link>
    </div>
);

export default TitleNav;
