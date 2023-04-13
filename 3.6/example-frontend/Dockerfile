FROM node:16

WORKDIR /usr/src/app

COPY . .

EXPOSE 5000

RUN npm install && \
npm run build && \
npm install -g serve && \
useradd appuser && \
chown appuser .

USER appuser

ENTRYPOINT [ "serve", "-s", "-l", "5000", "build"]
