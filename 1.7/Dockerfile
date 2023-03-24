# Start from the ubuntu:20.04 image 
FROM ubuntu:20.04

# Use /usr/src/app as our workdir. 
WORKDIR /usr/src/app

# 
COPY script.sh .

# Install curl into system
RUN apt -qq update \
&& apt -qq -y upgrade \
&& apt -qq -y install curl

# When running docker run the command will be ./script.sh
CMD ./script.sh
