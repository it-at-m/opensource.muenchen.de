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
- saas
sortingPriority: 2
---
__MUCGPT__ ist eine Webanwendung, die auf einem Sprachmodell (LLM) basiert und es Benutzern ermöglicht, zu chatten, Texte zusammenzufassen und MindMaps zu generieren.

---

## Über das Projekt

MUCGPT ist eine Webanwendung, die auf einem Sprachmodell basiert und Benutzern eine intuitive und vielseitige Plattform bietet. Mit Chat, Textzusammenfassung und Brainstorming-Tools können Benutzer schnell und einfach hochwertigen Text generieren, ihre Ideen organisieren und ihre Produktivität steigern.

### Chat-Feature:
![Screenshot der Chat Funktion von MUCGPT](/inhouse/mucgpt_chat.png)  
Die Chat-Funktion von MUCGPT ermöglicht es Benutzern, Textkonversationen mit einem Sprachmodell zu führen. Die Anwendung bietet eine  Palette von natürlichen Sprachverarbeitungsfunktionen, mehrstufige Unterhaltungen, Personalisierung der Antorten, Sentiment-Analyse, Wissensabruf und Aufgabenerfüllung, die alle dazu beitragen, dass die Antworten der Anwendung wie menschliche Interaktionen wirken.  

### Summarize-Feature:
![Screenshot der Zusammenfassen Funktion von MUCGPT](/inhouse/mucgpt_summarize.png)  
Mit der Zusammenfassungsfunktion von MUCGPT können Benutzer lange Texte oder Dokumente schnell und einfach zusammenfassen, indem sie die relevantesten Informationen extrahieren. Die Detailstufe der Zusammenfassung kann vom Benutzer angepasst werden, um eine präzise Zusammenfassung in kurzer, mittlerer oder langer Form zu erhalten 

### Brainstorming-Feature:
![Screenshot der Brainstorming Funktion von MUCGPT](/inhouse/mucgpt_brainstorming.png)  
Die Brainstorming-Funktion von MUCGPT ermöglicht es Benutzern, kreative Ideen zu entwickeln, indem sie Mind Maps erstellen und bearbeiten. Die Mind Maps können einfach heruntergeladen und mit der Open-Source-Software [Freeplane](freeplane) weiter bearbeitet werden.  

## Technische Einzelheiten

Die Architektur von MUCGPT ist in zwei Teile unterteilt: das Frontend und das Backend. MUCGPT wird als Docker-Container bereitgestellt und kann zusammen mit einer  [PostgreSQL](postgresql)-Datenbank betrieben werden.

Das Frontend basiert auf einem [Template von Azure](https://github.com/Azure-Samples/azure-search-openai-demo) und wurde mit React, [Typescript](typescript) und [Javascript](javascript) implementiert.

Das Framework, das zur Implementierung des Backends von MUCGPT verwendet wird, heißt [FastApi](fastapi). FastAPI ist ein modernes, schnelles Web-Framework zur Erstellung von APIs mit [python](python). Das Backend verwendet [LangChain](langchain) als Language Model Integration Framework.

---
__Dieser Website-Text wurde mithilfe von MUCGPT generiert.__
