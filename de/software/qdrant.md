---
title: Qdrant
developerlink: https://qdrant.tech/
code: https://github.com/qdrant/qdrant/
licensingmodel: open source
license: Apache
logo: /logo/qdrant.png
tags:
- infrastruktur
- k8s
- ai
---
__Qdrant__ (ausgesprochen: Quadrant) ist eine container-basierte Vektor-Datenbank mit integrierter Ähnlichkeitssuche.
---

Wir verwenden Qdrant als Standard-Vektordatenbank unseres GenAI-Stacks.
Die [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki) nutzt dessen hybride Suche, die BM25-Schlüsselwortsuche mit semantischen Embeddings kombiniert, und [Zammad-AI](zammad-ai) führt mit [LangChain](langchain) und Qdrant Retrieval über Wissensbestände durch.
Auch Empfehlungen ähnlich zur Merkliste der [Bibliotheks-Pods](bib-pods) werden aus Qdrant bedient.