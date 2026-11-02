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

__HTTPX2__ ist ein funktionsreicher HTTP-Client für [Python](python) mit synchronen und asynchronen APIs, Unterstützung für HTTP/1.1 und HTTP/2, integriertem Kommandozeilen-Client sowie [Server-Sent Events](https://de.wikipedia.org/wiki/Server-Sent_Events) und WebSockets.

---

HTTPX2 ist der von Pydantic aktiv gepflegte Nachfolger von HTTPX und erreicht unseren GenAI-Stack transitiv: Die neueren OpenAI- und Anthropic-[Python](python)-SDKs binden HTTPX2 bereits direkt ein.
Der große Vorteil für uns: HTTPX2 prüft TLS-Zertifikate standardmäßig gegen den Trust Store des Betriebssystems, womit die System-CAs der Landesumgebung ohne zusätzliche Injektion funktionieren — das separate Paket truststore entfällt.

Wir evaluieren HTTPX2 derzeit und wollen es in unseren auf [Python](python) basierenden KI-Systemen wie [Zammad-AI](zammad-ai) und der [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki) einsetzen, wo es HTTPX als Drop-in-Nachfolger ersetzt.

---
