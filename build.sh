#!/bin/sh

echo '### Interpolating Variables ###'
sed -i 's/ASPIRANET_CONTENTFUL_PREVIEW_KEY/'"$ASPIRANET_CONTENTFUL_PREVIEW_KEY"'/g' _config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_ACCESS_KEY/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'/g' _config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_SPACE_ID/'"$ASPIRANET_CONTENTFUL_SPACE_ID"'/g' _config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_SPACE_ACCESS_TOKEN/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'/g' _config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_API_URL/'"$ASPIRANET_CONTENTFUL_API_URL"'/g' _config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_IS_PREVIEW/'"$ASPIRANET_CONTENTFUL_IS_PREVIEW"'/g' _config.yml 
echo '### Fetching content & Building site ###'
cat _config.yml
jekyll contentful --rebuild
echo '### DONE ###'
echo '### Removing Variables from config file ###'
echo '### Fetching Twitter ###'
_scripts/last_tweet.sh $TWITTER_API $TWITTER_SECRET Aspiranet
echo '### DONE ###'
