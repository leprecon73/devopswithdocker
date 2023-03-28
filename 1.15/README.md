#Decription
- Docker image based on Ubuntu 18.04 with youtube-dl utility. After container starts it runs youtube-dl. Need to pass a parameter/link.

#link to the project in Docker Hub
- https://hub.docker.com/repository/docker/leprecon73/youtube-dl/general

#How it was build 
- see Dockerfile

#How to pull image
- $ docker pull leprecon73/youtube-dl:latest

#How to run
- $ docker run --rm youtube-dl <link>
