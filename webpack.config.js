module.exports = {
    context: __dirname,
    entry: './src/client.js',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: [
                        'react-html-attrs',
                        '@babel/plugin-syntax-dynamic-import',
                        'react-css-modules',
                    ],
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    }
                ]
            },
        ]
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/build/',
        filename: 'client.min.js'
    },
};
