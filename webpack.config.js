const { resolve } = require('path')
const EslintWebpackPlugin = require('eslint-webpack-plugin')

const config = {
    mode: 'production',
    entry: resolve(__dirname, './src'),
    output: {
        path: resolve(__dirname, './lib'),
        filename: 'index.js',
        clean: true,
        library: {
            type: 'commonjs2'
        },
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ]
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new EslintWebpackPlugin()
    ],
}

module.exports = config
