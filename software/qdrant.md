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
__Qdrant__ (read: quadrant) is a container-based vector similarity search engine and vector database. 

---

We use Qdrant as the standard vector database of our GenAI stack.
The [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki) relies on its hybrid search that combines BM25 keyword vectors with semantic embeddings, and [Zammad-AI](zammad-ai) performs retrieval over knowledge bases with the same combination of [LangChain](langchain) and Qdrant.
Media recommendations of the [Bibliotheks-Pods](bib-pods) are also served from Qdrant.