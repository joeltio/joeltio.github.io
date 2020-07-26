import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

import styles from './index.module.css';
import ProjectRow from '../components/project-row';

const pageQuery = graphql`
    query {
        markdownRemark(fields: { slug: { eq: "/about-me/" } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
            }
        }
        projects: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(projects)/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        dateStr
                        description
                        link
                        bgImage {
                            childImageSharp {
                                fluid(maxWidth: 590) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        bgColor
                        fgColor
                    }
                }
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

const Home = ({ location }) => {
    const data = useStaticQuery(pageQuery);
    const about = data.markdownRemark;
    const projects = data.projects.edges.map(
        (edge) => edge.node.frontmatter,
    );
    const projectElements = projects.map((project) => (
        <ProjectRow
            name={project.title}
            date={project.dateStr}
            link={project.link}
            fgColor={project.fgColor}
            bgColor={project.bgColor}
            bgFluidSharp={project.bgImage?.childImageSharp?.fluid}
            key={project.name}
        >
            {project.description}
        </ProjectRow>
    ));

    return (
        <Layout location={location}>
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
                        {about.frontmatter.title}
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
                        dangerouslySetInnerHTML={{ __html: about.html }}
                    />
                </section>
                <section>
                    <h2>Projects</h2>
                    {projectElements}
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

