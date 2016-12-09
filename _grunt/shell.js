module.exports = {
	jekyllBuild: {
            command: 'jekyll build'
        },
        jekyllServe: {
            command: 'jekyll serve'
	},
	interpolateEnvVariables: {
            command: `sed -i '' 's/ASPIRANET_CONTENTFUL_PREVIEW_KEY/'"$ASPIRANET_CONTENTFUL_PREVIEW_KEY"'/g' _config.yml && sed -i '' 's/ASPIRANET_CONTENTFUL_ACCESS_KEY/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'/g' _config.yml && sed -i '' 's/ASPIRANET_CONTENTFUL_SPACE_ID/'"$ASPIRANET_CONTENTFUL_SPACE_ID"'/g' _config.yml`
    },
 	removeAPIKeys: {
            command: `sed -i '' 's/'"$ASPIRANET_CONTENTFUL_PREVIEW_KEY"'/ASPIRANET_CONTENTFUL_PREVIEW_KEY/g' _config.yml && sed -i '' 's/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'/ASPIRANET_CONTENTFUL_ACCESS_KEY/g' _config.yml && sed -i '' 's/'"$ASPIRANET_CONTENTFUL_SPACE_ID"'/ASPIRANET_CONTENTFUL_SPACE_ID/g' _config.yml`
    }
}