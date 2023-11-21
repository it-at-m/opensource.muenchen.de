FROM ghcr.io/ks-no/openshift-nginx/fiks-nginx-openshift:latest

# Custom NGINX-Config to allow URLs without trailing slashes #75
COPY nginx.rewriteslashes.conf /etc/nginx/conf.d/default.conf
# Copy built Vitepress page
COPY .vitepress/dist/ /usr/share/nginx/html

LABEL org.opencontainers.image.title="opensource.muenchen.de"
LABEL org.opencontainers.image.url="https://github.com/it-at-m/opensource.muenchen.de"
