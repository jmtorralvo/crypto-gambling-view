FROM node:8

MAINTAINER josep.servat@guidesmiths.com

# Create a working directory
RUN mkdir -p /usr/src/app
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install nodemon globally
RUN npm install -g nodemon

# Install dependencies (if any) in package.json
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Expose port from container so host can access $PORT
EXPOSE 4000
# Start the Node.js app on load
CMD [ "npm", "start" ]
