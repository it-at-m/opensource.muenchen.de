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

__Xberg__ is an extremely fast document intelligence engine, written in Rust with bindings for more languages (Python, Node, Go, Java, C#…). It extracts and structures text, tables and metadata from over 100 file formats — PDFs, Office and OpenDocument files, spreadsheets, presentations, images, e-mail and more — fully local and offline, with OCR fallback (Tesseract, Paddle) and content-hash caching.

---

Xberg is the successor of the open source library Kreuzberg and takes over its installation base with a new v1 release line. It can be used as library, as [REST](https://en.wikipedia.org/wiki/REST) service, as CLI or as [MCP](https://modelcontextprotocol.io/introduction) server, which makes it easy to integrate it into GenAI systems: reliable local document parsing is the prerequisite for feeding documents into embeddings and retrieval pipelines.

We run Xberg as a container in [MUCGPT](mucgpt) 2.0 to enable document upload and parsing in chats ("Chat with your Docs") and use it in [Zammad-AI](zammad-ai) to extract ticket attachments for retrieval.

---
