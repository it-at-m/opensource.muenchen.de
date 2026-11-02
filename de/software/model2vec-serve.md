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

__model2vec-serve__ ist unser leichtgewichtiger Server für [model2vec](https://github.com/MinishLab/model2vec)-Static-Embedding-Modelle: eine kleine, selbstgehostete Embeddings-API, die optimierte statische Embedding-Modelle auf CPU betreibt — ohne komplexe ML-Infrastruktur.

---

Der Server versteht klassische API-Formate: Anfragen im OpenAI-`/v1/embeddings`-Format (inklusive GET `/v1/models`) wie auch die Formate von HuggingFace TEI funktionieren direkt.
So lassen sich OpenAI-Embedding-Aufrufe durch ein privates, on-premise-Modell ersetzen — ohne Anpassung der Anwendungen.
API-Key-Authentifizierung, TLS, [Prometheus](https://prometheus.io/)-Metriken, strukturierte Logs und das Parallel-Betreiben mehrerer Modelle (etwa potion-multilingual-128M und potion-code-16M-v2) werden unterstützt.

model2vec-serve ist in [Rust](https://www.rust-lang.org/) mit der Crate `model2vec-rs` (der offiziellen Inferenz-Implementierung von model2vec) geschrieben und lässt sich als [Container](podman) wie auch über ein mitgeliefertes [Helm](https://helm.sh/)-Chart betreiben.
Die Entwicklung ist aktiv (aktuell: v0.6.0) und ergänzt unseren [GenAI-Stack](qdrant): schnelle lokale Embeddings ohne Abhängigkeit von externen Modellanbietern, zum Beispiel für [RAG](https://de.wikipedia.org/wiki/Retrieval_Augmented_Generation)-Pipelines wie in der [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki).

---
