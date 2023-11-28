---
title: ad2image
developer: LHM
code: https://github.com/it-at-m/ad2image
licensingmodel: open source
license: MIT
tags:
  - eigenentwicklung
  - application
  - start2023
---

**ad2image** bietet eine einfache HTTP API zum Abrufen von Benutzerfotos aus einer Active Directory / Microsoft Exchange-Umgebung an.

---

Moderne Webapplikationen verwenden oft Avatare, also kleine "Userbilder", zum Repräsenterierung von Personen und Identitäten an.
Mit der Einführung von Outlook Web App und unserem Social-Intranet "WiLMA" sind diese "Bildchen" auch im städtischen Umfeld nicht mehr wegzudenken.

ad2image bietet auch die Möglichkeit Avatare zu generieren, wenn eine Identität kein Foto hinterlegt hat.
Es ist containerbasiert und kann per [helm-chart](https://github.com/it-at-m/helm-charts/tree/main/charts/ad2image) deployed werden.
