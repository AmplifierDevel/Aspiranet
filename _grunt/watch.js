module.exports = {
	sass: {
        files: '_src/sass/**/*.scss',
        tasks: ['sass']
    },
    jekyll: {
        files: ['_layouts/*.html', '_includes/*.md', '_includes/*.html', 'css/main.css', '*.html', '*.md'],
        tasks: ['shell:commentContentful', 'shell:jekyllBuild', 'shell:uncommentContentful']
    }
}

