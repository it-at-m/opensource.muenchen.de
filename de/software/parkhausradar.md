---
title: Parkhausradar
developer: LHM
code: https://github.com/it-at-m/Parkhausradar
codelinktext: github.com/it-at-m Parkhausradar
licensingmodel: open source
license: MIT
logo: /inhouse/parkhausradar_logo.png
tags:
- application
- eigenentwicklung
- start2026
- k8s
sortingPriority: 2
---

__Parkhausradar__ ist eine mobil optimierte Web-App, die die aktuelle Belegung der Parkhäuser in der Münchner Innenstadt auf einer interaktiven Karte zeigt.

---

## Über das Projekt

Das Parkhausradar zeigt auf einen Blick, wo in der Münchner Innenstadt gerade Plätze frei sind. Jedes Parkhaus erscheint auf der Karte mit einer Ampelmarkierung, eine Liste zeigt alle Parkhäuser mit ihren freien Plätzen.

Die Detailansicht eines Parkhauses zeigt die freien Plätze, die Kapazität, die Belegung in Prozent, sowie den Zeitpunkt der letzten Aktualisierung. Von dort lässt sich eine Route zur Einfahrt des Parkhauses in Apple Karten, Google Maps, OpenStreetMap oder Waze öffnen und ein Link zum Parkhaus teilen.

Die Daten kommen direkt aus dem Parkleitsystem der Landeshauptstadt München und werden jede Minute aktualisiert. Zu sehen sind nur die daran angeschlossenen Parkhäuser. Andere Parkhäuser, Tiefgaragen und Parkplätze Münchens sind nicht dabei.

Das Parkhausradar ist ein Projekt des IT-Referats und des Mobilitätsreferats der Landeshauptstadt München.

## Technische Einzelheiten

- Frontend: basiert auf dem Frontend-Template der [Referenzarchitektur](../publish#refarch), umgesetzt mit [Vue.js](vuejs), [Vuetify](vuetifyjs) und MapLibre GL JS. Die Basiskarte ist ein Protomaps-Auszug aus [OpenStreetMap](openstreetmap). Sie wird vom eigenen Server ausgeliefert, sodass keine Anfrage an Dritte geht.
- Daten: Ein kleiner [Python](python)-Collector holt jede Minute die Belegung aus dem Münchner Parkleitsystem. Er speichert die Werte in einem FROST-Server (OGC SensorThings API) auf [PostgreSQL](postgresql) mit PostGIS.
- Zugriff: Das Frontend liest die Daten über das Gateway der [Referenzarchitektur](../publish#refarch), das nur lesenden Zugriff erlaubt.
- Betrieb: Frontend, Collector und Gateway laufen als Container auf Kubernetes und werden per [Helm-Chart](https://github.com/it-at-m/helm-charts/tree/main/charts/parkhausradar) installiert.

---

Weitere Informationen: https://innolab.muenchen.de/projekte/parkhausradar.html

---
