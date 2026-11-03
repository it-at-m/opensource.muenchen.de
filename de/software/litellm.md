---
title: LiteLLM
developerlink: https://www.litellm.ai/
code: https://github.com/BerriAI/litellm/
licensingmodel: open core
license: MIT
logo: /logo/litellm.png
tags:
- infrastruktur
- k8s
- ai
- python
---
__LiteLLM__ bietet ein Gateway für den Zugriff auf mehrere große Sprachmodelle (LLMs) und andere KI-Modelle über eine einheitliche API.
Es ermöglicht Nutzungs-Tracking, Caching und Zugriffskontrolle und bietet eine webbasierte Benutzeroberfläche für die Verwaltung, Überwachung und das Testen der Modelle.

---

Wir verwenden LiteLLM, um ein einziges Gateway für alle Aufrufe an KI-Modelle wie LLMs bereitzustellen.
Diese soll sowohl von unseren selbst erstellten KI-Anwendungen wie [MUCGPT](mucgpt) als auch von existierenden Anwendungen, die lediglich mit LLM-Schnittstellen interagieren, genutzt werden.

Der Proxy ist dabei breit kompatibel an einem einzigen Endpunkt: Er stellt die **[OpenAI Chat Completions API](https://docs.litellm.ai/docs/proxy_server)**, die neuere **[OpenAI Responses API](https://docs.litellm.ai/docs/response_api)** und die **[Anthropic Messages API](https://docs.litellm.ai/docs/anthropic_unified)** bereit — sodass die Client-SDKs verschiedener Agenten und Frameworks sich ohne Anpassungen verbinden können. Das Responses-API-Format von OpenAI wird dabei derzeit als offene **Open Responses**-Spezifikation (Linux-Foundation-Projekt) standardisiert; die Gateway-Schnittstelle hält unsere Anwendungen unabhängig von einzelnen Modellanbietern.
