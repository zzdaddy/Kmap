const {resolve} = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryList = {
    "index": "./src/demo/index.js"
};

module.exports = {
    entry: entryList,
    mode: 'production',
    context: __dirname,
    output: {
        filename: '[name].[hash:6].js',
        path: resolve(__dirname, './dist'),
        publicPath: './'
    },
    externals: {
        'vue': 'Vue'
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'demo': resolve(__dirname, 'src/demo'),
        },
        extensions: ['.vue', '.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader'
                    },
                    {loader: 'less-loader'},
                    // {
                    //     loader: 'sass-resources-loader',
                    //     options: {
                    //         resources: './src/package/answerCard/src/assets/variable.less',
                    //     }
                    // }
                ]
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "transform-runtime",
                            'transform-object-rest-spread',
                            "dynamic-import-webpack"]
                    }
                }
            }, {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 99000,
                            name: 'lib/assets/[name].[ext]?[hash]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(
            ["dist"],
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose: true,        　　　　　　　　　　//开启在控制台输出信息
                dry: false            　　　　　　　　　　//启用删除文件
            }
        ),
        new HtmlWebpackPlugin({
            template: "src/demo/index.html",
            filename: `index.html`,
            inject: true,
            isProd: true
        })
    ]
};
