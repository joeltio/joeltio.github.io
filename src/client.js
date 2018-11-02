import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";

import HomeLayout from "./home/index";
import BlogLayout from "./blog/index";

const MainLayout = () => (
    <HashRouter>
        <div class="h-100 container">
            <Route path="/" exact component={HomeLayout} />
            <Route path="/blog/" component={BlogLayout} />
        </div>
    </HashRouter>
);

const app = document.getElementById("app");
ReactDOM.render(<MainLayout/>, app);