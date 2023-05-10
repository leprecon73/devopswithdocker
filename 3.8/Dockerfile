FROM node:16-alpine as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm install && \
    npm run build

FROM node:16-alpine

EXPOSE 5005

WORKDIR /usr/src/app

RUN npm install -g serve && \
    adduser -S appuser && \
    chown appuser .

USER appuser

COPY --from=build-stage /usr/src/app/build /usr/src/app/build

ENTRYPOINT ["serve", "-s", "-l", "5000", "build"]
