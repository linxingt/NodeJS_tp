FROM node:lts-bullseye-slim
LABEL authors="laurent"
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

#Supprimer tous les conteneurs quittés
# docker rm $(docker ps -a -f status=exited -q)