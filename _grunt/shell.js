module.exports = {
	jekyllBuild: {
            command: 'jekyll build'
        },
    jekyllBuildContentful: {
            command: 'jekyll contentful --rebuild'
    },
	interpolateEnvVariables: {
            command: `sed -i '' 's/ASPIRANET_CONTENTFUL_PREVIEW_KEY/'"$ASPIRANET_CONTENTFUL_PREVIEW_KEY"'/g' _config.yml && sed -i '' 's/ASPIRANET_CONTENTFUL_ACCESS_KEY/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'/g' _config.yml && sed -i '' 's/ASPIRANET_CONTENTFUL_SPACE_ID/'"$ASPIRANET_CONTENTFUL_SPACE_ID"'/g' _config.yml`
    },
 	removeAPIKeys: {
            command: `sed -i '' 's/'"$ASPIRANET_CONTENTFUL_PREVIEW_KEY"'/ASPIRANET_CONTENTFUL_PREVIEW_KEY/g' _config.yml && sed -i '' 's/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'/ASPIRANET_CONTENTFUL_ACCESS_KEY/g' _config.yml && sed -i '' 's/'"$ASPIRANET_CONTENTFUL_SPACE_ID"'/ASPIRANET_CONTENTFUL_SPACE_ID/g' _config.yml`
    },
    commentContentful: {
            command: `sed -i '' 's/"jekyll-contentful"/#"jekyll-contentful"/g' _config.yml && sed -i '' 's/gem "jekyll-contentful"/#gem "jekyll-contentful"/g' Gemfile && sed -i '' 's/gem "jekyll-contentful-data-import"/#gem "jekyll-contentful-data-import"/g' Gemfile`
    },
    uncommentContentful: {
            command: `sed -i '' 's/#"jekyll-contentful"/"jekyll-contentful"/g' _config.yml && sed -i '' 's/#gem "jekyll-contentful"/gem "jekyll-contentful"/g' Gemfile && sed -i '' 's/#gem "jekyll-contentful-data-import"/gem "jekyll-contentful-data-import"/g' Gemfile`
    }
}