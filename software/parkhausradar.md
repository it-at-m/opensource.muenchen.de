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

__Parkhausradar__ is a mobile-first web app that shows live occupancy for the parking garages in Munich’s city center on an interactive map.

---

## About the project

Parkhausradar shows at a glance where parking spaces are free in Munich's city center. Each garage appears on the map with a traffic-light marker, and a list shows all garages with their free spaces.

The detail view of a garage shows the free spaces, the capacity, the occupancy in percent and the time of the last update. From there, a route to the garage entrance can be opened in Apple Maps, Google Maps, OpenStreetMap or Waze, and a link to the garage can be shared.

The data comes directly from the parking guidance system of the City of Munich and is updated every minute. Only the garages connected to it are shown. Other parking garages, underground car parks and parking lots in Munich are not included.

Parkhausradar is a project of the IT department and the Mobility Department of the City of Munich.

## Technical details

- Frontend: based on the frontend template of the [reference architecture](../publish#refarch), built with [Vue.js](vuejs), [Vuetify](vuetifyjs) and MapLibre GL JS. The basemap is a Protomaps extract of [OpenStreetMap](openstreetmap). It is served from our own server, so no request goes to a third party.
- Data: a small [Python](python) collector fetches the occupancy from Munich's parking guidance system every minute. It stores the values in a FROST-Server (OGC SensorThings API) on [PostgreSQL](postgresql) with PostGIS.
- Access: the frontend reads the data through the gateway of the [reference architecture](../publish#refarch), which allows only read access.
- Operation: the frontend, collector and gateway run as containers on Kubernetes and are installed with a [Helm chart](https://github.com/it-at-m/helm-charts/tree/main/charts/parkhausradar).

---

More information: https://innolab.muenchen.de/projekte/parkhausradar.html

---
