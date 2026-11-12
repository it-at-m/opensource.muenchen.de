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
__LiteLLM__ provides a gateway to access multiple large language models (LLMs) and other AI models via an unified API.
It allows usage tracking, caching and access control and provides a web based UI for administration, monitoring and testing of the models.

---

We use LiteLLM to provide a single entry point for all AI model requests in our self-built AI applications like [MUCGPT](mucgpt) as well as existing applications that integrate with our AI models.  

The proxy acts broadly compatible at a single endpoint: it exposes the **[OpenAI Chat Completions API](https://docs.litellm.ai/docs/proxy_server)**, the newer **[OpenAI Responses API](https://docs.litellm.ai/docs/response_api)** and the **[Anthropic Messages API](https://docs.litellm.ai/docs/anthropic_unified)** — so client SDKs of different agents and frameworks can connect without changes. OpenAI's Responses API format is thereby currently being standardized as the open **Open Responses** specification (Linux Foundation project); the gateway interface keeps our applications independent of individual model providers.