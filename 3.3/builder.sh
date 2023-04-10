#!/bin/bash
if [ "$#" -ne 2 ]
then
  echo "Expected two arguments."
  echo "Use: $./builder.sh github-repo/app hub-docker-login/image-name"
  exit 1
fi

git clone https://github.com/$1.git ./tmp && cd ./tmp
docker build . -t $2
docker push $2


