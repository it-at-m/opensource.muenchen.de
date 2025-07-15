---
title: integreat
developer: Tür an Tür – Digitalfabrik gGmbH
developerlink: https://integreat-app.de/ueber-uns/
code: https://github.com/digitalfabrik/integreat-app
licensingmodel: open source
license: MIT
linkapplication: https://integreat.app/muenchen/
logo: /logo/integreat_logo.png
tags:
  - application
  - opencore
  - start2020
  - saas
---

**Integreat** ist eine lokale und mehrsprachige Integrations-Plattform für Zugewanderte, die in jeder Kommune ohne Beteiligung der IT-Abteilung eingesetzt werden kann.

---

Die LHM nutzt Integreat seit Februar 2020 als Software-as-a-Service.
Auf der Plattform Integreat München erhalten Geflüchtete und Neuzugewanderte mehrsprachige Erstinformationen, um sie beim Ankommen in München zu unterstützen und willkommen zu heißen – sowohl über die kostenlose und offline nutzbare Integreat App (Download via Google Play Store oder App Store), als auch unter [integreat.app/muenchen/](https://integreat.app/muenchen/).
Der Überblick über die Münchner Angebotslandschaft ist auch eine große Hilfe für Haupt- und Ehrenamtliche.

## Open Source Sabbatical

Integreat erhielt bereits den [Münchner Innovationspreise 2024 für das Digitale Welcome Center](https://stadt.muenchen.de/news/innovationspreis-muenchen2024.html#id2).
Zusätzlich haben wir das erste [Open Source Sabbatical](../sabbatical) im ersten Halbjahr 2025 an das Projekt [integreat-chat](https://github.com/digitalfabrik/integreat-chat) vergeben, um einen Chat-Service in die Integreat App zu integrieren.

Der integreat-chat nutzt ein Large Language Model, das basierenden auf den bestehenden Inhalten der Integreat-App Fragen beantwortet.
Bei eingehenden Anfragen generiert das System Antwortvorschläge für die menschlichen Sachbearbeiter\*innen in unserem [Zammad](zammad).

Der Chatbot befindet sich derzeit in der Beta-Phase und wurde im Rahmen des Projekts Munich Integration Assistant (MIA) gezielt weiterentwickelt und getestet. Dabei wurde geprüft, ob ein Open Source Chatbot auf Basis aktueller LLMs verlässliche, mehrsprachige Antworten liefern kann und dabei vollständiselbst betrieben wird, um digitale Souveränität zu gewährleisten.

Die Ergebnisse sind vielversprechend: In ca. 50 % der Fälle liefert der Chatbot passende Antworten, auch bei komplexeren Anfragen. Bei Fragen ohne hinterlegte Inhalte gibt er zuverlässig Rückmeldung. Der Chatbot ist aktuell für 24 Sprachen aktiviert. Für Übersetzungen wird Google Gemma 3 genutzt, mit durchweg positiver Bewertung der Übersetzungsqualität.

Im Mai 2025 wurde der integreat-chat im Wartebereich des  [Integrationsberatungszentrums IBZ Sprache und Beruf](https://stadt.muenchen.de/service/info/abteilung-migration-integration-teilhabe/10320352/) mit 12 Personen getestet. Dabei wurden Übersetzungen mit durchschnittlich 4,9 von 5 Punkten, die Antworten mit 4 von 5 Sternen und die verlinkten Inhalte mit 4,8 von 5 Punkten bewertet.

Der Chatbot unterstützt damit nicht nur Ratsuchende, sondern entlastet auch Mitarbeiter\*innen und ergänzt das bestehende Beratungsangebot sinnvoll, besonders außerhalb der Öffnungszeiten. Eine Integration der im MIA-Projekt entwickelten Chatbot-Lösung in das geplante [Welcome Center der Stadt München](https://stadt.muenchen.de/news/welcome-center.html) ist vorgesehen.

