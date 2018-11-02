import React from "react";

import NavBar from "./NavBar";
import BlogPost from "./BlogPost";

const BlogLayout = props => {
    let posts = [];
    for (let blogPost of props.posts) {
        posts.push(
            <BlogPost title={blogPost.title}
                      datetime={blogPost.datetime}>
                {blogPost.content}
            </BlogPost>
        );
    }

    return (
        <div>
            <NavBar />
            <div class="mt-4">
                {posts}
            </div>
        </div>
    );
};

export default BlogLayout;