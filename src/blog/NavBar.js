import React from "react";

import SmallName from "../common/SmallName";
import NavName from "../common/NavName";

const NavBar = () => (
    <nav>
        <div class="d-flex w-100 flex-row">
            <div class="m-3 p-1 pr-3 border-right">
                <SmallName inline>joel tio</SmallName>
            </div>
            <div class="p-3">
                <NavName to="/">home</NavName>
            </div>
            <div class="p-3">
                <NavName to="/blog" selected>blog</NavName>
            </div>
        </div>
    </nav>
);

export default NavBar;