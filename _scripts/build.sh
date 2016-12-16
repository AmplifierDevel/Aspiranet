#!/bin/sh

echo '### Interpolating Variables ###'
sed -i 's/ASPIRANET_CONTENTFUL_PREVIEW_KEY/'"$ASPIRANET_CONTENTFUL_PREVIEW_KEY"'/g' ../_config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_ACCESS_KEY/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'/g' ../_config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_SPACE_ID/'"$ASPIRANET_CONTENTFUL_SPACE_ID"'/g' ../_config.yml 
echo '### Fetching content & Building site ###'
jekyll contentful --rebuild
echo '### DONE ###'
echo '### Removing Variables from config file ###'
echo '### Fetching Twitter ###'
./last_tweet.sh $TWITTER_API $TWITTER_SECRET Aspiranet
echo '### DONE ###'
