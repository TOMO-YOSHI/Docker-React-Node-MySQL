# pull official base image
FROM node:latest

# Set the working directory to /api
WORKDIR /api

# copy package.json into the container at /api
COPY package*.json /api/

# install dependencies
RUN yarn install

# Copy the current directory contents into the container at /api
COPY . /api/

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the app when the container launches
CMD ["yarn", "dev"]
