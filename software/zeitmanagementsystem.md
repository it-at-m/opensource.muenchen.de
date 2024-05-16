---
Source: SNow
title: Zeitmanagementsystem
developer: Berlinonline
code: https://gitlab.com/eappointment
licensingmodel: open source
linkapplication: https://stadt.muenchen.de/buergerservice/terminvereinbarung.html
tags:
  - eigenentwicklung
  - application
  - kooperation
  - start2021
  - k8s
sortingPriority: 2
---

The current appointment system of the city of Munich will be replaced by [Zeitmanagementsystem](https://www.berlin.de/moderne-verwaltung/buergerservice/vor-ort/terminvereinbarung/artikel.959989.php) (ZMS) provided by the state of Berlin.

---

## About the project

The City of Munich's online appointment scheduling system is an important point of contact for many citizens when planning personal contact with the City of Munich's service centers and has been an indispensable tool for the City of Munich since the pandemic. However, the software product on which the solution is based is no longer supported in this form by the previous manufacturer.  
With the resulting need for realignment, various available solutions were examined. The City of Munich decided to introduce the "ZMS" appointment and waiting time management system solution. This solution was developed in cooperation with IT-Dienstleistungszentrum Berlin and BerlinOnline Stadtportal GmbH & Co. KG and is available under an open source license. It has been introduced gradually since September 2023.

Since the beginning of 2021, the time management system (ZMS) has been set up via a development project at it@M.

The application offers several components.

- In the [citizen view](https://stadt.muenchen.de/buergerservice/terminvereinbarung.html), citizens can book appointments via the online appointment calendar on muenchen.de.
  The citizen view is an in-house development of the LHM with [Vue.js](vuejs).
- The clerk client in the backend is a web application via which waiting citizens can be called up for appointments using call systems. This is connected to the open source database Maria DB, which runs as a Galera cluster.
- In addition, team leaders can control the available appointments via an administration interface and pull statistics reports (number of appointments/service) via an extra module.

![Screenshot of customer statistics in the time management system](/inhouse/zms_kundenstatistik.jpg)
![Screenshot clerk position in the time management system](/inhouse/zms_sachbearbeiter.jpg)
![Screenshot of weekly calendar in the time management system](/inhouse/zms_wochenkalender.jpg)

## Technical details

- Modular architecture with API interfaces
- [User interface for citizens on muenchen.de](https://github.com/it-at-m/eappointment-buergeransicht) - in-house development with Vue.js
- Source code executed as PHP development
- Maria DB with Galera Cluster
