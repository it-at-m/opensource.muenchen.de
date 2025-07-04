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

The application __Ehrenamtjustiz__ replaces the previous software __Schöffenverwaltung__ and simplifies the processes involved in appointing honorary judges.

---

## Project

The application __Ehrenamtjustiz__ replaces the __Schöffenverwaltung__ software, which was in use until 2024. Ehrenamtjustiz was developed as a so-called MAKE application by it@M. The goal is to provide a modern, secure, and future-ready specialized procedure that can be used by both public administrations and citizens.

Ehrenamtjustiz supports clerks in district administration departments in recording and managing applications for the position of lay judge or honorary judge at the administrative court. It also enables the comparison and resolution of conflicts in residents' registration data. Additionally, the application assists in generating proposal lists for appointing honorary judges. At the same time, citizens have the opportunity to apply directly for these positions through an online portal.

Technically, the application is based on the it@M [reference architecture](https://github.com/it-at-m/refarch) and is operated on an [OpenShift](openshift.md) platform. The software uses [Spring](spring.md) and [Vue.js](vuejs.md) templates. The architecture ensures a clean separation of components and provides standardized interfaces to external systems such as the residents' registration system and change services. Security features such as a Web Application Firewall (WAF), single sign-on via [KeyCloak](keycloak.md), and centralized data storage in a [PostgreSQL](postgresql.md) database ensure data protection and reliable operation.
