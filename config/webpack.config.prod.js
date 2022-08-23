const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

const shared = require("./webpack.config.shared");
const PROD_ENV = require("./prod.env.json");
const { PROJECT_ROOT, VERSION } = require("./helpers");

const ENV = {
    VERSION,
    ...PROD_ENV,
};

/** @type {import("webpack").Configuration} */
const webpackConfig = {
    ...shared,
    mode: "production",
    plugins: [
        ...shared.plugins,
        new webpack.DefinePlugin({
            ENV: JSON.stringify(ENV),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(PROJECT_ROOT, "src", "assets"),
                    to: path.resolve(PROJECT_ROOT, "dist", "assets"),
                },
            ],
        }),
    ],
};

module.exports = webpackConfig;
