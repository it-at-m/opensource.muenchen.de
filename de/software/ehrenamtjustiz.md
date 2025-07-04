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
Die Anwendung __Ehrenamtjustiz__ ersetzt die bisherige Software „Schöffenverwaltung“ und vereinfacht die Abläufe rund um die Berufung ehrenamtlicher Richter\*innen.

---

## Projekt
Die Anwendung „Ehrenamtjustiz“ ersetzt die Software „Schöffenverwaltung“, die bis 2024 im Einsatz war. Ehrenamtjustiz wurde als sogenannte MAKE-Anwendung von it@M entwickelt. Ziel ist es, ein modernes, sicheres und zukunftsfähiges Fachverfahren bereitzustellen, das sowohl von der Verwaltung als auch von Bürger\*innen genutzt werden kann.

Ehrenamtjustiz unterstützt Sachbearbeiter\*innen in der Bezirksverwaltungsbehörde bei der Erfassung und Verwaltung von Bewerbungen für das Amt als Schöffe oder ehrenamtlicher Richter\*innen am Verwaltungsgericht. Dabei können auch Konflikte in den Einwohnermeldedaten abgeglichen und geklärt werden. Zusätzlich hilft die Anwendung bei der Erstellung von Vorschlagslisten für die Berufung von Ehrenamtlichen. Parallel dazu haben Bürger\*innen die Möglichkeit, sich über ein Online-Portal direkt für das Amt zu bewerben.

Technisch basiert die Anwendung auf der it@M-[Referenzarchitektur](https://github.com/it-at-m/refarch) und wird auf einer [OpenShift](openshift.md)-Plattform betrieben. Die Software verwendet die Templates [Spring](spring.md) und [Vue.js](vuejs.md). Die Architektur ermöglicht eine saubere Trennung von Komponenten und bietet standardisierte Schnittstellen zu externen Systemen wie dem Einwohnermelderegister und Änderungsdiensten. Sicherheitsfunktionen wie eine Web Application Firewall (WAF), Single Sign-On über [KeyCloak](keycloak.md) sowie eine zentrale Datenhaltung in einer [PostgreSQL](postgresql.md)-Datenbank sorgen für Datenschutz und zuverlässigen Betrieb.
