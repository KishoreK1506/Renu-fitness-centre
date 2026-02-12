# Use Nginx (lightweight web server)
FROM nginx:alpine

# Copy website files into Nginx default folder
COPY . /usr/share/nginx/html

