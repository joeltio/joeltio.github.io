module.exports = {
    siteMetadata: {
        title: 'Joel Tio',
        description: 'Joel\'s personal website where he talks about whatever he wants to talk about.',
        author: {
            name: 'Joel Tio',
            summary: 'who develops anything he finds interesting and tries to fit math into them.',
        },
        social: {
            github: 'joeltio',
        },
        navbarLinks: [
            {
                name: 'About',
                link: '/',
                exact: true,
            },
            {
                name: 'Blog',
                link: '/blog',
                exact: false,
            },
        ],
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/blog`,
                name: 'blog',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/projects`,
                name: 'projects',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/assets`,
                name: 'assets',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem',
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: [
                    'UA-173612153-1',
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Joel Tio',
                short_name: 'Joel',
                start_url: '/blog',
                background_color: '#ffffff',
                theme_color: '#8fc3f1',
                display: 'minimal-ui',
                icon: 'content/assets/profile-pic.png',
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
    ],
};
