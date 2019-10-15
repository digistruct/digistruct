FROM golang:alpine

WORKDIR $GOPATH/src/app

COPY . .

RUN apk update \
    && apk add git \
    && go get ./... \
    && go build
    
CMD app