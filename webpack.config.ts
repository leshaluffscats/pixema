const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
        publicPath: '/',
        clean: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/'),
                    to: path.resolve(__dirname, 'public/images/')
                },
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: { /* Loader options go here */ }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                // use: ['file-loader'],
                type: 'asset/inline'
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                // use: ['file-loader'],
                type: 'asset/resourse'
            },

        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        compress: true,
        port: 3000,
    },
}
