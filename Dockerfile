FROM node:16

WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .

#ENV POSTGRES_PASSWORD docker
#ENV POSTGRES_DB world

#EXPOSE 5000
#EXPOSE 5431

#CMD [ "npm", "start" ]

# RUN npm ci --only=production
