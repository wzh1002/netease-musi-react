const webpack = require('webpack');
const { resolve } = require('path');

const vendors = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router-dom',
    'react-addons-perf'
];

const dir = resolve(__dirname, 'static');

module.exports = {
    entry: {
        "lib": vendors
    },
    output: {
        path: dir,
        filename: 'js/[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname
        })
    ],
    devtool: '#source-map'
};
