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
RUN chown root /build/nginx.conf
RUN chmod -R g+rwX /build/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/frontend /usr/share/nginx/html
EXPOSE 80
