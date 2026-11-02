---
title: model2vec-serve
developer: LHM
code: https://github.com/it-at-m/model2vec-serve
codelinktext: github.com/it-at-m model2vec-serve
licensingmodel: open source
license: MIT
tags:
- infrastruktur
- eigenentwicklung
- start2026
- ai
sortingPriority: 3
---

__model2vec-serve__ is our lightweight server for [model2vec](https://github.com/MinishLab/model2vec) static embedding models: a small, self-hosted embeddings API that serves optimized static embedding models on CPU — without complex ML infrastructure.

---

The server speaks the classic API formats: requests in the OpenAI `/v1/embeddings` format (with GET `/v1/models`) as well as the HuggingFace TEI formats work out of the box.
This makes it a drop-in replacement for OpenAI embedding calls with a private, on-premise model — without changes to the applications.
Authentication via API key, TLS, [Prometheus](https://prometheus.io/)-metrics, structured JSON logs as well as serving of multiple models (e.g. potion-multilingual-128M and potion-code-16M-v2) are supported.

model2vec-serve is written in [Rust](https://www.rust-lang.org/) with the crate `model2vec-rs` (the official inference implementation of model2vec) and can be run as a [container](podman) as well as using the supplied [Helm](https://helm.sh/)-Chart.
It is in active development (currently version 0.6.0) and complements our [GenAI stack](qdrant): fast local embeddings without dependency on external model providers, for example for [RAG](https://en.wikipedia.org/wiki/Retrieval-augmented_generation)-pipelines as in the [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki).

---
