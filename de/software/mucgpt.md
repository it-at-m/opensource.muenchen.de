---
title: MUCGPT
developer: LHM
code: https://github.com/it-at-m/mucgpt
codelinktext: github.com/it-at-m mucgpt
licensingmodel: open source
license: MIT
logo: /inhouse/mucgpt_logo.png
tags:
- application
- eigenentwicklung
- start2024
- ai
sortingPriority: 2
---

__MUCGPT__ ist ein KI-Werkzeug mit Assistenten im Fokus. Es ermöglicht sicheres Chatten, Automatisierung textbasierter Aufgaben und erlaubt das Erstellen und Teilen wiederverwendbarer Assistenten für wiederkehrende Arbeitsabläufe.

---

MUCGPT setzt auf Assistenten: wiederverwendbare, auf Workflows zugeschnittene Chat-Konfigurationen mit eigenen Instruktionen, Verhalten, optionalen Tools und Freigabebereich. Chats sind der Ort, an dem gearbeitet wird; Assistenten bringen Struktur, damit wiederkehrende Aufgaben schneller und zuverlässiger gelingen. MUCGPT bindet OpenAI-kompatible LLM-Endpunkte an; die Chat-Historie bleibt lokal im Browser.

### Startseite
![Startseite](/inhouse/mucgpt_startpage.png)
Einstieg zum Entdecken von Assistenten, zuletzt genutzten Arbeiten und Tutorials.

### Chat
![Chatansicht](/inhouse/mucgpt_chatscreen.png)  
Klarer Arbeitsbereich zur Interaktion mit dem Sprachmodell. System-Anweisung und Temperatur lassen sich konfigurieren, um Tonalität und Kreativität zu steuern. Mehrstufige Konversationen werden unterstützt; der Verlauf bleibt lokal im Browser und kann fortgesetzt werden.  

### Assistenten erstellen
![Assistenten-Erstellung](/inhouse/mucgpt_assistant_creator.png)
Wiederverwendbare Assistenten entwerfen, die Instruktionen, Ton, Randbedingungen und Modelleinstellungen kodifizieren. Optional Startprompts, Folgeaktionen und Tools. Private Assistenten bleiben privat; Sie entscheiden, wann Sie teilen.

### Assistenten teilen
![Assistenten teilen](/inhouse/mucgpt_share_assistants.png)
Assistenten mit ausgewählten Teams oder breiter veröffentlichen. Eigentümerschaft, Gültigkeitsbereich und Konfiguration sind transparent, damit Kolleg*innen verstehen, was ein Assistent leistet.

### Weitere Funktionen

- Erweiterbare Tools: Beispiele sind Zusammenfassen, Brainstorming und Leichte Sprache; die Plattform ist auf Erweiterbarkeit ausgelegt.
- Modellauswahl: verfügbare Modelle wählen und Kreativität passend zur Aufgabe einstellen; die Auswahl ist transparent.
- Tutorials: geführte Beispiele und Tipps für einen schnellen Einstieg.
- Dark Mode und Internationalisierung: barrierearme Oberfläche mit Dark Mode und i18n.
- Ausgabeformate: korrekte Darstellung von Markdown, Plain HTML, Mermaid in Markdown-Codeblöcken sowie LaTeX-Formeln (`$$ ... $$`).

## Technische Einzelheiten

MUCGPT folgt einer schlanken Microservices-Architektur und kann als Container gemeinsam mit einer [PostgreSQL](postgresql)-Datenbank betrieben werden.

- Frontend: React-basierte Oberfläche (aus einem Azure-Template), implementiert mit [Typescript](typescript) und [Javascript](javascript).
- Core-Service: [FastAPI](fastapi) in [Python](python) für LLM-Orchestrierung und Tools, mit LangGraph für Agent-Workflows.
- Assistant-Service: [FastAPI](fastapi) in [Python](python) mit [PostgreSQL](postgresql) für Assistenten-Konfiguration und Freigaben.
- API-Gateway und SSO: Einstiegspunkt mit Authentifizierung (z. B. [Keycloak](keycloak)). Optional Observability mit [Langfuse](langfuse); optional Dokumenten-Parsing über Kreuzberg.

---

Weitere Informationen: https://ki.muenchen.de/ki-systeme/mucgpt

---
