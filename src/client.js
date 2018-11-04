import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";

import Loadable from "react-loadable";

const HomeLayout = Loadable({
    loader: () => import("./home/index"),
    loading() {
        return (<p>Loading</p>);
    }
});

const BlogLayout = Loadable({
    loader: () => import("./blog/index"),
    loading() {
        return (<p>Loading</p>);
    }
});

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