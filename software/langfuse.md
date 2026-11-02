---
title: Langfuse
developerlink: https://langfuse.com/
code: https://github.com/langfuse/langfuse/
licensingmodel: open core
license: MIT
logo: /logo/langfuse.png
tags:
- infrastruktur
- k8s
- ai
- contribute
---
__Langfuse__ is an open-source LLM engineering platform that helps teams collaboratively debug, analyze, and iterate on their LLM applications.

---

We use Langfuse for tracing, evaluation and prompt management of our AI systems — [MUCGPT](mucgpt), [Zammad-AI](zammad-ai), [RIS-KI](riski) and the [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki).

Everything runs on open standards: all traces are [OpenTelemetry](https://opentelemetry.io/) spans with the GenAI semantic conventions (model, inputs, outputs, token usage), ingested via the open **OTLP** protocol. Since v4, Langfuse ingests OTLP chunks natively without a reverse proxy and has replaced its own proprietary ingestion API. This keeps our observability vendor-neutral: identical telemetry can also be consumed by any other OTLP-capable backend we may want to use in the future.