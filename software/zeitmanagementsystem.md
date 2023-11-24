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
sortingPriority: 2
---

The current appointment system of the city of Munich will be replaced by [Zeitmanagementsystem](https://www.berlin.de/moderne-verwaltung/buergerservice/vor-ort/terminvereinbarung/artikel.959989.php) (ZMS) provided by the state of Berlin.


---

## About the project

The online appointment system of the City of Munich is an important contact point for many citizens to plan their personal contact with the service offices of the City of Munich and, at the latest since the pandemic, an indispensable tool of the City of Munich. However, the software product on which the solution is based is no longer supported in this form by the previous manufacturer. 
As a result, various available solutions were examined. The City of Munich decided to implement the solution for appointment and waiting time management system "ZMS". This solution was developed in a cooperation between the ITDZ Berlin and the Fraunhofer Institute for Telecommunications and is available under an open source license. It will be introduced step by step starting in 2022.


Since 2022, the time management system (ZMS) has been built up via a development project at the in-house operation it@M.

The main modules of the ZMS are:

* an [interface for citizens on muenchen.de](https://stadt.muenchen.de/buergerservice/terminvereinbarung.html), which can be used to book appointments for selected services in an online appointment calendar.
* a web client for clerks, with which citizens can be called up for appointments via call-up systems.

The system also offers an administration interface for team leaders to manage resources. This means that more or fewer appointments can be offered on a daily basis depending on availability. A statistics module makes it possible to evaluate booked appointments and services (reports).

![A hand holding an ipad, on this a calendar sheet is shown in the background a laptop](/terminvereinbarung_symbolbild.jpeg)


## Technical details

* Modular architecture with API interfaces
* [User interface for citizens on muenchen.de](https://github.com/it-at-m/eappointment-buergeransicht) - in-house development with Vue.js
* Source code executed as PHP development
* ZMS is operated on [Openshift](openshift)
* Maria DB with Galera Cluster
