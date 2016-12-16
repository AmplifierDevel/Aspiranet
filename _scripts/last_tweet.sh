#!/bin/bash

function usage {
  echo "Usage:"
  echo "last_tweet.sh <api key> <api secret> <username>"
  exit 1
}

if [ -z $1 ] || [ -z $2 ] || [ -z $3 ]; then
  usage
fi

KEY=$1
SECRET=$2
USER=$3

APP_CREDS=`echo -n "$KEY:$SECRET" | base64`

curl --silent --header "Authorization: Basic $APP_CREDS" --data "grant_type=client_credentials" https://api.twitter.com/oauth2/token > bearer_resp.json
BEARER=`grep access_token\":\"[^\"]* bearer_resp.json --only-matching | sed s/access_token\":\"//g`

# https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
curl --silent --header "Authorization: Bearer $BEARER" https://api.twitter.com/1.1/statuses/user_timeline.json?count=1\&screen_name=$USER | sed 's@\\/@/@g' > _data/tweet.json

LAST_TWEET=`grep text\":\"[^\"]* user_timeline.json --only-matching | sed s/text\":\"//g`

echo "Last tweet was:"
echo $LAST_TWEET