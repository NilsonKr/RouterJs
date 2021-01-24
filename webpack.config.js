const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry:'./src/main.js',

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
            use: {
                loader:'babel-loader'
            },
        }]
    },
    plugins :[
        new htmlWebpackPlugin({
            inject: true,
            template: './index.html',
            filename: './index.html',
        }),
        new copyWebpackPlugin({
            patterns: [{
                from:'./styles/style.css',
                to:''
            },
            {
                from: './styles/',
                to: ''
            }
        ]
        })
    ]
}