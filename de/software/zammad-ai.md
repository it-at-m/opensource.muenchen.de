---
title: Zammad-AI
developer: LHM
code: https://github.com/it-at-m/zammad-ai
codelinktext: github.com/it-at-m zammad-ai
licensingmodel: open source
license: MIT
logo: /logo/320px-Logo-zammad.svg.png
tags:
- application
- eigenentwicklung
- start2025
- ai
sortingPriority: 2
---

__Zammad-AI__ ist eine GenAI-Middleware-Schicht für das [Zammad](zammad)-Ticketsystem. Sie unterstützt Helpdesk-Teams mit KI-gestütztem Ticket-Triage, Antwortentwürfen und wissensbasierten Antworten; die Verantwortung für Inhalte bleibt dabei immer bei den Mitarbeitenden.

---

Zammad-AI ist bewusst als eigenständig betreibbare Komponente neben [Zammad](zammad) umgesetzt und nicht Teil des Zammad-Kerns. Dadurch entwickeln sich GenAI-Funktionen unabhängig von den Zammad-Releasezyklen weiter, ohne das führende System zu verändern. Das System nimmt eingehende Tickets über ereignisgesteuerte Schnittstellen an, klassifiziert sie, leitet sie über konfigurierbare Regeln weiter und erstellt Antwortentwürfe auf Basis verbundener Wissensquellen – etwa der Zammad-Knowledge-Base und des Datensatzes der [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki). Antworten sind klar als KI-Vorschläge erkennbar, werden von Sachbearbeiter*innen geprüft und nur für klar abgegrenzte, risikoarme Kategorien vollständig automatisiert.

Die KI-Modelle sind modular und werden über einen Open-Source-Model-Hosting-Service konsumiert (gpt-oss-120b für Triage und Antworten, qwen3-embedding-4b für Retrieval). Ein eigener Guardrails-Service prüft Prompts und Antworten zusätzlich auf personenbezogene Daten und sensible Inhalte.

## Technische Einzelheiten

Zammad-AI besteht aus drei [Python](python)-Diensten, die als [Container](podman) betrieben werden:

- Workflow-Engine: [FastAPI](fastapi)- und [FastStream](https://faststream.ag2.ai/latest/faststream/)-Dienst für [REST](https://de.wikipedia.org/wiki/Representational_State_Transfer)-Endpunkte und ereignisgesteuerte [Kafka](kafka)-Verarbeitung von Ticket-Ereignissen.
- Index-Pipeline: synchronisiert Wissensinhalte in die [Qdrant](qdrant)-Vektordatenbank für Retrieval.
- Guardrails-Service: eigenständig betreibbarer Dienst für Sicherheits- und Inhaltsprüfungen von Prompts und Antworten.
- Observability: Tracing und Prompt-Management mit [Langfuse](langfuse), Metriken mit Prometheus und [Grafana](grafana).

---

Weitere Informationen: https://ki.muenchen.de/ki-systeme/zammad-ai

---
