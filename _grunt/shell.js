module.exports = {
	jekyllBuild: {
            command: 'jekyll build'
        },
    jekyllBuildContentful: {
            command: 'jekyll contentful --rebuild'
    },
    downloadLatestTweet: {
            command: `_scripts/last_tweet.sh $TWITTER_API $TWITTER_SECRET Aspiranet && rm bearer_resp.json`
    },
	interpolateEnvVariables: {
            command: `
            sed -i '' 's/ASPIRANET_CONTENTFUL_PREVIEW_KEY\ #Preview/'"$ASPIRANET_CONTENTFUL_PREVIEW_KEY"'\ #Preview/g' _config.yml && 
            sed -i '' 's/ASPIRANET_CONTENTFUL_ACCESS_KEY\ #Access/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'\ #Access/g' _config.yml && 
            sed -i '' 's/ASPIRANET_CONTENTFUL_SPACE_ID/'"$ASPIRANET_CONTENTFUL_SPACE_ID"'/g' _config.yml && 
            sed -i '' 's/ASPIRANET_CONTENTFUL_SPACE_ACCESS_TOKEN\ #Spaces/'"$ASPIRANET_CONTENTFUL_SPACE_ACCESS_TOKEN"'\ #Spaces/g' _config.yml && 
            sed -i '' 's/ASPIRANET_CONTENTFUL_IS_PREVIEW/'"$ASPIRANET_CONTENTFUL_IS_PREVIEW"'/g' _config.yml
            sed -i '' 's/ASPIRANET_CONTENTFUL_API_URL/'"$ASPIRANET_CONTENTFUL_API_URL"'/g' _config.yml
            `
    },
 	removeAPIKeys: {
            command: `sed -i '' 's/'"$ASPIRANET_CONTENTFUL_PREVIEW_KEY"'\ #Preview/ASPIRANET_CONTENTFUL_PREVIEW_KEY\ #Preview/g' _config.yml && 
            sed -i '' 's/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'\ #Access/ASPIRANET_CONTENTFUL_ACCESS_KEY\ #Access/g' _config.yml && 
            sed -i '' 's/'"$ASPIRANET_CONTENTFUL_SPACE_ID"'/ASPIRANET_CONTENTFUL_SPACE_ID/g' _config.yml && 
            sed -i '' 's/'"$ASPIRANET_CONTENTFUL_SPACE_ACCESS_TOKEN"'\ #Spaces/ASPIRANET_CONTENTFUL_SPACE_ACCESS_TOKEN\ #Spaces/g' _config.yml && 
            sed -i '' 's/'"$ASPIRANET_CONTENTFUL_IS_PREVIEW"'/ASPIRANET_CONTENTFUL_IS_PREVIEW/g' _config.yml
            sed -i '' 's/'"$ASPIRANET_CONTENTFUL_API_URL"'/ASPIRANET_CONTENTFUL_API_URL/g' _config.yml
            `
    },
    commentContentful: {
            command: `sed -i '' 's/"jekyll-contentful"/#"jekyll-contentful"/g' _config.yml && sed -i '' 's/gem "jekyll-contentful"/#gem "jekyll-contentful"/g' Gemfile && sed -i '' 's/gem "jekyll-contentful-data-import"/#gem "jekyll-contentful-data-import"/g' Gemfile`
    },
    uncommentContentful: {
            command: `sed -i '' 's/#"jekyll-contentful"/"jekyll-contentful"/g' _config.yml && sed -i '' 's/#gem "jekyll-contentful"/gem "jekyll-contentful"/g' Gemfile && sed -i '' 's/#gem "jekyll-contentful-data-import"/gem "jekyll-contentful-data-import"/g' Gemfile`
    }
}