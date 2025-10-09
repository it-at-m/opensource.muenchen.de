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
Die Anwendung __Ehrenamtjustiz__  vereinfacht die Abläufe rund um die Berufung Schöff\*innen beim Amtsgericht oder ehrenamtlicher Richter\*innen am Verwaltungsgericht.

---

## Projekt

Das Fachverfahren „Ehrenamtliche für die Justiz“ unterstützt Sachbearbeiter\*innen der Gemeindeverwaltung bei der Erfassung und Verwaltung von Bewerbungen für das Amt als Schöff\*innen beim Amtsgericht oder ehrenamtlicher Richter\*innen am Verwaltungsgericht, bei der Erstellung der Vorschlagslisten für das jeweilige Gericht, in dem die vorliegenden Daten der\*des Bewerber\*in mit den Daten im Melderegister abgeglichen werden. Des Weiteren kann den Bürger\*innen die Möglichkeit gegeben werden, sich online mit der Gemeindeverwaltung in Verbindung zu setzen, um auf die jeweilige Vorschlagsliste aufgenommen zu werden. 

Technisch basiert die Anwendung auf der it@M-[Referenzarchitektur](https://github.com/it-at-m/refarch) und wird auf einer [OpenShift](openshift.md)-Plattform betrieben. Die Software verwendet die Templates [Spring](spring.md) und [Vue.js](vuejs.md). Die Architektur ermöglicht eine Trennung von Komponenten und bietet standardisierte Schnittstellen zu externen Systemen wie dem Einwohnermelderegister und Änderungsdiensten. Weiter nutzen wir Single Sign-On über [KeyCloak](keycloak.md) sowie eine zentrale Datenhaltung in einer [PostgreSQL](postgresql.md)-Datenbank.

Die Anwendung „Ehrenamtliche für die Justiz“ ersetzt die (städtische) Software „Schöffenverwaltung“, die bis 2024 im Einsatz war.
