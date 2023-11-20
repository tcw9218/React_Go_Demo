FROM golang:latest
WORKDIR /usr/src/app

COPY . .
RUN go mod tidy
RUN CGO_ENABLED=0 GOOS=linux go build -o web

EXPOSE 8080

CMD ["./web"]