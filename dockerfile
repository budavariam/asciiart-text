# see node-sass alpine support, for porper version: https://github.com/sass/node-sass/releases/tag/v4.14.1
FROM node:14-alpine

# Install yarn and other dependencies via apk
RUN apk update && apk add python g++ make && rm -rf /var/cache/apk/*

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# RUN npm install react-scripts@3.4.4 -g

# add app
COPY . ./

# start app
CMD ["npm", "start", "--", "--host", "0.0.0.0"]

### USAGE
# docker build -t asciiart:dev .
# docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true asciiart:dev