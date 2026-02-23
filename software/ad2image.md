---
title: ad2image
developer: LHM
code: https://github.com/it-at-m/ad2image
licensingmodel: open source
license: MIT
tags:
  - eigenentwicklung
  - application
  - start2023
  - k8s
---

**ad2image** provides a simple HTTP API for retrieving user photos from an Active Directory / Microsoft Exchange environment.

---

Modern web applications often use avatars, small "user images", to represent people and identities.
With the introduction of Outlook Web App and our social intranet "WiLMA", these "little pictures" have become indispensable even in urban environments.

ad2image also offers the possibility to generate avatars if an identity has no photo stored.

Additionally it provides an [Gravatar API](https://docs.gravatar.com/sdk/images/) compatible endpoint that enables the
usage of ad2image as image source for applications that already have a Gravatar integration (e.g. [PLANKA](https://github.com/plankanban/planka/pull/1319)).

It is container-based and can be deployed via [Helm Chart](https://github.com/it-at-m/helm-charts/tree/main/charts/ad2image).
