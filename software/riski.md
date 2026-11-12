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

__RIS-KI__ is the AI search of the Munich Ratsinformationssystem (RIS). It supplements the existing keyword search at riski.muenchen.de with a semantic, agent-based search over council motions, resolutions and committee documents.

---

Instead of a single retrieval call, an agent based on [LangGraph](langchain) plans the answer in several steps: it selects tools, reformulates the question, retrieves the most relevant documents by semantic search (retrieval augmented generation), re-checks each document for relevance with justifications and only then generates an answer. Documents and motions found are displayed separately, so results remain verifiable. If no relevant documents remain, the agent proposes alternative formulations of the search.

The document base is collected from the [OPARL](https://oparl.org/)-structured RIS interface, processed by OCR (document extraction) and stored as embeddings in [PostgreSQL](postgresql) with the pgvector extension. The agent communication with the chat frontend follows the [AG-UI](ag-ui) open protocol. RIS-KI is currently in a public beta.

## Technical details

- Backend: [FastAPI](fastapi) service in [Python](python) with a [LangGraph](langchain) agent and [Langfuse](langfuse) for tracing and prompt management.
- Data pipeline: extractor for the RIS documents and a processing pipeline communicating via [Kafka](kafka).
- Storage: [PostgreSQL](postgresql) database with the official pgvector container image for embeddings; Redis caches agent state.
- Frontend: [Vue](vuejs) chat UI streaming agent behaviour to the user.

---

More information: https://ki.muenchen.de/ki-systeme/riski

---
