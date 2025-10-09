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

__CKAN__ (Comprehensive Knowledge Archive Network) ist eine webbasierte Datenkatalog-Software, die insbesondere von öffentlichen Einrichtungen für das Teilen „offener Daten“ verwendet wird, die von der [OKFN](https://okfn.org) weiterentwickelt wird.


---

Wir verwenden CKAN in zwei Projekten:

* Über das öffentliche Portal [opendata.muenchen.de](https://opendata.muenchen.de) wird das Angebot der Landeshauptstadt München an offenen Daten publiziert und in unterschiedlichsten Visualisierungen angeboten.
* Der Metadatenkatalog (MDK) ist der interne zentrale Katalog für Metadaten aller Daten, Dienste und Anwendungen (z.B. Portale) des Digitalen Zwillings München. Er ermöglicht die zentrale Recherche nach verfügbaren Daten des Geodatenpools.
Im Rahmen des Projekts [Connected Urban Twins](https://www.connectedurbantwins.de) (CUT) entwickelt München zusammen mit Hamburg und Leipzig den Digitalen Zwilling.
Die Entwicklung der Projekte erfolgt nutzerorientiert und modular.
[Alle Projektergebnisse werden frühzeitig geteilt und als „Open Source“ zur Verfügung gestellt.](https://stadt.muenchen.de/infos/connected-urban-twins.html), so wie es die [Regelungen zu Open Source für Modellprojekte Smart Cities des Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen ](https://www.smart-city-dialog.de/regelungen-zu-open-source-fuer-modellprojekte-smart-cities) vorsehen.

Auch wenn beide Projekte einen unterschiedlichen Fokus und Zielgruppe haben, werden beide mit einem [geforketen Helm Chart der TU München](https://github.com/it-at-m/sddi-ckan-k8s/) auf unser [Openshift](openshift) deployed.
