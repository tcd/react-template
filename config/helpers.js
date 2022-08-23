const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const VERSION = require("../package.json").version;

module.exports = {
    PROJECT_ROOT,
    VERSION,
};
