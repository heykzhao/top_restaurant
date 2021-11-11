const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
          title: 'Just Simple Cafe',
          templateContent: `
            <html>
            <body>
                <div id="content"></div>
            </body>
            </html>
        `
        }),
    ],

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
}