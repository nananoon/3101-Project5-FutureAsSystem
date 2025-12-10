module.exports = function(eleventyConfig) {
    // Copy image files to output
    eleventyConfig.addPassthroughCopy("src/**/*.{jpg,jpeg,png,gif,svg}");
    // Copy Assets folder to output
    eleventyConfig.addPassthroughCopy("Assets");
    
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['html', 'md', 'njk', 'css'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}