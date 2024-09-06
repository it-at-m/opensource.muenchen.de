---
title: Wahllokalsystem
developer: LHM
developerlink: https://it-at-m.github.io/Wahllokalsystem/
code: https://github.com/it-at-m/Wahllokalsystem/
licensingmodel: open source
license: MIT
tags:
- application
- eigenentwicklung
- start2023
- k8s
sortingPriority: 2
---
Das __Wahllokalsystem__ ist eine Anwendung zur Erfassung und Übermittlung von Wahlergebnissen aus den Wahllokalen zum Wahlamt.

---

## Projekt

Das Wahllokalsystem wurde initial zur Bundestagswahl 2017 eingeführt, aber der Quellcode nicht veröffentlicht.
Im Rahmen einer geplante Lifecyclemaßnahme wird die gesamte Anwendung reviewed und dabei veröffentlicht.

Entlang von 3 [milestones](https://github.com/it-at-m/Wahllokalsystem/milestones?direction=asc&sort=title) sind wir noch dabei einzelne Module Schritt für Schritt zu reviewen und hier zu veröffentlichen.


## Funktion

Der Hauptfokus der Software liegt auf den Handlungen am Wahltag. Sie unterstützt bei der Eröffnung des Wahllokals, indem man z.B. anhand einer Checkliste prüfen kann, dass alle notwendigen Materialien für die Durchführung vorhanden sind. Während der Zeit der Stimmabgabe wird übermittelt, wie viele Wähler*innen bereits im Wahllokal waren. Des Weiteren werden über die Software wahlrelevante Vorkommnisse dokumentiert.

Außerdem wird zu definierten Zeitpunkten abgefragt, welche Mitglieder des Wahlvorstandes im Wahllokal anwesend sind. So wird sichergestellt, dass das Gremium zu jederzeit ausreichend besetzt ist.

Während der Stimmauszählung, und der damit verbundenen Erstellung der Niederschrift, unterstützt das System den Wahlvorstand bei der korrekten Erfassung der Daten. Dazu gibt es zahlreiche Regeln und Konsistenzprüfungen, die dem Wahlvorstand Feedback geben, ob die erfassten Daten korrekt sind.

Das Wahlamt kann über das System den Wahlbezirken wichtige Informationen zukommen lassen.

Die so erfassten Wahlergebnisse eines Wahllokals, werden einerseits direkt an das Wahlamt übermittelt, wo sie dann zeitnah auf [wahlen-muenchen.de](https://www.wahlen-muenchen.de/) veröffentlicht werden.
Andereseits werden die Ergebnisse als Niederschrift in Papierform ausgedruckt und noch am Wahlabend vom Wahlvorstand unterschrieben und dem Wahlamt überstellt werden.
