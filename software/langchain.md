---
title: LangChain
developerlink: https://python.langchain.com/docs/introduction/
code: https://github.com/langchain-ai/langchain/
licensingmodel: open source
license: MIT
logo: /logo/langchain.jpg
tags:
- development
- ai
- python
sortingPriority: 102
---
__LangChain__ is a framework for developing applications powered by large language models (LLMs). The MIT-licensed ecosystem provides the whole stack for agentic applications in three layers: LangChain as the framework with integrations for models, tools and vector databases; __LangGraph__ as the low-level runtime for durable, stateful agent workflows; and __DeepAgents__, which builds ready-to-run deep agents with planning, sub-agents and a virtual filesystem on top of both.

---

We use the different layers across our [Python](python) AI systems. [MUCGPT](mucgpt) implements its assistants as agents created with DeepAgents, running on LangGraph with agent state persisted in [PostgreSQL](postgresql). The agent-based search of [RIS-KI](riski) is likewise driven by a LangGraph agent. The RAG pipelines of the [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki) and [Zammad-AI](zammad-ai) use the LangChain framework with its integrations, for example for [Qdrant](qdrant).

All layers connect to OpenAI-compatible model endpoints and come as [Python](python) libraries, so they are used inside our own services — we consume the ecosystem without operating additional LangChain infrastructure.
