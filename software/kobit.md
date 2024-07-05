---
title: KoBIT
developer: LHM
code: https://github.com/orgs/it-at-m/repositories?q=kobit&type=source
codelinktext: github.com/it-at-m kobit
licensingmodel: open source
license: MIT
logo: /inhouse/kobit_logo.png
tags:
- eigenentwicklung
- application
- start2023
- k8s
sortingPriority: 3
---

The Conflict Management App (KoBITApp) supports the employees of the IT department in resolving conflicts as low-threshold as possible.

---

## About the project

In order to be able to offer assistance and information on the topic of conflict management independent of time and location, the IT department launched a junior staff project. This resulted in the web-based application KoBITApp, which was introduced as a pilot project in the IT department.

The application as a "digital contact point" has the goal of

* provide an overview of all points of contact in difficult situations and conflicts,
* to be a support for the selection of the appropriate contact point, and
* to provide general information on the topic of conflict.

On the platform all experts on a topic or all offers for a target group are shown; in this case around the topic "dealing with conflicts".

KoBIT is user-centric and modular in design. This means that the application can be extended to other areas of the city administration and specifically tailored to them as well as adapted to other topics.

![Screenshot of the Kobit start page with the headline Conflict Management with IT Support - the Kobit App](/inhouse/KoBITApp_screenshot.jpg)


## Technical details

The KoBITApp is based on the reference architecture of the City of Munich. Vue.js is used as the framework in the frontend, Spring Boot in the backend.
Accessibility, simple and intuitive usability, as well as the "mobile-first" idea are the main focus of the development. Since the data surrounding the KoBITApp can be very personal, entries made are never stored, especially for data protection reasons.
