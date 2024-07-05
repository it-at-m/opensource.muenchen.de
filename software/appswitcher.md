---
title: Appswitcher
developer: LHM
code: https://github.com/it-at-m/appswitcher-server
licensingmodel: open source
license: MIT
logo: /inhouse/logo-appswitcher.svg
tags:
  - eigenentwicklung
  - infrastruktur
  - start2023
  - k8s
---

**Appswitcher** allows users to easily switch between different web applications.

---

The web application is designed as a static page to be embedded in other web applications (e.g. using an iframe).
Appswitcher was heavily inspired by Google's [App Bar](https://support.google.com/accounts/answer/1714464?hl=en#zippy=%2Cswitch-between-apps).

![Screenshot of a web page with the truncated headline "kita einrich", on top right a menu of 9 buttons](https://raw.githubusercontent.com/it-at-m/appswitcher-server/main/docs/embedded_in_applications.png)

Appswitcher is container based and can be deployed via [helm-chart](https://github.com/it-at-m/helm-charts/tree/main/charts/appswitcher-server).

