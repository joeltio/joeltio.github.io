import React from "react";

import styles from "./blogPost.css";

const BlogPost = props => (
    <section class="container p-4 d-flex justify-content-center">
        <div className={styles.post}>
            <h2 className={styles.title}>{props.title}</h2>
            <h3 className={styles.datetime}>{props.datetime}</h3>
            <p className={styles.text} dangerouslySetInnerHTML={{__html: props.children}}></p>
        </div>
    </section>
);

export default BlogPost;