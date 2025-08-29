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
- k8s
sortingPriority: 2
---

The __Honorary Justice__ application simplifies the processes involved in appointing honorary judges.

---

## Project

The specialized procedure "Ehrenamtliche für die Justiz" supports administrative staff in local government in the collection and management of applications for the position of lay judges at the district court or honorary judges at the administrative court. It also assists in the creation of candidate lists for the respective court by cross-referencing the applicant's data with the information in the residents' register. Furthermore, citizens are provided with the opportunity to contact the local government online to express their interest in being included on the relevant candidate list.

Technically, the application is based on the it@M [reference architecture](https://github.com/it-at-m/refarch) and is operated on an [OpenShift](openshift.md) platform. The software uses the templates [Spring](spring.md) and [Vue.js](vuejs.md). The architecture enables the separation of components and offers standardized interfaces to external systems such as the residents' register and change services. We also use single sign-on via [KeyCloak](keycloak.md) and central data storage in a [PostgreSQL](postgresql.md) database.

The application "Ehrenamtliche für die Justiz" replaces the (municipal) software "Schöffenverwaltung", which was in use until 2024.