---
title: Ehrenamtjustiz
developer: LHM
code: https://github.com/it-at-m/ehrenamt-justiz
licensingmodel: open source
license: MIT
tags:
- application
- eigenentwicklung
- start2024
---

The __Honorary Justice__ application simplifies the processes involved in appointing honorary judges.

## Project

Ehrenamtjustiz supports clerks in the district administrative authority in recording and managing applications for the office of lay judge or honorary judge at the administrative court. Conflicts in the residents' registration data can also be compared and clarified. The application also helps with the creation of nomination lists for the appointment of volunteers. At the same time, citizens have the opportunity to apply directly for the office via an online portal.

Technically, the application is based on the it@M [reference architecture](https://github.com/it-at-m/refarch) and is operated on an [OpenShift](openshift.md) platform. The software uses the templates [Spring](spring.md) and [Vue.js](vuejs.md). The architecture enables the separation of components and offers standardized interfaces to external systems such as the residents' register and change services. We also use single sign-on via [KeyCloak](keycloak.md) and central data storage in a [PostgreSQL](postgresql.md) database.

The “Ehrenamtjustiz” application replaces the “Schöffenverwaltung” software, which was in use until 2024.
