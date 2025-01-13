---
title: GeoPortal
developer: Geowerkstatt Hamburg
developerlink: https://www.masterportal.org/
code: https://gitlab.opencode.de/geowerkstatt-hamburg/masterportal
licensingmodel: open source
linkapplication: https://geoportal.muenchen.de/portal/master/
logo: https://stadt.muenchen.de/.imaging/mte/lhm/image-aspect-ratio-3-2-1008w/dam/Home/Stadtverwaltung/Kommunalreferat/img_geoportal/Karten/Logo_GeoPortal.png/jcr:content/Logo_GeoPortal.png
tags:
  - application
  - kooperation
  - sponsor
---

The [GeoPortal](https://geoportal.muenchen.de/portal/master/) provides basic spatial information such as an official city map, addresses and aerial photographs, or the "Potential of near-surface geothermal energy."

---

### About the project

Almost all application scenarios of a smart city, from digital city maps to intelligent traffic control, are based on the central availability of geoinformation and corresponding interfaces through which this data can be integrated into digital services.
The GeoPortal Munich makes precisely this geoinformation and services available to users from business, science and administration - and not least the citizens themselves - in a user-friendly way: quickly, reliably and digitally.

The city-wide platform has been online since December 2018 and supports numerous online services of the state capital with basic spatial information such as an official city map, addresses and aerial images.
Specialist topics from the city departments can build on this.
This enables a wide range of thematic content to be made available, and connections can be seen quickly and at a glance.
The GeoPortal is the geodata infrastructure on which the [Digital Twin Munich](https://muenchen.digital/twin/) is based.

![Screenshot of a map of the Munich region with groundwater temperatures in colored shaded areas](/inhouse/geoportal_geothermie_screen.png)

### Architecture

Today, modern, scalable software does not consist of a monolithic piece of code, but is made up of modular components that can be installed individually and exchanged if necessary, and that communicate with each other via open, standardized interfaces.
Most of the components are based on free software and are themselves provided as free software by active and internationally recognized communities in the geodata sector.

- The [Masterportal](https://www.masterportal.org/), a toolkit based on [OpenLayers](https://openlayers.org/), [Vue.js](vuejs) and [Backbone.js](https://backbonejs.org/), a project of [Geowerkstatt Hamburg](https://www.hamburg.de/geowerkstatt/).
- The map service software [Geoserver](https://geoserver.org) with the OGC compliant web services.
- The metadata catalog [GeoNetwork](https://geonetwork-opensource.org) with also OGC compliant web services with harvesting to and from other metadata catalogs.
- Fraunhofer IOSB's [FROST server for sensor data](https://www.iosb.fraunhofer.de/de/projekte-produkte/frostserver.html) is an implementation of the [SensorThings standard](https://www.ogc.org/standards/sensorthings) of the [Open Geospatial Consortium](https://www.ogc.org/) (OGC).
- The free database PostgreSQL has become a standard, the GeoPortal also uses PostgreSQL and the extension [PostGIS](https://postgis.net), which was developed especially for geodata.
- [ElasticSearch](https://www.elastic.co/de/elasticsearch/) as a search engine.
- With [Node-RED](https://nodered.org/) we convert different types of data (for example sensor data) into the standard

### What have we contributed?

So we use a rich source of IT services here, but we also contribute to the care & maintenance and further development at the master portal by being an active member in the [Implementation Partnership](https://www.masterportal.org/maintainer-group.html), and also contribute financially to the [Development Fund](https://www.masterportal.org/entwicklungsfonds.html).

In total, we as LHM support the Masterportal with 10.000 €/year (net) of tax money.
