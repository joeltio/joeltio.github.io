import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ location }) => (
    <Layout location={location}>
        <SEO title="404: Not Found" />
        <h1>404 Not Found</h1>
        <p>
            You just hit a route that doesn&#39;t exist...
            <br />
            If you expect this link to work, I could have discontinued the project.
            <br />
            Hopefully what you&#39;re looking for is in another page.
        </p>
    </Layout>
);

export default NotFoundPage;
