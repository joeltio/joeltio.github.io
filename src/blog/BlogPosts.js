import React from "react";
import axios from "axios";

import BlogPost from "./BlogPost";

export default class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: []}
    }

    addPost(post) {
        this.setState((prevState, props) => {
            return {
                posts: prevState.posts.concat(
                    <BlogPost key={prevState.posts.length}
                                title={post.title}
                                datetime={post.datetime}>
                        {post.content}
                    </BlogPost>
                )
            };
        });
    }

    componentDidMount() {
        axios.get("/posts/index.json")
            .then(indexResponse => {
                const numPosts = indexResponse.data.numPosts;
                for (let i=0; i<numPosts; i++) {
                    axios.get(`/posts/${i}.json`)
                        .then(postResponse => {
                            this.addPost(postResponse.data);
                        });
                }
            })
    }

    render() {
        return (
            <div class="mt-4">
                {this.state.posts}
            </div>
        );
    }
}