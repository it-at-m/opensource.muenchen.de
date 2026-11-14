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

### Canvas *(ab MUCGPT 2.1)*
![Canvas mit Dokument und Agent-Ausgabe](/inhouse/mucgpt_canvas.png)
Neben dem Chat lässt sich ein Rich-Text-Dokument öffnen und gemeinsam mit dem Assistenten bearbeiten: Der Assistent kann das Dokument schreiben und ändern, während Sie es live mitverfolgen; Sie können selbst formatieren, Versionen sichern und das Dokument als Markdown, PDF, Word oder Excel exportieren. Ausgewählte Textstellen lassen sich direkt in den Chat zitieren und gezielt überarbeiten lassen.

### Chat mit Dokumenten *(ab MUCGPT 2.1)*
![Dokumentdialog mit hochgeladenem Dokument](/inhouse/mucgpt_chat_documents.png)
Dokumente im Chat hochladen und als Kontext für die Antworten nutzen: Dateien werden zu Text extrahiert, und der Assistent arbeitet mit dem Inhalt — Fragen zu einem PDF stellen, einen Bericht zusammenfassen oder Dokumente mit eigenen Anweisungen kombinieren. Die Auswahl erfolgt pro Konversation, und das Modell erhält die Dokumente über eine schreibgeschützte Ansicht: Es kann sie lesen und durchsuchen, aber nie verändern.

### Tool-Bestätigung (Human in the Loop) *(ab MUCGPT 2.1)*
![Tool-Freigabekarte](/inhouse/mucgpt_tool_approval.png)
Manche Tools erfordern eine ausdrückliche Bestätigung, bevor sie ausgeführt werden. Ruft der Assistent ein solches Tool auf, pausiert die Antwort und eine Freigabekarte erscheint im Chat: Sie zeigt das Tool, die genauen Argumente (z. B. die Suchanfrage, die ans Web gehen würde) und die Datenschutzebene, die das Tool erhalten darf. Die Ausführung freigeben oder ablehnen — bei Ablehnung fährt der Assistent ohne das Tool fort; eine nie beantwortete pausierte Anfrage wird abgebrochen und nie ausgeführt.

### Weitere Funktionen

- Erweiterbare Tools: Beispiele sind Zusammenfassen, Brainstorming und Leichte Sprache; die Plattform ist auf Erweiterbarkeit ausgelegt.
- Spracheingabe: Diktieren statt Tippen — die Spracherkennung läuft komplett im Browser, kein Mikrofoninhalt verlässt das Gerät (vollwertiges Feature ab MUCGPT 2.1).
- Standard-Antwortsprache: Der Assistent antwortet in der gewählten Oberflächensprache, sofern Sie nicht in einer anderen Sprache schreiben.
- Modellauswahl: verfügbare Modelle wählen und Kreativität passend zur Aufgabe einstellen; die Auswahl ist transparent.
- Tutorials: geführte Beispiele und Tipps für einen schnellen Einstieg.
- Dark Mode und Internationalisierung: barrierearme Oberfläche mit Dark Mode und i18n.
- Ausgabeformate: korrekte Darstellung von Markdown, Plain HTML, Mermaid in Markdown-Codeblöcken sowie LaTeX-Formeln (`$$ ... $$`).

## Technische Einzelheiten

MUCGPT folgt einer schlanken Microservices-Architektur und kann als Container gemeinsam mit einer [PostgreSQL](postgresql)-Datenbank betrieben werden.

- Frontend: React-basierte Oberfläche (aus einem Azure-Template), implementiert mit [Typescript](typescript) und [Javascript](javascript).
- Core-Service: [FastAPI](fastapi) in [Python](python) für LLM-Orchestrierung und Tools. Assistenten laufen als DeepAgents-Agenten auf der [LangChain](langchain)-Runtime [LangGraph](https://github.com/langchain-ai/langgraph), der Zustand wird in [PostgreSQL](postgresql) persistiert.
- Erweiterung über offene Standards: Externe Kontextquellen (Tools, Wissensbasen) werden als [MCP](https://modelcontextprotocol.io/introduction)-Server angebunden — etwa die [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki); die Kommunikation mit dem Frontend folgt dem [AG-UI](ag-ui)-Protokoll.
- Assistant-Service: [FastAPI](fastapi) in [Python](python) mit [PostgreSQL](postgresql) für Assistenten-Konfiguration und Freigaben.
- API-Gateway und SSO: Einstiegspunkt mit Authentifizierung (z. B. [Keycloak](keycloak)). Optional Observability mit [Langfuse](langfuse); optional Dokumenten-Parsing über einen separaten [Xberg](xberg)-Container.

---

Weitere Informationen: https://ki.muenchen.de/ki-systeme/mucgpt

---
