const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const mainfest = require('./manifest.json');

const src = resolve(__dirname, 'src');
const dist = resolve(__dirname, 'dist');
const publicPath = '/';

module.exports = {
    context: __dirname,
    entry: {
        app: [
            './src/index.js'
        ]
    },
    output: {
        path: dist,
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                include: src,
                use: {
                    loader: 'babel'
                }
            },
            {
                test: /\.scss$/,
                include: src,
                use: ExtractTextPlugin.extract({
                    fallback: "style",
                    use: [
                        "css",
                        {
                            loader: 'postcss',
                            options: {
                                plugins: loader => [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        "sass"
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            env: process.env.NODE_ENV
        }),
        new ExtractTextPlugin("dist/css/[name].css")
    ],
    devServer: {
        contentBase: __dirname,
        publicPath: publicPath,
        port: 1010,
        historyApiFallback: true
    },
    devtool: '#source-map',
    resolveLoader: {
        moduleExtensions: ['-loader']
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ]);
    module.exports.externals = {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'redux': 'Redux',
        'react-redux': 'ReactRedux'
    }
} else {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: mainfest
        })
    ]);
}
