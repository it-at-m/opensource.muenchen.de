---
Source: SNow
title: ckan
developer: null
developerlink: https://ckan.org
licensingmodel: open source
linkapplication: https://opendata.muenchen.de
logo: /logo/ckan_logo.svg
tags:
- application
- kooperation
- support
- k8s
---

__CKAN__ (Comprehensive Knowledge Archive Network) is a web-based data catalog software used especially by public institutions for sharing "open data", which is further developed by the [OKFN](https://okfn.org).

---

We use CKAN in two projects:

* The public portal [opendata.muenchen.de](https://opendata.muenchen.de) publishes the City of Munich's range of open data and offers it in a wide variety of visualizations.
* The metadata catalog (MDK) is the internal central catalog for metadata of all data, services and applications (e.g. portals) of the Munich digital twin. It enables centralized searches for available data from the geodata pool.
As part of the [Connected Urban Twins](https://www.connectedurbantwins.de) project (CUT), Munich is developing the digital twin together with Hamburg and Leipzig.
The development of the projects is user-oriented and modular.
[All project results are shared at an early stage and made available as "open source"](https://stadt.muenchen.de/infos/connected-urban-twins.html), as stipulated by the [Regulations on Open Source for Model Projects Smart Cities of the Federal Ministry of Housing, Urban Development and Construction ](https://www.smart-city-dialog.de/regelungen-zu-open-source-fuer-modellprojekte-smart-cities).

Even though both projects have different focuses and target groups, both will be deployed on our Openshift using a [forked Helm Chart from the Technical University of Munich](https://github.com/it-at-m/sddi-ckan-k8s/).
