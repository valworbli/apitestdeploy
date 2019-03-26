#!/bin/bash

# Get the path (absolute/relative) to the script
MYNAME=$(basename $0)
let MYLENGTH=${#0}-${#MYNAME}
ZERO=0
MYPWD=${0:ZERO:MYLENGTH}

cd $MYPWD

# systemctl restart docker
# for dock in $(docker ps | awk '{print $1}' | grep -v CONTAINER); do docker stop $dock; done
cd ../
rm -fr node_modules
su ubuntu -c 'docker-compose -f ../docker-compose.yml -f ../docker-compose.dev.yml up -d'