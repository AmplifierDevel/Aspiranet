#!/bin/sh

echo '### Fetching Twitter ###'
_scripts/last_tweet.sh $TWITTER_API $TWITTER_SECRET Aspiranet
echo '### Fetching Twitter DONE ###'

echo '### Fetching Programs ###'
curl 'https://cdn.contentful.com/spaces/'"$ASPIRANET_CONTENTFUL_SPACE_ID"'/entries?access_token='"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'&content_type=programLocation' > assets/data/program_data.json
echo '### Fetching Programs DONE ###'

echo '### Interpolating Variables ###'
sed -i 's/ASPIRANET_CONTENTFUL_PREVIEW_KEY/'"$ASPIRANET_CONTENTFUL_PREVIEW_KEY"'/g' _config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_ACCESS_KEY/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'/g' _config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_SPACE_ID/'"$ASPIRANET_CONTENTFUL_SPACE_ID"'/g' _config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_SPACE_ACCESS_TOKEN/'"$ASPIRANET_CONTENTFUL_ACCESS_KEY"'/g' _config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_API_URL/'"$ASPIRANET_CONTENTFUL_API_URL"'/g' _config.yml 
sed -i 's/ASPIRANET_CONTENTFUL_IS_PREVIEW/'"$ASPIRANET_CONTENTFUL_IS_PREVIEW"'/g' _config.yml 
echo '### Fetching content & Building site ###'
jekyll contentful --rebuild
echo '### DONE ###'

