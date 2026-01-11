import htmlmin from 'html-minifier-next';

export default async function main(eleventyConfig) {
	eleventyConfig.setLiquidOptions({
		dynamicPartials: false,
	});

	eleventyConfig.addPassthroughCopy("src/images");

	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		if (outputPath.endsWith(".html")) {
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
