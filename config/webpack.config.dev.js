const path = require("path");
const webpack = require("webpack");

const shared = require("./webpack.config.shared");
const DEV_ENV = require("./dev.env.json");
const { PROJECT_ROOT, VERSION } = require("./helpers");

const ENV = {
    VERSION,
    ...DEV_ENV,
};

/** @type {import("webpack").Configuration} */
const webpackConfig = {
    ...shared,
    mode: "development",
    devtool: "inline-source-map",
    /** @type {import("webpack").Configuration} */
    devServer: {
        static: [
            {
                directory: path.join(PROJECT_ROOT, "dist"),
            },
            {
                directory: path.join(PROJECT_ROOT, "src", "assets"),
                publicPath: "/assets",
            },
        ],
        historyApiFallback: true,
        port: 8080,
        allowedHosts: "all",
        hot: true,
    },
    plugins: [
        ...shared.plugins,
        new webpack.DefinePlugin({
            ENV: JSON.stringify(ENV),
        }),
    ],
};

module.exports = webpackConfig;
