FROM node:alpine

WORKDIR /usr/app/estacionamento

COPY package*.json ./

RUN npm i -g @adonisjs/cli
RUN adonis migration:run

COPY . .

EXPOSE 3333

CMD ["npm", "start"]