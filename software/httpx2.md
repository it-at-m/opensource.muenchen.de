---
title: HTTPX2
developerlink: https://pydantic.dev/docs/httpx2/
code: https://github.com/pydantic/httpx2
licensingmodel: open source
license: BSD-3-Clause
logo: /logo/httpx2_logo.png
tags:
- development
- ai
- python
- eval
---

__HTTPX2__ is a fully featured HTTP client for [Python](python) with sync and async APIs, support for HTTP/1.1 and HTTP/2, an integrated command line client as well as [Server-Sent Events](https://en.wikipedia.org/wiki/Server-Sent_Events) and WebSockets.

---

Written by Pydantic as the actively maintained successor of HTTPX, it arrives in our GenAI stack transitively: the newer OpenAI and Anthropic [Python](python) SDKs already include HTTPX2 directly.
The big advantage for us: HTTPX2 verifies TLS certificates against the operating system trust store out of the box, so the system CAs of the state environment work without any additional injection — we no longer need the separate truststore package.

We are currently evaluating HTTPX2 and plan to adopt it in our [Python](python)-based AI systems such as [Zammad-AI](zammad-ai) and the [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki), where it replaces HTTPX as drop-in successor.

---
