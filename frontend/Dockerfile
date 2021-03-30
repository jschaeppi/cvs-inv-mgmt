FROM nginx:latest
RUN chgrp -R 0 /usr/share/nginx/html && /etc/nginx/
RUN chmod -R g+rwX /usr/share/nginx/html && /etc/nginx/
ADD nginx.conf /etc/nginx/nginx.conf
ADD dist/frontend /usr/share/nginx/html
EXPOSE 80
