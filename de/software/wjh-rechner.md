---
title: WJH Orientierungsrechner
developer: LHM
code: https://github.com/it-at-m/wjh-rechner
codelinktext: github.com/it-at-m/wjh-rechner
linkapplication: https://kita-orientierungsrechner-wjh.muenchen.de/
licensingmodel: open source
license: MIT
tags:
  - application
  - eigenentwicklung
sortingPriority: 3
---

Der **WJH-Orientierungsrechner** ermöglicht eine Vorab-Berechnung einer möglichen Förderung durch die Wirtschaftliche Jugendhilfe (WJH) durch die Landeshauptstadt München.

---

## Über das Projekt

Der Rechner dient nur zur Orientierung über eine mögliche finanzielle Unterstützung beim KITA-Beitrag der freien Träger der LHM durch die wirtschaftliche Jugendhilfe des Sozialreferates (WJH).

Wird bei der Wirtschaftlichen Jugendhilfe des Sozialreferates ein Antrag auf Übernahme der Elternbeiträge für eine Kindertageseinrichtung (Kindergarten, Kinderkrippe, Kinderhort, Mittagsbetreuung) gestellt, so wird im Einzelfall geprüft, in welcher Höhe (Zuschuss oder volle Kostenübernahme) die Kosten übernommen werden können.

## Technische Details

Das Frontend wurde mit TypeScript und [Vue.js](vuejs) und [Vuetify](vuetifyjs) umgesetzt und wird im Rechenzentrum der Landeshauptstadt München auf [Openshift](openshift) gehosted.

Die Webanwendung ist als dynamische Seite konzipiert die ausschließlich im Browser des Anwenders ausgeführt wird.
Angaben die zu einer Vorab-Berechnung einer möglichen Förderung führen verlassen somit nicht den Kontext des Anwenders.
