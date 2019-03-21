#!/bin/bash 

cp ./expo/config/app.dev.json app.json

cp src/app/config/config.dev.json src/app/config/config.json

if [ "$BUILD" == "true" ]
then
exp build:ios
fi
