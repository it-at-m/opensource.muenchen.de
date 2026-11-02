---
title: Langfuse
developerlink: https://langfuse.com/
code: https://github.com/langfuse/langfuse/
licensingmodel: open core
license: MIT
logo: /logo/langfuse.png
tags:
- infrastruktur
- k8s
- ai
- contribute
---
__Langfuse__ ist eine Open-Source-LLM-Entwicklungsplattform, die Teams bei der gemeinsamen Fehlersuche, Analyse und Weiterentwicklung ihrer LLM-Anwendungen unterstützt.

---

Wir nutzen Langfuse für Tracing, Evaluierung und Prompt-Management unserer KI-Systeme — [MUCGPT](mucgpt), [Zammad-AI](zammad-ai), [RIS-KI](riski) und der [Dienstleistungsfinder KI-Suche](dienstleistungsfinder-ki).

Alles basiert dabei auf offenen Standards: Alle Traces sind [OpenTelemetry](https://opentelemetry.io/)-Spans mit den GenAI-Semantic-Conventions (Modell, Eingaben, Ausgaben, Tokenverbrauch), die über das offene **OTLP**-Protokoll einlaufen. Langfuse verarbeitet OTLP seit v4 nativ ohne Reverse-Proxy und hat damit seine eigene veraltete Ingestion-API ersetzt. So bleibt unser Observability herstellerneutral: Dasselbe Telemetrie-Feed kann künftig auch von jedem anderen OTLP-fähigen Backend konsumiert werden.