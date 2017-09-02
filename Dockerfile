FROM node:8-alpine

WORKDIR /usr/src/app

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 5683

CMD ["node", "server.js"]
