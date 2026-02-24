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
  - k8s
---

**ad2image** bietet eine einfache HTTP API zum Abrufen von Benutzerfotos aus einer Active Directory / Microsoft Exchange-Umgebung an.

---

Moderne Webapplikationen verwenden oft Avatare, also kleine "Userbilder", zum Repräsenterierung von Personen und Identitäten an.
Mit der Einführung von Outlook Web App und unserem Social-Intranet "WiLMA" sind diese "Bildchen" auch im städtischen Umfeld nicht mehr wegzudenken.

ad2image bietet auch die Möglichkeit Avatare zu generieren, wenn eine Identität kein Foto hinterlegt hat.

Zusätzlich bietet es einen [Gravatar API](https://docs.gravatar.com/sdk/images/) kompatiblen Endpunkt, der die Nutzung von ad2image als Bildquelle für Anwendungen ermöglicht, die bereits eine Gravatar-Integration haben (z.B. [PLANKA](https://github.com/plankanban/planka/pull/1319)).

Es ist containerbasiert und kann per [Helm Chart](https://github.com/it-at-m/helm-charts/tree/main/charts/ad2image) deployed werden.
