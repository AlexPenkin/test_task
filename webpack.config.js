const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = require('./webpack.base.babel.js')({
    // In production, we skip all hot-reloading stuff
    entry: [
        path.join(process.cwd(), 'src/index.js')
    ],

    // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
    output: {
        filename: 'build.js'
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        // Minify and optimize the index.html
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            exclude: /node_modules/
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],

    performance: {
        assetFilter: assetFilename => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename))
    }
});