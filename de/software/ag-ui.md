---
title: AG-UI
developerlink: https://docs.ag-ui.com/
code: https://github.com/ag-ui-protocol/ag-ui
licensingmodel: open source
license: MIT
logo: /logo/ag-ui_logo.png
tags:
- development
- ai
---

__AG-UI__ (Agent–User Interaction Protocol) ist ein offenes, ereignisbasiertes Protokoll für die Kommunikation zwischen KI-Agenten und nutzergerichteten Frontends. Es standardisiert, wie Streaming-Text, Tool-Calls und Agentenzustände ausgetauscht werden – komplementär zum [MCP](https://modelcontextprotocol.io/introduction)-Standard für Tools und Datenquellen.

---

Das Protokoll definiert einen kleinen Satz Ereignistypen (Nachrichten-Streaming, Tool-Calls, Zustands-Snapshots und -Deltas auf Basis von JSON Patch), die über Server-Sent Events, WebSockets oder Webhooks transportiert werden können. Damit kann dasselbe Frontend mit verschiedenen Agent-Runtimes sprechen – inklusive eines eigenen Adapters für [LangGraph](langchain).

Wir nutzen AG-UI in [MUCGPT](mucgpt) und [RIS-KI](riski) als spezifizierten Softwarestandard für die Kommunikation zwischen Agent-Backend und Benutzeroberfläche.

---
