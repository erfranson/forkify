const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// in webpack there are 4 core concepts, the entry point, the output, loaders, and plugins
module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'), //this is where we want the our path to look
        filename: 'js/bundle.js' // this is the file we want it to look in for changes
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}