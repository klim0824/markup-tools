const path = require('path');
const prettier = require('prettier');

module.exports = function (eleventyConfig) {
	eleventyConfig.addTransform('prettier', (content, outputPath) => {
		const extname = path.extname(outputPath);
		if (extname === '.html') {
			const parser = extname.replace(/^./, '');
			return prettier.format(content, { parser });
		} else {
			return content;
		}
	});

	return {
		dir: {
			input: 'src/templates',
			output: 'dist',
		},
	};
};
