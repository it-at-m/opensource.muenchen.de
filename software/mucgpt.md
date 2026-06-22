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

### Additional Features

- Extensible tools: examples include summarization, brainstorming and easy language; the platform is designed to grow with organizational needs.
- Model selection: choose from available models and adjust creativity to fit the task; model choices are transparent.
- Tutorials: guided examples and tips help users get value quickly.
- Dark mode and i18n: accessible UI with dark mode and internationalization.
- Output formats: correctly renders Markdown, plain HTML, Mermaid in Markdown code blocks, and LaTeX formulas (`$$ ... $$`).


## Technical details

MUCGPT follows a lean microservices architecture and can be deployed as containers together with a [PostgreSQL](postgresql) database.

- Frontend: React-based UI (from a Microsoft Azure template), implemented with [Typescript](typescript) and [Javascript](javascript).
- Core service: [FastAPI](fastapi) in [Python](python) for LLM orchestration and tools, using LangGraph to manage agent workflows.
- Assistant service: [FastAPI](fastapi) in [Python](python) with [PostgreSQL](postgresql) for assistant configuration and sharing.
- API Gateway and SSO: entry point with authentication (e.g. [Keycloak](keycloak)). Optional observability with [Langfuse](langfuse); optional document parsing via Kreuzberg.

---

More information: https://ki.muenchen.de/ki-systeme/mucgpt

---
