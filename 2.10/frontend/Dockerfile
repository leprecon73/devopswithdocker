FROM node:16
#FROM node:16.3.0-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install 
ENV REACT_APP_BACKEND_URL="http://localhost/api"

RUN npm run build 
RUN npm install -g serve

EXPOSE 5000

ENTRYPOINT [ "serve", "-s", "-l", "5000", "build"]
