# start from node v12
FROM node:12

# run command to mkdir
RUN mkdir /usr/src/app

# set working directory
WORKDIR /usr/src/app

# copy local to working dir
COPY . .

RUN npm install

# run command to install angular cli
RUN npm install -g @angular/cli