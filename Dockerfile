FROM node:latest

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./package-lock.json ./package-lock.josn
COPY ./public/ ./public/
COPY ./src/ ./src/

RUN npm install

CMD ["npm", "start"]
