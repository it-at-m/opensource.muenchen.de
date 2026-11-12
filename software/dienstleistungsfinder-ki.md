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

__Dienstleistungsfinder KI-Suche__ lets citizens find municipal services on muenchen.de with everyday language. Based on a Retrieval-Augmented-Generation (RAG) approach it understands questions like "Meine Oma braucht einen Rechner, gibt es einen Zuschuss?" and answers with grounded quotes from the official service pages.

---

The search combines classic BM25 keyword search with semantic embeddings in [Qdrant](qdrant) (hybrid search). Results are re-ranked by a separate reranking model and boosted by current page popularity, so that frequently visited services appear higher. For each retrieved document a large language model generates an answer, a literal quotation and a suitability judgment — documents that cannot answer the question are filtered out. The system is evaluated continuously against a human-created gold standard (MRR ≈ 0.67, Recall@10 ≈ 86 %).

The backend additionally exposes the retrieval endpoint as a [MCP](https://modelcontextprotocol.io/introduction) server, so other AI applications of the city — for example [MUCGPT](mucgpt) — can query official Munich service information as a context source.

## Technical details

- Frontend: [Vue](vuejs) web component that can be embedded on any city website.
- Backend: [FastAPI](fastapi) service in [Python](python) with [LangChain](langchain) for the RAG pipeline and Qdrant hybrid search.
- Indexer: batch job reading service pages from the CMS, transforming them to Markdown and upserting embeddings into Qdrant.
- Models: OpenAI-compatible endpoints for embeddings (text-embedding-3-large) and answers (gpt-4.1-mini) plus a separate reranking model.
- Observability: tracing and prompt management with [Langfuse](langfuse).

---

More information: https://ki.muenchen.de/ki-systeme/dlf

---
