import React from "react";

import HugeTitle from "./HugeTitle";
import HugeSubtitle from "./HugeSubtitle";
import TitleNav from "./TitleNav";

const HomeLayout = () => (
    <div class="d-flex h-100 align-items-center justify-content-center">
        <div class="d-flex flex-column">
            <TitleNav />
            <HugeTitle highlight>I make things</HugeTitle>
            <HugeSubtitle>click here</HugeSubtitle>
        </div>
    </div>
);

export default HomeLayout;