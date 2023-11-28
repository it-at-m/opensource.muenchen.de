---
Source: SNow
title: Zeitmanagementsystem
developer: Berlinonline
code: https://gitlab.com/eappointment
licensingmodel: open source
linkapplication: https://stadt.muenchen.de/buergerservice/terminvereinbarung.html
tags: 
- eigenentwicklung
- application
- kooperation
- start2021
sortingPriority: 2
---

Die aktuelle Terminvereinbarung der Stadt München wird durch das [Zeitmanagementsystem](https://www.berlin.de/moderne-verwaltung/buergerservice/vor-ort/terminvereinbarung/artikel.959989.php) (ZMS), was das Land Berlin zur Verfügung stellt, abgelöst.


---

## Über das Projekt

Die Online-Terminvereinbarung der Landeshauptstadt München ist für viele Bürger*innen ein wichtiger Anlaufpunkt, um den persönlichen Kontakt mit den Servicestellen der Landeshauptstadt München zu planen und spätestens seit der Pandemie ein nicht mehr wegzudenkendes Werkzeug der Landeshauptstadt München. Das Softwareprodukt, auf dem die Lösung aufsetzt, wird jedoch in dieser Form vom bisherigen Hersteller nicht mehr unterstützt. 
Mit der dadurch fälligen Neuausrichtung wurden unterschiedliche verfügbare Lösungen geprüft. Die Landeshauptstadt München hat sich für die Einführung der Lösung für Termin- und Wartezeit-Managementsystem „ZMS“ entschieden. Diese Lösung entstand in einer Kooperation des ITDZ Berlin mit dem Fraunhofer Institut für Nachrichtentechnik und steht unter einer Open Source Lizenz zur Verfügung. Die Einführung erfolgt ab 2022 schrittweise.


Seit 2022 wird das Zeitmanagementsystem (ZMS) über ein Entwicklungsprojekt beim Eigenbetrieb it@M aufgebaut.

Die Hauptmodule des ZMS sind:

* eine [Oberfläche für Bürger*innen auf muenchen.de](https://stadt.muenchen.de/buergerservice/terminvereinbarung.html), über die Termine für ausgewählte Dienstleistungen in einem Online-Terminkalender gebucht werden können.
* ein Webclient für Sachbearbeiter*innen, mit dem die Bürger*innen über Abrufanlagen zum Termin aufgerufen werden können.

Darüber hinaus bietet das System eine Administrations-Oberfläche für Teamleitungen zur Ressourcensteuerung. So können tagesaktuell je nach Verfügbarkeit mehr oder weniger Termine angeboten werden. Über ein Statistik-Modul besteht die Möglichkeit, Auswertung gebuchter Termine und Dienstleistungen (Reports) zu erstellen.

![Eine Hand die ein ipad hält, auf diesem ist ein Kalenderblatt dargestellt im Hintergrund ein Laptop](/terminvereinbarung_symbolbild.jpeg)


## Technische Details

* Modulare Architektur mit API-Schnittstellen
* [Oberfläche für Bürger*innen auf muenchen.de](https://github.com/it-at-m/eappointment-buergeransicht) – Eigenentwicklung mit Vue.js
* Source Code als PHP-Entwicklung ausgeführt
* Betrieben wird ZMS auf [Openshift](openshift)
* Maria DB mit Galera Cluster
