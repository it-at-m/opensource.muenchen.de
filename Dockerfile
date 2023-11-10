FROM ghcr.io/ks-no/openshift-nginx/fiks-nginx-openshift:latest
COPY .vitepress/dist/ /usr/share/nginx/html

LABEL org.opencontainers.image.title="opensource.muenchen.de"
LABEL org.opencontainers.image.url="https://github.com/it-at-m/opensource.muenchen.de"
