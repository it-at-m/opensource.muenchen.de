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
__PostgreSQL__ ist ein freies, objektrelationales Datenbankmanagementsystem (ORDBMS) mit Schwerpunkt auf Erweiterbarkeit und SQL-Konformität.


---

Um sich auf eine Technologie zu konzentrieren, wird seit 2024 PostgreSQL als Default-Datenbanksystem für neue Anwendungsfälle bevorzugt.
Das betrifft unsere [Eigenentwicklungen](/de/publish) als auch die IT-Infrastrukturvorgaben für die Vergabe von Fachanwendungen.
Mit PostgreSQL nutzen wir ein stabiles und etabliertes Datenbanksystem, das uns vor allem auch Herstellerunabhängigkeit ermöglicht.
Nur in technisch begründeten Ausnahmefällen können auch andere Datenbanksysteme eingesetzt werden.

Zusammen mit dem ebenfalls freien [MariaDB](mariadb) nutzen derzeit etwa 40% unserer Datenbankinstanzen ein Open-Source-Datenbanksystem.

Mit der Open-Source-Erweiterung **pgvector** bekommt PostgreSQL zusätzlich eine Vektor-Ähnlichkeitssuche: Vektortypen, HNSW-/IVFFlat-Indizes und Distanzoperatoren über Embeddings werden direkt in der Datenbank ergänzt — so lässt sich für viele Anwendungsfälle ein separates Vektordatenbank-System vermeiden.
Wir nutzen pgvector in [RIS-KI](riski), das die Embeddings der Ratsdokumente direkt neben den relationalen Daten im offiziellen pgvector-Container-Image ablegt. Die [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki) nutzt für ihre hybride Suche die dedizierte Vektordatenbank [Qdrant](qdrant); [Zammad-AI](zammad-ai) nutzt Qdrant für das Retrieval.

