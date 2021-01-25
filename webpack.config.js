const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'main.js'
    },
    resolve:{
        extensions : ['.js']
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(svg|png|jpg|)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000,
                    }
                }
            }
        ]
    },
    plugins :[
        new htmlWebpackPlugin({
            inject: true,
            template: './index.html',
            filename: './index.html',
        }),
        new copyWebpackPlugin({
            patterns: [
            {
                from: './styles/',
                to: ''
            }
        ]
        })
    ]
}