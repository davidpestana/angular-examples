FROM node:lts AS builder
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install && \
    npm run build:prod


FROM nginx
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/webapp /usr/share/nginx/html
RUN date > /build-date.txt
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/js/env.template.js > /usr/share/nginx/html/assets/js/env.js && exec nginx -g 'daemon off;'"]
# CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
