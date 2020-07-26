import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';

const Navbar = ({ location }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    navbarLinks {
                        name
                        exact
                        link
                    }
                }
            }
        }
    `);

    const links = data.site.siteMetadata.navbarLinks;
    const linkElements = links.map((link) => {
        let isCurrent;
        if (link.exact) {
            isCurrent = location.pathname === link.link;
        } else {
            isCurrent = location.pathname.startsWith(link.link);
        }

        let otherStyles = {};
        if (isCurrent) {
            otherStyles = {
                fontWeight: 'bold',
            };
        }

        return (
            <p
                style={{
                    display: 'inline-block',
                    fontFamily: 'Montserrat, sans-serif',
                    paddingLeft: rhythm(1),
                    paddingRight: rhythm(1),
                    ...otherStyles,
                }}
                key={link.link}
            >
                <Link to={link.link}>
                    {link.name}
                </Link>
            </p>
        );
    });

    return (
        <div>
            {linkElements}
        </div>
    );
};

export default Navbar;
