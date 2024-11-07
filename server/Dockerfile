FROM debian:bullseye
RUN apt update
RUN apt install nodejs -y 
RUN apt install npm -y
RUN mkdir -p /home/node/app/
WORKDIR /home/node/app
RUN mkdir interfaces
COPY ./interfaces ./interfaces
COPY package.json ./
COPY interfaces ./
COPY index.js ./
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]