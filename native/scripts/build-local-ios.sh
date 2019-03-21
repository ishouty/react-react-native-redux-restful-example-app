#!/bin/bash 

cp ./expo/config/app.local.json app.json

cp src/app/config/config.local.json src/app/config/config.json

if [ "$BUILD" == "true" ]
then
exp build:ios
fi
