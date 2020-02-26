FROM node:12-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy app source code
COPY . ./

#Expose port and start application

CMD [ "npm", "start" ]