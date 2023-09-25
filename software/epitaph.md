---
application: Epitaph – Indoor Navigation
developer: LHM
code: https://github.com/it-at-m/epitaph_ips
licensingmodel: open source
license: MIT
tags: ["eigenentwicklung", "server", "foss"]
---
Epitaph ermöglicht eine lokale Positionserfassung auf mobilen Endgeräten. Die Open Source Library nutzt die Programmiersprache Dart und das Framework Flutter.

<!-- more -->


## Über das Projekt
Ein junger Mann schaut lächelnd auf sein Smartphone. Ein Lupen-Icon zeigt, dass es um eine Suchfunktion geht.

Das it@M InnovationLab und das Kreisverwaltungsreferat (KVR) arbeiten zusammen an einer Möglichkeit, das vorhandene Besucherleitsystem im Standesamt in der Ruppertstraße zu unterstützen. Hierfür wurde das gemeinsame Projekt „Epitaph – Indoor Navigation“ gestartet. Ziel des Projekts ist die Entwicklung einer Cross-Plattform Smartphone App, mit der Personen durch städtische Gebäude navigieren können.

Dafür arbeiten wir mit BLEs (Bluethooth Low Energy) Beacons. Diese strahlen Bluethooth-Signale aus, die vom Handy erfasst werden. Die App verwendet diese Signale zur Bestimmung der Position, die in der App angezeigt wird. So wird es den Nutzer*innen ermöglicht, sich im Gebäude zurechtzufinden.

## Technische Details

Die App wurde von unserem Team datensparsam auf Grundlage bestehender Open Source Software entwickelt. Sie funktioniert durch die Nutzung der Flutter-Technologie auf nur einer Codebasis Cross-Plattform sowohl auf Android als auch iOS Geräten, ohne nativ für diese Plattformen entwickelt zu sein.

Die Epitaph-Library hat zwei große Bestandteile: EpitaphIPS enthält Elemente für die Positionsberechnung und die Gebäudedarstellung, während EpitaphGraphs Module für Netzgraphendarstellungen und Wegfindungsalgorithmen bietet.
