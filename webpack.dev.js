const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: "index.html",
    inject: "body",
    favicon: "./src/favicon.ico"
});

let apiHost = () => {
    switch (process.env.NODE_ENV) {
        case "localDev":
            return "'http://localhost:8000/apis/'";
            break;
        case "dev":
            return "'https://stage.host/apis/'";
            break;
        case "production":
            return "'https://prod.host/apis/'";
            break;
    }
};

module.exports = merge(common, {
    devServer: {
        inline: true,
        port: 8088,
        historyApiFallback: {
            index: "/boilerplate/index.html"
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new ExtractTextPlugin("assets/[name].[hash].css"),
        new webpack.DefinePlugin({
            __API__: apiHost()
        })
    ]
});
