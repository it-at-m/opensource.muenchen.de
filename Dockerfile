FROM ghcr.io/ks-no/openshift-nginx/fiks-nginx-openshift:latest@sha256:3720a07152c611f62fb3bfa1ceead6745914d51f2c8594a7da509b56f284a4dc

# Custom NGINX-Config to allow URLs without trailing slashes #75
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built Vitepress page
COPY .vitepress/dist/ /usr/share/nginx/html

LABEL org.opencontainers.image.title="opensource.muenchen.de"
LABEL org.opencontainers.image.url="https://github.com/it-at-m/opensource.muenchen.de"
