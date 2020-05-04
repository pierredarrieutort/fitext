const
    dev = Boolean( process.env.WEBPACK_DEV_SERVER ),
    path = require( 'path' ),
    HtmlWebpackPlugin = require( 'html-webpack-plugin' ),
    MiniCssExtractPlugin = require( 'mini-css-extract-plugin' ),
    { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )

module.exports = {
    stats: {
        children: !dev
    },
    entry: './src/app.js',
    output: {
        path: path.resolve( 'dist' )
    },
    watch: dev,
    devtool: dev ? 'inline-source-map' : false,
    devServer: {
        contentBase: path.resolve( 'dist' ),
        https: true,
        compress: true,
        open: true,
        stats: 'minimal'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
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
        new HtmlWebpackPlugin( {
            template: './src/index.html'
        } ),
        new MiniCssExtractPlugin()
    ]
}
