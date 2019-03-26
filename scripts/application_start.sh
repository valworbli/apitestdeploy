#!/bin/bash

# Get the path (absolute/relative) to the script
MYNAME=$(basename $0)
let MYLENGTH=${#0}-${#MYNAME}
ZERO=0
MYPWD=${0:ZERO:MYLENGTH}

cd $MYPWD

for dock in $(docker ps | awk '{print $1}' | grep -v CONTAINER); do docker stop $dock; done
systemctl restart docker
docker-compose -f ../docker-compose.yml -f ../docker-compose.dev.yml up -d