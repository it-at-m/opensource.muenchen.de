---
title: RIS-KI
developer: LHM
code: https://github.com/it-at-m/riski
codelinktext: github.com/it-at-m riski
licensingmodel: open source
license: MIT
logo: /inhouse/riski_logo.png
tags:
- application
- eigenentwicklung
- start2025
- ai
sortingPriority: 2
---

__RIS-KI__ ist die KI-Suche des Münchner Ratsinformationssystems (RIS). Sie ergänzt die bestehende Schlagwortsuche auf riski.muenchen.de um eine semantische, agentenbasierte Suche über Stadtratsanträge, Beschlüsse und Gremiumsdokumente.

---

Statt eines einzelnen Retrieval-Aufrufs plant ein Agent auf Basis von [LangGraph](langchain) die Antwort in mehreren Schritten: Er wählt Werkzeuge aus, formuliert die Frage um, findet die relevantesten Dokumente per semantischer Suche (Retrieval Augmented Generation), prüft jedes Dokument erneut auf Relevanz mit Begründung und generiert erst dann eine Antwort. Gefundene Dokumente und Anträge werden separat angezeigt, damit die Ergebnisse nachvollziehbar bleiben. Bleiben keine relevanten Dokumente übrig, schlägt der Agent alternative Suchformulierungen vor.

Die Dokumentgrundlage wird aus der [OPARL](https://oparl.org/)-strukturierten RIS-Schnittstelle zusammengetragen, per OCR verarbeitet (Dokumentenextraktion) und als Embeddings in [PostgreSQL](postgresql) mit der pgvector-Erweiterung abgelegt. Die Kommunikation des Agenten mit dem Chat-Frontend folgt dem offenen [AG-UI](ag-ui)-Protokoll. RIS-KI ist derzeit in einer öffentlichen Beta-Version.

## Technische Einzelheiten

- Backend: [FastAPI](fastapi)-Dienst in [Python](python) mit einem [LangGraph](langchain)-Agenten und [Langfuse](langfuse) für Tracing und Prompt-Management.
- Datenpipeline: Extractor für die RIS-Dokumente und eine Verarbeitungspipeline, die über [Kafka](kafka) kommunizieren.
- Speicherung: [PostgreSQL](postgresql)-Datenbank mit pgvector für Embeddings; Redis puffert den Agentenzustand.
- Frontend: [Vue](vuejs)-Chat-UI, die das Agentenverhalten an die Nutzer*innen streamt.

---

Weitere Informationen: https://ki.muenchen.de/ki-systeme/riski

---
