---
title: Dienstleistungsfinder KI-Suche
developer: LHM
code: https://github.com/it-at-m/dienstleistungsfinder-ki
codelinktext: github.com/it-at-m dienstleistungsfinder-ki
licensingmodel: open source
license: MIT
logo: /inhouse/dlf_logo.png
tags:
- application
- eigenentwicklung
- start2025
- ai
sortingPriority: 2
---

__Dienstleistungsfinder KI-Suche__ ermöglicht Bürger*innen, städtische Dienstleistungen auf muenchen.de in Alltagssprache zu finden. Auf Basis eines Retrieval-Augmented-Generation (RAG)-Ansatzes versteht sie Fragen wie „Meine Oma braucht einen Rechner, gibt es einen Zuschuss?“ und antwortet mit belegten Zitaten aus den offiziellen Dienstleistungsseiten.

---

Die Suche kombiniert klassische BM25-Schlüsselwortsuche mit semantischen Embeddings in [Qdrant](qdrant) (hybride Suche). Die Ergebnisse werden von einem separaten Re-Ranking-Modell neu sortiert und nach aktueller Seitenaufruf-Popularität gewichtet, damit häufig besuchte Dienste weiter oben erscheinen. Für jedes gefundene Dokument erzeugt ein großes Sprachmodell eine Antwort, ein wörtliches Zitat und eine Eignungseinschätzung – Dokumente, die die Frage nicht beantworten können, werden herausgefiltert. Das System wird laufend gegen einen händisch erstellten Goldstandard evaluiert (MRR ≈ 0,67, Recall@10 ≈ 86 %).

Das Backend stellt den Retrieval-Endpunkt zusätzlich als [MCP](https://modelcontextprotocol.io/introduction)-Server bereit, sodass andere KI-Anwendungen der Stadt – zum Beispiel [MUCGPT](mucgpt) – offizielle Münchner Dienstleistungsinformationen als Kontextquelle abfragen können.

## Technische Einzelheiten

- Frontend: [Vue](vuejs)-Webkomponente, die sich auf beliebigen städtischen Webseiten einbetten lässt.
- Backend: [FastAPI](fastapi)-Dienst in [Python](python) mit [LangChain](langchain) für die RAG-Pipeline und Qdrant-Hybridsuche.
- Indexer: Batch-Job, der Dienstleistungsseiten aus dem CMS einliest, nach Markdown transformiert und Embeddings schrittweise in Qdrant aktualisiert.
- Modelle: OpenAI-kompatible Endpunkte für Embeddings (text-embedding-3-large) und Antworten (gpt-4.1-mini) sowie ein separates Re-Ranking-Modell.
- Observability: Tracing und Prompt-Management mit [Langfuse](langfuse).

---

Weitere Informationen: https://ki.muenchen.de/ki-systeme/dlf

---
