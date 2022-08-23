const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const { PROJECT_ROOT } = require("./helpers");

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    entry: path.join(PROJECT_ROOT, "src", "index.tsx"),
    output: {
        path: path.join(PROJECT_ROOT, "dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(PROJECT_ROOT, "src", "index.html"),
            hash: true,
            inject: true,
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
        // new BundleAnalyzerPlugin({}),
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
        modules: [__dirname, "src", "node_modules"],
        fallback: {
            console: false,
            browser: false,
            process: false,
        },
        plugins: [
            new TsconfigPathsPlugin.TsconfigPathsPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.tsx?$/,
                enforce: "pre",
                use: "source-map-loader",
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // {
                    //     // https://webpack.js.org/loaders/sass-loader/
                    //     loader: "sass-loader",
                    //     options: {
                    //         sourceMap: true,
                    //         // Prefer `dart-sass`
                    //         implementation: require.resolve("sass"),
                    //     },
                    // },
                ],
            },
            {
                test: /\.(png|svg)/,
                type: "asset/resource",
            },
        ],
    },
};

module.exports = webpackConfig;
