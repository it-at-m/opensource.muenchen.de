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
  - k8s
sortingPriority: 2
---

Die aktuelle Terminvereinbarung der Stadt München wird durch das [Zeitmanagementsystem](https://www.berlin.de/moderne-verwaltung/buergerservice/vor-ort/terminvereinbarung/artikel.959989.php) (ZMS), was das Land Berlin zur Verfügung stellt, abgelöst.

---

## Über das Projekt

Die Online-Terminvereinbarung der Landeshauptstadt München ist für viele Bürger\*innen ein wichtiger Anlaufpunkt, um den persönlichen Kontakt mit den Servicestellen der Landeshauptstadt München zu planen und spätestens seit der Pandemie ein nicht mehr wegzudenkendes Werkzeug der Landeshauptstadt München. Das Softwareprodukt, auf dem die Lösung aufsetzt, wird jedoch in dieser Form vom bisherigen Hersteller nicht mehr unterstützt.  
Mit der dadurch fälligen Neuausrichtung wurden unterschiedliche verfügbare Lösungen geprüft. Die Landeshauptstadt München hat sich für die Einführung der Lösung für Termin- und Wartezeit-Managementsystem „ZMS“ entschieden. Diese Lösung entstand in einer Kooperation mit dem IT-Dienstleistungszentrum Berlin und BerlinOnline Stadtportal GmbH & Co. KG und steht unter einer Open Source Lizenz zur Verfügung. Die Einführung erfolgt seit September 2023 schrittweise.

Seit Anfang 2021 wird das Zeitmanagementsystem (ZMS) über ein Entwicklungsprojekt beim Eigenbetrieb it@M aufgebaut.

Die Anwendung bietet mehrere Komponenten.

- In der [Bürgeransicht](https://stadt.muenchen.de/buergerservice/terminvereinbarung.html) können Bürger\*innen Termine über den Online-Terminkalender auf muenchen.de buchen.
  Die Bürgeransicht ist eine Eigenentwicklung er LHM mit [Vue.js](vuejs).
- Der Sachbearbeiter\*innen Client im Backend ist eine Web-Anwendung, über die wartende Bürger\*innen per Aufrufanlagen zum Termin aufgerufen werden. Diese ist an die Open Source Datenbank Maria DB angebunden, die als Galera-Cluster läuft.
- Außerdem können Teamleitungen über eine Administrationsoberfläche die verfügbaren Termine steuern und über ein Extra-Modul Statistik-Reports (Anzahl Termine/Dienstleistung) ziehen.

![Screenshot Kundenstatistik im Zeitmanagementsystem](/inhouse/zms_kundenstatistik.jpg)
![Screenshot Sachbearbeiterplatz im Zeitmanagementsystem](/inhouse/zms_sachbearbeiter.jpg)
![Screenshot Wochenkalender im Zeitmanagementsystem](/inhouse/zms_wochenkalender.jpg)

## Technische Details

- Modulare Architektur mit API-Schnittstellen
- [Oberfläche für Bürger\*innen auf muenchen.de](https://github.com/it-at-m/eappointment-buergeransicht) – Eigenentwicklung mit Vue.js
- Source Code als PHP-Entwicklung ausgeführt
- Maria DB mit Galera Cluster
