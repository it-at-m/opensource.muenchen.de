---
application: KoBIT
developer: LHM
code: https://github.com/orgs/it-at-m/repositories?q=kobit&type=source
codelinktext: github.com/it-at-m kobit
licensingmodel: open source
license: MIT
screenshot: /KoBITApp_screenshot.jpg
logo: https://user-images.githubusercontent.com/53316058/216995779-d246b9ee-69f7-4caf-950e-4de3773b8b3d.PNG
tags:
- eigenentwicklung
- server
- foss
- openshift
- start2023
---

Die KonfliktbegleitungsApp (KoBITApp) unterstützt die Beschäftigten des IT-Referats, Konflikte möglichst niederschwellig beizulegen.

---

## Über das Projekt

Um Hilfestellung und Informationen zum Thema Konfliktmanagement auch zeit- und ortsungebunden anbieten zu können, startete das IT-Referat ein Nachwuchskräfte-Projekt. Daraus entwickelte sich die webbasierte Anwendung KoBITApp, die als Pilot-Projekt im IT-Referat eingeführt wurde.

Die Anwendung als "digitale Anlaufstelle" hat das Ziel

* einen Überblick über alle Anlaufstellen in schwierigen Situationen und Konflikten zu geben,
* eine Unterstützung bei der Auswahl der geeigneten Anlaufstelle zu sein und
* allgemeine Informationen zur Thematik Konflikt zu liefern.

Auf der Plattform sind alle Expert*innen zu einem Thema oder auch alle Angebote für eine Zielgruppe abgebildet; in diesem Fall rund um das Thema „Umgang mit Konflikten“.

KoBIT ist user-zentriert und modular konzipiert. Das bedeutet, die Anwendung kann sowohl auf andere Bereiche der Stadtverwaltung ausgeweitet und speziell auf diese zugeschnitten als auch auf andere Themengebiete adaptiert werden.

## Technische Details

Die KoBITApp setzt auf der Referenzarchitektur der Landeshauptstadt München auf. Als Framework im Frontend wird Vue.js genutzt, im Backend Spring Boot.
Die Barrierefreiheit, die einfache und intuitive Nutzbarkeit, sowie der „mobile-first“ Gedanke stehen bei der Entwicklung im Vordergrund. Da es sich bei den Daten rund um die KoBITApp um sehr persönliche Daten handeln kann, werden, insbesondere aus Datenschutzgründen, getätigte Eingaben niemals gespeichert.

KoBIT ist containerbasiert und kann per [helm-chart](https://github.com/it-at-m/kobit-helmchart) deployed werden.
