FROM nginx:latest
RUN chgrp -R 0 nginx.conf && dist/frontend
RUN chmod -R g+rwX nginx.conf && dist/frontend
ADD nginx.conf /etc/nginx/nginx.conf
ADD dist/frontend /usr/share/nginx/html
EXPOSE 80
