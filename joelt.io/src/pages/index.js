import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

import styles from './index.module.css';

const Home = ({ data, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Home" />
            <article>
                <header>
                    <h2
                        style={{
                            marginTop: rhythm(1),
                            marginBottom: rhythm(1),
                            textAlign: 'center',
                        }}
                    >
                        {post.frontmatter.title}
                    </h2>
                </header>
                <section
                    className={styles.content}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Img
                        fluid={data.me.childImageSharp.fluid}
                        alt="me"
                        style={{
                            marginBottom: rhythm(1),
                            width: '70%',
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </section>
                <hr
                    style={{
                        marginBottom: rhythm(1),
                    }}
                />
            </article>
        </Layout>
    );
};

export default Home;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: "/about-me/" } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
            }
        }
        me: file(relativePath: { eq: "me.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 590) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
