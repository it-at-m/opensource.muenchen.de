---
title: DAVe
developer: LHM
code: https://github.com/orgs/it-at-m/repositories?q=dave&type=source
codelinktext: github.com/it-at-m dave
licensingmodel: open source
logo: /inhouse/dave_logo.png
license: MIT
tags:
- application
- eigenentwicklung
- start2021
- k8s
sortingPriority: 2
---
Mit __DAVe__ können Verkehrszählungen beauftragt, erfasst und mit Hilfe verschiedener Diagramme grafisch ausgewertet werden.

---

## Über das Projekt

DAVe (kurz: Datenbank und Auswertung von Verkehrszählungen) ist ein Fachverfahren zur Auswertung von Verkehrszählungen. Es ermöglicht den Beschäftigten des Mobilitätsreferats die Verkehrsentwicklung in München zu dokumentieren und zu analysieren. Zugrunde liegen Daten aus über 2000 Zählstellen.
 
Alle seit 1989 in München durchgeführten Verkehrszählungen können mit der Fachanwendung DAVe eingesehen werden. Zur Auswertung werden verschieden Diagramme angeboten, die bei Bedarf auch als PDF-Report heruntergeladen werden können. Weitere Zählstellen sowie neue Verkehrszählungen können angelegt und in direkter Kommunikation mit dem Zähldienstleister beauftragt werden.
Die erfassten Daten helfen bei der Analyse der Verkehrsentwicklung und werden zum Beispiel für die Planung neuer Radwege verwendet. Außerdem bilden sie die Grundlage für die [Verkehrsmengenkarte](https://stadt.muenchen.de/infos/verkehrsdaten.html), auf der interessierte Bürger*innen die Verkehrsbelastungen auf den Münchner Straßen online einsehen können.


![Screenshot einer Website mit einer Karte von München die aktuelle Zählstellen auflistet](/inhouse/DAVE_Karte.png)
![Screenshot einer Website mit dem Plan einer Straßenkreuzung, mit stilisierten Fahrspuren in unterschiedlichen Farben](/inhouse/DAVE-Standardansicht-Knoten-Strom-Belastungsplan.png)
![Screenshot einer Website mit Ganglinien](/inhouse/DAVE_Ganglinie.png)
![Screenshot einer Website mit Listenausgabe](/inhouse/DAVE_Listenausgabe.png)

## Technische Details

DAVe wurde mit der [Referenzarchitektur](../publish#refarch) der Landeshauptstadt München entwickelt. Im Backend wird Java Spring Boot und im Frontend TypeScript und [Vue.js](vuejs) verwendet. Ein Knoten-Strom-Belastungsplan, der die Verkehrsströme übersichtlich darstellt wurde mit Hilfe von SVG.js entworfen.

Die Daten liegen in zwei verschiedenen Datenbanken: Die für die Suche relevanten Daten, wie beispielsweise Lage oder Straßennamen, werden in ElasticSearch gespeichert. Das ermöglicht eine sehr performante Suche mit Suchvorschlägen in Echtzeit. Die für die Suche nicht benötigten Verkehrsdaten aus den Zählungen werden in einer relationalen Datenbank gespeichert.

DAVe kann per [helm chart installiert und betreiben werden](https://artifacthub.io/packages/helm/it-at-m/dave?modal=install).

Die aktuelle technischen Entwicklung mit interessierten Kommunen führen wir im [Project dave](https://github.com/orgs/it-at-m/projects/14/).
Dort sammlen wir alle Featurerequests und Bugs aus allen DAVe repositories (code, helm-charts, doku).


## Roadmap

Aktuell können nur Einzelzählungen hochgeladen werden.
In der zweiten Ausbaustufe von DAVe werden die Auswertungsmöglichkeiten von Messstellen (d.h. Dauerzählstellen für Kfz- und Radverkehr) integriert.
Damit werden alle aktuellen Auswertungsmöglichkeiten, die für die Zählstellen zur Verfügung stehen, soweit sinnvoll auch für Messstellen möglich sein.
Es werden auch einige zusätzliche Auswertungsoptionen, die nur für Dauerzählstellen sinnvoll sind hinzugefügt.
Zudem ist geplant, in einem Folgeprojekt (Zeithorizont: 2025) Fußverkehrsdaten zu integrieren.
