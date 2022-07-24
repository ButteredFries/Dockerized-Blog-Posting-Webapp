# syntax=docker/dockerfile:1

# Stage 1: Compile and build angular codebase

# Use official node image as base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add source code to app
COPY ./ /usr/local/app/

# Install all dependencies
RUN npm install

# Generate the build of the application
RUN npm run build



# Stage 2: Serve the app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents
COPY --from=build /usr/local/app/dist/front-end /usr/share/nginx/html

# Copy the nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

