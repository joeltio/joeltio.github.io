import React from "react";
import ReactDOM from "react-dom";

import MainLayout from "./MainLayout";

const HomeLayout = React.lazy(() => import("./home"));
const AboutLayout = React.lazy(() => import("./about"));
const BlogLayout = React.lazy(() => import("./blog"));

const NAV_LOCATIONS = [
    {
        name: "home",
        path: "/",
        component: HomeLayout,
    },
    {
        name: "about",
        path: "/about",
        component: AboutLayout,
    },
    {
        name: "blog",
        path: "/blog",
        component: BlogLayout,
    },
];

const app = document.getElementById("app");
ReactDOM.render(<MainLayout navLocations={NAV_LOCATIONS} />, app);