FROM node:latest

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock ./yarn.lock
COPY ./public/ ./public/
COPY ./src/ ./src/

RUN yarn install

CMD ["yarn", "start"]
