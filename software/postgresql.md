---
title: PostgreSQL
developerlink: https://www.postgresql.org/
licensingmodel: open source
license: PostgreSQL
logo: /logo/233px-Postgresql_elephant.svg.png
sponsor: https://2026.pgconf.de/sponsors/#gold
tags:
- infrastruktur
- support
- devstack
sortingPriority: 2
---
__PostgreSQL__ is a free, object-relational database management system (ORDBMS) emphasizing extensibility and SQL compliance.


---

In order to focus on one technology, PostgreSQL has been preferred as the default database system for new use cases since 2024.
This applies to our [in-house developments](/publish) as well as the IT infrastructure requirements for the procurement of specialist applications.
With PostgreSQL, we use a stable and established database system that, above all, allows us to be vendor-independent.
Other database systems can only be used in technically justified exceptions.

Together with [MariaDB](mariadb), which is also free, around 40% of our database instances currently use an open source database system.

With the open-source extension **pgvector**, PostgreSQL additionally gains vector similarity search: vector types, HNSW/IVFFlat indexes and distance operators over embeddings are added directly in the database — so a separate vector database can be avoided for many workloads.
We use pgvector in [RIS-KI](riski), which stores the embeddings of council documents directly alongside its relational data in the official pgvector container image. The [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki) uses the dedicated vector database [Qdrant](qdrant) for its hybrid search; [Zammad-AI](zammad-ai) uses Qdrant for retrieval.
