---
title: LangChain
developerlink: https://python.langchain.com/docs/introduction/
code: https://github.com/langchain-ai/langchain/
licensingmodel: open source
license: MIT
logo: /logo/langchain.jpg
tags:
- development
- ai
- python
sortingPriority: 102
---
__LangChain__ ist ein Framework zur Entwicklung von Applikationen, die auf großen Sprachmodellen (LLMs) aufbauen. Das MIT-lizenzierte Ökosystem stellt für agentische Anwendungen den gesamten Stack bereit, in drei Schichten: LangChain als Framework mit Integrationen für Modelle, Tools und Vektordatenbanken; __LangGraph__ als Runtime für dauerhafte, zustandsbehaftete Agenten-Workflows; und __DeepAgents__, das darauf aufbauend einsatzfähige Deep Agents mit Planung, Sub-Agenten und virtuellem Dateisystem bereitstellt.

---

Wir nutzen die verschiedenen Schichten in unseren auf [Python](python) basierenden KI-Systemen. [MUCGPT](mucgpt) setzt seine Assistenten als mit DeepAgents erzeugte Agenten ein, die auf LangGraph laufen und ihren Zustand in [PostgreSQL](postgresql) persistieren. Die agentenbasierte Suche von [RIS-KI](riski) wird ebenfalls von einem LangGraph-Agenten angetrieben. Die RAG-Pipelines der [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki) und von [Zammad-AI](zammad-ai) nutzen das LangChain-Framework mit seinen Integrationen, zum Beispiel für [Qdrant](qdrant).

Alle Schichten verbinden sich mit OpenAI-kompatiblen Modellendpunkten und kommen als [Python](python)-Bibliotheken zum Einsatz, also innerhalb unserer eigenen Dienste — wir konsumieren das Ökosystem, betreiben dafür aber keine eigene LangChain-Infrastruktur.
