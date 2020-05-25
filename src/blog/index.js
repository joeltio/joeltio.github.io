import React from "react";

const NavBar = React.lazy(() => import("../common/NavBar"));
const BlogPosts = React.lazy(() => import("./BlogPosts"));

const BlogLayout = ({navLocations}) => (
    <div>
        <NavBar navLocations={navLocations} />
        <BlogPosts />
    </div>
);

export default BlogLayout;