---
title: Xberg
developerlink: https://xberg.io/
code: https://github.com/xberg-io/xberg
licensingmodel: open source
license: MIT
logo: /logo/xberg_logo.png
tags:
- development
- ai
- python
---

__Xberg__ ist eine extrem schnelle Document-Intelligence-Engine, geschrieben in Rust mit Bindings für viele weitere Sprachen (Python, Node, Go, Java, C#…). Sie extrahiert und strukturiert Texte, Tabellen und Metadaten aus über 100 Dateiformaten – PDFs, Office- und OpenDocument-Dateien, Tabellen, Präsentationen, Bilder, E-Mails und mehr – vollständig lokal und offline, mit OCR-Fallback (Tesseract, Paddle) und Content-Hash-Caching.

---

Xberg ist der Nachfolger der Open-Source-Bibliothek Kreuzberg und übernimmt mit einer neuen v1-Release-Linie deren Nutzerbasis. Sie kann als Bibliothek, als [REST](https://de.wikipedia.org/wiki/Representational_State_Transfer)-Dienst, als CLI oder als [MCP](https://modelcontextprotocol.io/introduction)-Server genutzt werden, was die Integration in GenAI-Systeme erleichtert: Zuverlässiges lokales Dokumenten-Parsing ist die Voraussetzung, um Dokumente in Embeddings und Retrieval-Pipelines einzuspeisen.

Wir betreiben Xberg als Container in [MUCGPT](mucgpt) 2.0, um Dokumenten-Upload und -Parsing in Chats zu ermöglichen („Chat with your Docs“), und nutzen sie in [Zammad-AI](zammad-ai), um Ticket-Anhänge für das Retrieval zu extrahieren.

---
