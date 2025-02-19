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

Das [GeoPortal](https://geoportal.muenchen.de/portal/master/) bietet raumbezogenen Basisinformationen wie einem amtlichen Stadtplan, Adressen und Luftbilder, oder die "Potenzial der oberflächennahen Geothermie".

---

Fast alle Anwendungsszenarien einer Smart City, vom digitalen Stadtplan bis zur intelligenten Verkehrssteuerung, basieren auf der zentralen Verfügbarkeit von Geoinformationen und entsprechender Schnittstellen, über die diese Daten in digitale Services integriert werden können.
Mit dem GeoPortal München werden genau diese Geoinformationen und Dienste den Anwenderinnen und Anwendern aus Wirtschaft, Wissenschaft, Verwaltung – und nicht zuletzt den Bürgerinnen und Bürgern selbst – benutzerfreundlich zur Verfügung gestellt: schnell, zuverlässig und digital.

Das GeoPortal unterstützt zahlreiche Online-Angebote der Landeshauptstadt mit raumbezogenen Basisinformationen wie einem amtlichen Stadtplan, Adressen und Luftbilder.
Fachthemen aus den städtischen Referaten können darauf aufbauen.
So ist eine Vielfalt an thematischen Inhalten möglich und Zusammenhänge werden schnell und auf einen Blick ersichtlich.
Das GeoPortal ist die Geodateninfrastruktur auf die der [Digitale Zwillings München](https://muenchen.digital/twin/) aufsetzt.

![Screenshot einer Karte der Region München mit Grundwassertemperaturen in farblich schraffierten Flächen](/inhouse/geoportal_geothermie_screen.png)

## Architektur

Die meisten Komponenten basieren auf freier Software und werden selber als freie Software von aktiven und international anerkannten Communities im Geodatenbereich bereitgestellt.

- Das [Masterportal](https://www.masterportal.org/), ein Toolkit basierend auf [OpenLayers](https://openlayers.org/), [Vue.js](vuejs) und [Backbone.js](https://backbonejs.org/), ein Projekt der [Geowerkstatt Hamburg](https://www.hamburg.de/geowerkstatt/).
- Die zentralen Serverkomponenten werden von der [Open Source Geospatial Foundation](https://www.osgeo.org/) zur Verfügung gestellt
  - Die Kartendienst-Software [Geoserver](https://geoserver.org) mit den OGC-konformen Webservices
  - Der Metadatenkatalog [GeoNetwork](https://geonetwork-opensource.org) mit ebenfalls OGC-konformen Webservices mit dem Harvesting zu und von anderen Metadatenkatalogen.
- Der [FROST-Server für Sensordaten](https://www.iosb.fraunhofer.de/de/projekte-produkte/frostserver.html) des Fraunhofer IOSB ist eine Implementierung des [SensorThings-Standards](https://www.ogc.org/standards/sensorthings) des [Open Geospatial Consortiums](https://www.ogc.org/) (OGC).
- Die freie Datenbank [PostgreSQL](postgresql) ist inzwischen zu einem Standard avanciert, das GeoPortal nutzt ebenfalls PostgreSQL und die speziell für Geodaten entwickelte Erweiterung [PostGIS](https://postgis.net).
- [ElasticSearch](https://www.elastic.co/de/elasticsearch/) als Suchmaschine
- Mit [Node-RED](https://nodered.org/) wandeln wir unterschiedlichste Datentypen (zum Beispiel Sensordaten) in die standardisierte [SensorThingsAPI](https://github.com/opengeospatial/sensorthings).

## Improve

Wir tragen auch zum  Masterportal bei:

* indem wir ein aktives Mitglied in der [Implementierungspartnerschaft](https://www.masterportal.org/maintainer-group.html) sind und 10.000 €/pro Jahr (netto) in den [Entwicklungsfond](https://www.masterportal.org/entwicklungsfonds.html) einzahlen.
* wir entwicklen das [GDI Geoportal Gateway](https://github.com/it-at-m/geoportal-gateway), ein Gateway um einzelne Fachportale des Masterportals zu veröffentlichen.
