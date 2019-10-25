const {resolve} = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {combineOptionsForWebpackByEntryPath} = require('./webpack.util');
const SrcRoot = `src`;
const EntryPath = `src`;
const entryList = {};
combineOptionsForWebpackByEntryPath({
    entryList,
    srcRoot: SrcRoot,
    entryPath: EntryPath,
    isProd: false
});

module.exports = {
    entry: entryList,
    mode: 'production',
    context: __dirname,
    output: {
        filename: '[name].js',
        path: resolve(__dirname, './lib'),
        library: 'whdx-middle-ui',
        libraryTarget: "umd"
    },
    externals: {
        vue: 'Vue',
        echarts: 'echarts',
        jquery: 'jquery',
        'v-charts': 'v-charts'
    },
    resolve: {
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
                test: /\.(woff|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8000&name=assets/fonts/[name].[ext]'
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
            ["lib"],
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose: true,        　　　　　　　　　　//开启在控制台输出信息
                dry: false        　　　　　　　　　　//启用删除文件
            }
        )
    ]
};
