---
title: MUCGPT
developer: LHM
code: https://github.com/it-at-m/mucgpt
codelinktext: github.com/it-at-m mucgpt
licensingmodel: open source
license: MIT
logo: /inhouse/mucgpt_logo.png
tags:
- application
- eigenentwicklung
- start2024
- ai
sortingPriority: 2
---

__MUCGPT__ is an assistant-first AI toolkit. It enables secure chat, text based task automation, and lets users create and share reusable assistants for recurring workflows.

---

MUCGPT focuses on assistants: reusable, workflow-specific chat configurations with their own instructions, behavior, optional tools and sharing scope. Chat is where work happens; assistants provide structure so recurring tasks become faster and more reliable. MUCGPT connects to OpenAI-compatible LLM endpoints and keeps chat history locally in the browser.

### Start Page
![Start Page](/inhouse/mucgpt_startpage.png)
A focused entry point to discover assistants, jump back into recent work and access tutorials.

### Chat
![Chat](/inhouse/mucgpt_chatscreen.png)  
Work with the LLM on almost any topic. Configure a system instruction to guide responses and adjust temperature to balance factual vs. creative output. Multi-turn conversations are supported; history is stored locally in the browser and can be revisited.

### Create Assistants
![Assistant Creator](/inhouse/mucgpt_assistant_creator.png)
Design reusable assistants that encode recurring instructions, tone, constraints and model settings. Optionally add starter prompts, follow-up actions and tools. Private assistants remain yours; you decide when to share.

### Share Assistants
![Share Assistants](/inhouse/mucgpt_share_assistants.png)
Publish assistants to selected teams or broader audiences. Ownership, scope and configuration are transparent so colleagues understand what an assistant does before relying on it.

### Canvas
Work side by side with the assistant: open a rich-text canvas panel next to any chat and draft documents together. The agent can write and edit the canvas directly while you follow the changes live; you can format text yourself, save versions, and export the document as Markdown, PDF, Word or Excel. Selected passages can be quoted into the chat for targeted revision.

### Chat with Documents *(from MUCGPT 2.1)*
Upload documents in the chat and let the assistant work with them: files are parsed to text, and the extracted content grounds the assistant's answers — ask questions about a PDF, summarize a report, or combine documents with your instructions. Documents are selected per conversation, and the model receives them through a read-only view: it can read and search them, but never modify them.

### Tool confirmation (human in the loop) *(from MUCGPT 2.1)*
Some tools require explicit user confirmation before they run. When the assistant calls such a tool, the answer pauses and an approval card appears in the chat, showing the tool, the exact arguments it would use (e.g. the search query that would be sent to the web) and the data protection level the tool may receive. Approve the call or reject it — on rejection the assistant continues without performing the action; a paused call that is never answered is cancelled and never executes.

### Additional Features

- Extensible tools: examples include summarization, brainstorming and easy language; the platform is designed to grow with organizational needs.
- Speech input (beta): dictate instead of typing — transcription runs entirely in the browser, no microphone content leaves the device.
- Default answer language: the assistant responds in the selected interface language unless you write in a different language.
- Model selection: choose from available models and adjust creativity to fit the task; model choices are transparent.
- Tutorials: guided examples and tips help users get value quickly.
- Dark mode and i18n: accessible UI with dark mode and internationalization.
- Output formats: correctly renders Markdown, plain HTML, Mermaid in Markdown code blocks, and LaTeX formulas (`$$ ... $$`).


## Technical details

MUCGPT follows a lean microservices architecture and can be deployed as containers together with a [PostgreSQL](postgresql) database.

- Frontend: React-based UI (from a Microsoft Azure template), implemented with [Typescript](typescript) and [Javascript](javascript).
- Core service: [FastAPI](fastapi) in [Python](python) for LLM orchestration and tools. Assistants run as DeepAgents agents on the [LangChain](langchain) runtime [LangGraph](https://github.com/langchain-ai/langgraph), state is persisted in [PostgreSQL](postgresql).
- Extension via open standards: external context sources (tools, knowledge bases) are integrated as [MCP](https://modelcontextprotocol.io/introduction) servers — for example the [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki); communication with the frontend follows the [AG-UI](ag-ui) protocol.
- Assistant service: [FastAPI](fastapi) in [Python](python) with [PostgreSQL](postgresql) for assistant configuration and sharing.
- API Gateway and SSO: entry point with authentication (e.g. [Keycloak](keycloak)). Optional observability with [Langfuse](langfuse); optional document parsing via a separate [Xberg](xberg) container.

---

More information: https://ki.muenchen.de/ki-systeme/mucgpt

---
