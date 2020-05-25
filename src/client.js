import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { Route, HashRouter } from "react-router-dom";

import Loading from "./common/Loading";

import styles from "./client.css"

const HomeLayout = Loadable({
    loader: () => import("./home/index"),
    loading() {
        return <Loading />;
    }
});

const AboutLayout = Loadable({
    loader: () => import("./about/index"),
    loading() {
        return <Loading />;
    }
});

const BlogLayout = Loadable({
    loader: () => import("./blog/index"),
    loading() {
        return <Loading />;
    }
});

const MainLayout = () => (
    <HashRouter>
        <div className={styles.container}>
            <Route path="/" exact component={HomeLayout} />
            <Route path="/about/" component={AboutLayout} />
            <Route path="/blog/" component={BlogLayout} />
        </div>
    </HashRouter>
);

const app = document.getElementById("app");
ReactDOM.render(<MainLayout/>, app);