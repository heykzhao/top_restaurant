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