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

__AG-UI__ (Agent–User Interaction Protocol) is an open, event-based protocol for the communication between AI agents and user-facing frontends. It standardizes how streaming text, tool calls and agent state are exchanged — complementary to the [MCP](https://modelcontextprotocol.io/introduction) standard for tools and data sources.

---

The protocol defines a small set of event types (message streaming, tool calls, state snapshots and deltas based on JSON Patch) that can be transported over Server-Sent Events, WebSockets or webhooks. This allows the same frontend to talk to different agent runtimes, including a dedicated adapter for [LangGraph](langchain).

We use AG-UI in [MUCGPT](mucgpt) and [RIS-KI](riski) as specified software standard for the communication between agent backend and user interface.

---
