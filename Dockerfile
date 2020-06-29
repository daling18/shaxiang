FROM openresty/openresty:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
ADD dist /usr/local/openresty/nginx/html
