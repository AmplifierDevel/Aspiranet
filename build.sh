#!/bin/sh

echo '### Interpolating Variables ###'
sed -i 's/PREVIEW_TOKEN/'"$PREVIEW_TOKEN"'/g' _config.yml 
sed -i 's/CONTENTFUL_ACCESS_TOKEN/'"$CONTENTFUL_ACCESS_TOKEN"'/g' _config.yml 
sed -i 's/CONTENTFUL_SPACE_ID/'"$CONTENTFUL_SPACE_ID"'/g' _config.yml 
echo '### Fetching content & Building site ###'
jekyll contentful --rebuild
echo '### DONE ###'
echo '### Removing Variables from config file ###'
echo '### DONE ###'
