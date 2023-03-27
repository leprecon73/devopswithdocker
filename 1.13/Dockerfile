FROM golang:1.16

WORKDIR /usr/src/app

COPY . .

RUN go build
RUN go test ./...

EXPOSE 8080

ENTRYPOINT [ "./server"]
