FROM golang:alpine AS build-stage

RUN apk update && apk add --no-cache git

WORKDIR /usr/src/app

COPY . .

RUN go get -d -v && go build && adduser -S appuser && chown appuser .

FROM scratch

EXPOSE 8080

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/server /usr/src/app/server

COPY --from=build-stage /etc/passwd /etc/passwd

USER appuser

ENTRYPOINT ["serve", "-s", "-l", "5000", "build"]
