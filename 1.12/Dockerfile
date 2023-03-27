FROM node:16
#FROM node:16.3.0-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
npm run build && \
npm install -g serve

EXPOSE 5000

ENTRYPOINT [ "serve", "-s", "-l", "5000", "build"]
