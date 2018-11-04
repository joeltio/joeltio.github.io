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
                        [
                            'react-css-modules',
                            {
                                'filetypes': {
                                    ".scss": {
                                        "syntax": "postcss-scss"
                                    }
                                }
                            }
                        ]

                    ],
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass-loader'
                ]
            }

        ]
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/build/',
        filename: 'client.min.js'
    },
};
