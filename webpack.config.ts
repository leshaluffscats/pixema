const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config({ path: './src/.env.local' });

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
        // publicPath: './',
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
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
            "process.env.REACT_APP_FIREBASE_API_KEY": JSON.stringify(process.env.REACT_APP_FIREBASE_API_KEY),
            "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
            "process.env.REACT_APP_FIREBASE_PROJECT_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_PROJECT_ID),
            "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
            "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
            "process.env.REACT_APP_FIREBASE_APP_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_APP_ID),
        }),
    ],
    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] },
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
        hot: true,
    },
}

