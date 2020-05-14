const
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    stats: {
        children: false
    },
    entry: './src/app.js',
    output: {
        path: path.resolve('dist')
    },
    watch: true,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve('dist'),
        https: true,
        compress: true,
        open: true,
        stats: 'minimal'
    },
    module: {
        rules: [
            {
                test: /\.s?[ca]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin()
    ]
}
