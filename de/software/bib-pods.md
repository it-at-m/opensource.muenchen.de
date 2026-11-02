---
title: Bibliotheks-Pods
developer: LHM
developerlink: https://it-at-m.github.io/bib-pods/
code: https://github.com/it-at-m/bib-pods
codelinktext: github.com/it-at-m bib-pods
licensingmodel: open source
license: MIT
tags:
  - application
  - eigenentwicklung
---

Mit **Bibliotheks-Pods** bekommen Bibliotheksnutzer\*innen Empfehlungen, die zu ihnen passen, und ihre Daten bleiben bei ihnen.

---

Nutzer\*innen hinterlegen ihre Interessen in einem Profil: Lieblingsautor\*innen, Themen, Genres, Orte und Sprachen sowie eine Merkliste.
Das Profil liegt bei ihnen selbst, in einem [Solid Pod](https://solidproject.org/) oder lokal im Browser.
Die [Münchner Stadtbibliothek](https://www.muenchner-stadtbibliothek.de/) liest es nur, solange die Nutzer\*innen das erlauben, schlägt passende Titel aus ihrem Bestand vor und behält nichts davon.

Die Webseite der Bibliothek basiert auf [TYPO3](./typo3) und wird mit einem Plug-in erweitert.
Andere Bibliotheken sollen das System nachnutzen können.
Langfristig könnten auch andere Apps und Dienste ihre Angebote mit demselben Profil personalisieren, ohne selbst Daten über ihre Nutzer\*innen zu speichern.

Das Projekt wird unterstützt durch die Abteilung [Media & Digital der Münchner Stadtbibliothek](https://www.muenchner-stadtbibliothek.de/daten-algorithmen) und das [OSPO](../ospo).
Auch die Landeshauptstadt Kiel empfiehlt Ländern und Kommunen in ihrem Positionspapier [Digitale Souveränität mit Solid](https://positionspapier-solid-in-der-verwaltung-29ff8c.usercontent.opencode.de/), Solid zu erproben.


## Open Source Sabbatical

Im Jahr 2026 haben wir ein [Open Source Sabbatical](../sabbatical) an Bibliotheks-Pods vergeben.
Mit dem Laborprojekt erproben wir [Solid](https://solidproject.org/) an einem städtischen Angebot.
Folgende Schwerpunkte werden angegangen:

* Nutzer\*innen speichern ihr Profil in ihrem eigenen Solid Pod oder lokal im Browser. Sie können es jederzeit ansehen, ändern und mitnehmen.
* Vorschläge aus dem Bestand der Münchner Stadtbibliothek. Nutzer\*innen wählen selbst, welche Arten von Empfehlungen sie sehen, etwa mehr von ihren Lieblingsautor\*innen oder Titel zu ihren Themen.
* Einbindung in die Bibliothekswebseite als [TYPO3](./typo3)-Extension. Aus demselben Code entsteht auch eine Demo-Seite zum Ausprobieren.
* Ein gemeinsames Vokabular für Interessen, das sich an bibliothekarischen Normdaten wie der GND orientiert, damit andere Bibliotheken es nutzen und mitentwickeln können.
* Ein SDK ohne Bibliotheksbezug, mit dem auch andere Apps und Dienste Profile im Pod lesen und schreiben können.
