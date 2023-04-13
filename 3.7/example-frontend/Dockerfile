FROM node:alpine3.17

WORKDIR /usr/src/app

COPY . .

EXPOSE 5000

RUN npm install && \
npm run build && \
npm install -g serve && \
useradd -S appuser && \
chown appuser .

USER appuser

ENTRYPOINT [ "serve", "-s", "-l", "5000", "build"]
