module.exports = {
	files: {
        src : ['_site/css/*.css']
    },
    options: {
        watchTask: true,
        ghostMode: {
            clicks: true,
            scroll: true,
            links: true,
            forms: true
        },
        server: {
            baseDir: '_site'
        }
    }
}
