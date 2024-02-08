FROM node:lts-bullseye-slim
LABEL authors="laurent"

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
#RUN npm install -g npm@9.8.1
RUN npm install
COPY . .

CMD [ "node", "src/server.js" ]

# docker build . -t redpanda
# docker run -p 3000:3000 redpanda


# docker rm -vf $(docker ps -aq)
# docker rmi -f $(docker images -aq)
# apres suppression, red panda need recharge
