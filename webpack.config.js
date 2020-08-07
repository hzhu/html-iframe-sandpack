const path = require("path");

module.exports = {
	entry: {
		foo: "./src/foo.js",
		bar: "./src/bar.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
