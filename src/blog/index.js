import React from "react";

import NavBar from "./NavBar";
import BlogPosts from "./BlogPosts";

const BlogLayout = props => {
    return (
        <div>
            <NavBar />
            <BlogPosts />
        </div>
    );
};

export default BlogLayout;