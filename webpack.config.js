var debug = process.env.NODE_ENV != 'production';
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : false,
    entry: './src/client.js',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015'],
                    plugins: [
                        'react-html-attrs',
                        'transform-class-properties',
                        'transform-decorators-legacy',
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
        filename: 'client.min.js'
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, soucemap: false })
    ]
};
