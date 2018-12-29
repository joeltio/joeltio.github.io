import React from "react";
import axios from "axios";

import BlogPost from "./BlogPost";

export default class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: "",
            posts: []
        }
    }

    addPost(post, postNum) {
        this.setState(prevState => ({
            posts: prevState.posts.concat({num: postNum, ...post})
        }));
    }

    componentDidMount() {
        axios.get("/posts/index.json")
            .then(indexResponse => {
                const numPosts = indexResponse.data.numPosts;
                for (let i=0; i<numPosts; i++) {
                    axios.get(`/posts/${i}.json`)
                        .then(postResponse => {
                            this.addPost(postResponse.data, i);
                        });
                }

                if (numPosts === 0) {
                    // Put some placeholder text if there are no posts
                    this.setState({
                        placeholder: <p>There is nothing to see here...</p>
                    });
                }
            })
    }

    render() {
        let posts = this.state.posts
        // Sort the posts, latest first
        posts.sort((a, b) => { return a.num < b.num})

        const content = posts.map(post => (
            <BlogPost key={post.num}
                      title={post.title}
                      datetime={post.datetime}>
                {post.content}
            </BlogPost>
        ))

        return (
            <div class="mt-4">
                {this.state.placeholder}
                {content}
            </div>
        );
    }
}