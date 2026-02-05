FROM node:20.19.6-alpine3.21 AS build

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


RUN npm run build

#FROM nginx:alpine

FROM nginx:mainline-alpine-slim

RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx 
     
RUN touch /var/run/nginx.pid && \ 
    chown -R nginx:nginx /var/run/nginx.pid 
USER nginx 


EXPOSE 8080

COPY --from=build /app/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]


########### Command to run ###########
#export DOCKER_BUILDKIT=1 
#docker build -t ds .
