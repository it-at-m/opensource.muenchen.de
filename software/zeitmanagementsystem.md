---
Source: SNow
application: Zeitmanagementsystem
developer: Berlinonline
code: https://gitlab.com/eappointment
licensingmodel: open source
linkapplication: null
tags: 
- eigenentwicklung
- server
- foss
- kooperation
screenshot: https://stadt.muenchen.de/.imaging/mte/lhm/image-aspect-ratio-3-2-280w/dam/Home/Stadtverwaltung/IT-Referat/Open-Source/opensource_terminvereinbarung.jpeg/jcr:content/opensource_terminvereinbarung.jpeg
logo: 
---

Die aktuelle Terminvereinbarung der Stadt München wird durch eine Open Source Anwendung (ZMS), die das Land Berlin zur Verfügung stellt, bis zum Jahr 2025 abgelöst.
Über das Projekt

---

## Über das Projekt

Die Online-Terminvereinbarung der Landeshauptstadt München  ist für viele Bürger*innen ein wichtiger Anlaufpunkt, um den persönlichen Kontakt mit den Servicestellen der Landeshauptstadt München zu planen und spätestens seit der Pandemie ein nicht mehr wegzudenkendes Werkzeug der Landeshauptstadt München. Das Softwareprodukt, auf dem die Lösung aufsetzt, wird jedoch in dieser Form vom bisherigen Hersteller nicht mehr unterstützt. 
Mit der dadurch fälligen Neuausrichtung wurden unterschiedliche verfügbare Lösungen geprüft. Die Landeshauptstadt München hat sich für die Einführung der Lösung für Termin- und Wartezeit-Managementsystem „ZMS“ entschieden. Diese Lösung entstand in einer Kooperation des ITDZ Berlin mit dem Fraunhofer Institut für Nachrichtentechnik und steht unter einer Open Source Lizenz zur Verfügung. Die Einführung erfolgt ab 2022 schrittweise.


Seit 2022 wird das Zeitmanagementsystem (ZMS) über ein Entwicklungsprojekt beim Eigenbetrieb it@M aufgebaut.

Die Hauptmodule des ZMS sind:

* eine Bürger*innenansicht auf muenchen.de
* , über die Termine für ausgewählte Dienstleistungen in einem Online-Terminkalender gebucht werden können
    ein Sachbearbeiter*innen Client (Webanwendung), mit dem die Bürger*innen über Abrufanlagen zum Termin aufgerufen werden können

Darüber hinaus bietet das System eine Administrations-Oberfläche für Teamleitungen zur Ressourcensteuerung. So können tagesaktuell je nach Verfügbarkeit mehr oder weniger Termine angeboten werden. Über ein Statistik-Modul besteht die Möglichkeit, Auswertung gebuchter Termine und Dienstleistungen (Reports) zu erstellen.

## Technische Details

* Modulare Architektur mit API-Schnittstellen
* Frontend – Eigenentwicklung mit Vue.js
* Source Code als PHP-Entwicklung ausgeführt
* Systemumgebung bei der Landeshauptstadt München: Open Shift (CAP)
* Maria DB mit Galera Cluster
