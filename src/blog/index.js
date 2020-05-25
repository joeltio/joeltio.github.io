import React from "react";
import Loadable from "react-loadable";

const NavBar = Loadable({
    loader: () => import("../common/NavBar"),
    loading() {
        return <p>Loading</p>;
    }
});

const BlogPosts = Loadable({
    loader: () => import("./BlogPosts"),
    loading() {
        return <p>Loading</p>;
    }
});

const BlogLayout = () => (
    <div>
        <NavBar />
        <BlogPosts />
    </div>
);

export default BlogLayout;