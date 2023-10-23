---
application: DAVe
developer: LHM
code: https://github.com/orgs/it-at-m/repositories?q=dave&type=source
codelinktext: github.com/it-at-m dave
licensingmodel: open source
license: MIT
screenshot: /DAVE-Standardansicht-Knoten-Strom-Belastungsplan.png
tags:
- application
- eigenentwicklung
- start2021
sortingPriority: 3
---
Mit DAVe können Verkehrszählungen beauftragt, erfasst und mit Hilfe verschiedener Diagramme grafisch ausgewertet werden.

---

## Über das Projekt

DAVe  ist ein Fachverfahren zur Auswertung von Verkehrszählungen. Es ermöglicht den Beschäftigten des Mobilitätsreferats die Verkehrsentwicklung in München zu dokumentieren und zu analysieren. Zugrunde liegen Daten aus über 2000 Zählstellen.
 
Auch DAVe entstand als Softwareeigenentwicklung auf Basis der Open Source Landeshauptstadt München-Referenzarchitektur. Es ist geplant, DAVe soll als Open Source Software zu veröffentlichen.

Alle seit 1989 in München durchgeführten Verkehrszählungen können mit der Fachanwendung DAVe (kurz: Datenbank und Auswertung von Verkehrszählungen) eingesehen werden. Zur Auswertung werden verschieden Diagramme angeboten, die bei Bedarf auch als PDF-Report heruntergeladen werden können. Weitere Zählstellen sowie neue Verkehrszählungen können angelegt und in direkter Kommunikation mit dem Zähldienstleister beauftragt werden.
Die erfassten Daten helfen bei der Analyse der Verkehrsentwicklung und werden zum Beispiel für die Planung neuer Radwege verwendet. Außerdem bilden sie die Grundlage für die Verkehrsmengenkarte
, auf der interessierte Bürger*innen die Verkehrsbelastungen auf den Münchner Straßen online einsehen können.

## Technische Details

DAVe wurde mit der Referenzarchitektur der Landeshauptstadt München entwickelt. Im Backend wird Java Spring Boot und im Frontend TypeScript und Vue verwendet. Ein Knoten-Strom-Belastungsplan, der die Verkehrsströme übersichtlich darstellt wurde mit Hilfe von SVG.js entworfen.

Die Daten liegen in zwei verschiedenen Datenbanken: Die für die Suche relevanten Daten, wie beispielsweise Lage oder Straßennamen, werden in einer ElasticSearch-Datenbank gespeichert. Das ermöglicht eine sehr performante Suche mit Suchvorschlägen in Echtzeit. Die für die Suche nicht benötigten Verkehrsdaten aus den Zählungen werden in einer relationalen Datenbank (Oracle bei der LHM) gespeichert.

Die Anwendung wird im Rechenzentrum der Landeshauptstadt München betrieben. Dabei kommt eine auf [Containern basierende Infrastruktur](openshift) zum Einsatz.
