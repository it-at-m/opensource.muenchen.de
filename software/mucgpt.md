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
__MUCGPT__ is a web interface based on a large language model (LLM) that allows users to chat, summarise text and brainstorm.

---

## About the project

MUCGPT is an innovative project that harnesses the power of language models to provide users with an intuitive and feature-rich web interface that can help them with a variety of tasks, from generating chat responses to summarising text and creating mind maps. The interface currently connects to one or more OpenAI-compliant LLM endpoints. With MUCGPT, users can easily generate high-quality text, organise their ideas and improve their productivity, all in one convenient platform.

### Chat-Feature:
![Screenshot of a the chat function of MUCGPT](/inhouse/mucgpt_chat.png)  
The chat function of MUCGPT enables users to have text-based conversations with the LLM, which can provide information on a wide range of topics, thanks to its advanced language model. MUCGPT offers a variety of features, including natural language processing, multi-turn conversations, personalization, sentiment analysis, knowledge retrieval, and task completion, which enable it to generate responses that closely resemble human-like interaction. With MUCGPT, users can customize the system prompt and adjust the response temperature to control the level of randomness or creativity in the generated output.

### Summarize-Feature:
![Screenshot of a the summarize function of MUCGPT](/inhouse/mucgpt_summarize.png)  
MUCGPT's Summarize function enables users to create summaries of long texts or documents by extracting the most relevant information. The level of detail of the generated summary can be adjusted by the user, with three levels of detail available: short, medium, and long.

### Brainstorming-Feature:
![Screenshot of a the brainstorming function of MUCGPT](/inhouse/mucgpt_brainstorming.png)  
With MUCGPT's Brainstorming function, users can generate mind maps to aid them in exploring ideas related to a particular topic. The resulting mind maps can be downloaded and edited further using [Freeplane](freeplane).      


## Technical details

The architecture of MUCGPT is divided into two parts, the frontend and the backend. MUCGPT can be deployed as an docker container together with an [PostgreSQL](postgresql) database.

The frontend is based on a [template from Microsoft Azure](https://github.com/Azure-Samples/azure-search-openai-demo) and is implemented using React, [Typescript](typescript) and [Javascript](javascript).

The framework used to implement the backend of MUCGPT is called [FastAPI](fastapi) and is written in [python](python). The backend uses [LangChain](langchain) to connect to various LLM providers.

---
__This site text was generated using MUCGPT.__
