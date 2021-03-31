FROM node:14.16.0-alpine3.10 as build
WORKDIR /app
ADD . /app
RUN npm install
ADD nginx.conf .
RUN ls -l /app

FROM nginx:latest
WORKDIR /build
COPY --from=build /app /build
RUN ls -l /build
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/frontend /usr/share/nginx/html
RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /var/cache/nginx /var/run /var/log/nginx
EXPOSE 80
