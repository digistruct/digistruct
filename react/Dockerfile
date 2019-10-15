FROM node:alpine

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV NODE_ENV $app_env

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN apk update \
    && apk add git \
    && npm install

COPY . /usr/src/app

CMD if [ ${NODE_ENV} = production ]; \
    then \
    npm run build; \
    else \
    npm run start; \
    fi