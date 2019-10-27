const htmlmin = require('html-minifier');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/images");

	eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
		if(outputPath.endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
				conservativeCollapse: true,
			});
			return minified;
		}

		return content;
	});
};
