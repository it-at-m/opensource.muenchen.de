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

__Zammad-AI__ is a GenAI middleware layer for the [Zammad](zammad) ticket system. It supports helpdesk teams with AI-based ticket triage, suggested answers and knowledge-based responses, while the final responsibility always stays with the staff.

---

Zammad-AI is deliberately built as a separately deployable component next to [Zammad](zammad) rather than part of its core. This decouples GenAI features from Zammad release cycles and keeps the leading system untouched. It picks up incoming tickets over event-driven interfaces, classifies them, routes them based on configurable rules and drafts answers using connected knowledge sources such as the Zammad knowledge base and the [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki) data set. Answers are always marked as AI suggestions, are reviewed by staff before use and are only automated end-to-end for clearly bounded, low-risk categories.

The AI models are modular and are consumed via an open-source model hosting service (gpt-oss-120b for triage and answers, qwen3-embedding-4b for retrieval). Its own guardrail service additionally checks prompts and answers for personal data and sensitive content.

## Technical details

Zammad-AI consists of three [Python](python) services operated as [containers](podman):

- Workflow engine: [FastAPI](fastapi) and [FastStream](https://faststream.ag2.ai/latest/faststream/) service for [REST](https://en.wikipedia.org/wiki/REST) endpoints and event-driven [Kafka](kafka) processing of ticket events.
- Index pipeline: synchronises knowledge content into the [Qdrant](qdrant) vector database for retrieval.
- Guardrail service: independently operated service for content checks of prompts and answers.
- Observability: tracing and prompt management with [Langfuse](langfuse), metrics with Prometheus and [Grafana](grafana).

---

More information: https://ki.muenchen.de/ki-systeme/zammad-ai

---
