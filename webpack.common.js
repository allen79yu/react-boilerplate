const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: ["./src/app.jsx"],
        vendors: ["react", "react-dom", "redux", "react-redux", "react-router", "react-router-dom", "axios"]
    },
    output: {
        path: `${__dirname}/build`,
        filename: "assets/[name].[hash].js",
        publicPath: "/boilerplate/"
    },
    resolve: {
        extensions: [".jsx", ".js"],
        alias: {
            "@src": path.resolve(__dirname, "src/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@containers": path.resolve(__dirname, "src/containers/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@utils": path.resolve(__dirname, "src/utils/")
        }
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.s[a|c]ss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader?modules&localIdentName=[local]_cfb_[hash:10]"
                        },
                        {
                            loader: "postcss-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(eot|ttf|woff|svg)?$/,
                loader: "file-loader",
                query: {
                    name: "assets/[hash].[ext]"
                }
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                loader: "url-loader",
                exclude: /app.js/,
                query: {
                    limit: 1024,
                    name: "assets/[hash].[ext]"
                }
            }
        ]
    }
};
