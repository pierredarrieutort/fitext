const
    path = require( 'path' ),
    TerserPlugin = require( 'terser-webpack-plugin' ),
    { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )


module.exports = {
    entry: './src/fitext.js',
    output: {
        path: path.resolve( 'dist' ),
        filename: 'fitext.min.js',
        library: 'fitext',
        libraryTarget: 'umd'
    },
    mode: 'production',
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
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    plugins: [new CleanWebpackPlugin()]
}
