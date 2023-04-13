FROM golang:alpine3.16

WORKDIR /usr/src/app

COPY . .

EXPOSE 8080

RUN go build && \
adduser -S appuser && \
chown appuser .

USER appuser

ENTRYPOINT [ "./server"]
