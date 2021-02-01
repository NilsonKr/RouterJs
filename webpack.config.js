const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'src/bundle.js',
        
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
            },
/*             {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            } */
        ]
    },
    plugins :[/* 
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }), */
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns:[{from: path.resolve(__dirname, 'styles'), to:'styles/'}]
        })
    ]
}