---
title: CaptchaService
developer: LHM
developerlink: https://it-at-m.github.io/captchaservice/
code: https://github.com/it-at-m/captchaservice/
logo: /inhouse/captchaservice_logo.png
licensingmodel: open source
license: MIT
linkapplication: https://stadt.muenchen.de/buergerservice/terminvereinbarung.html
tags:
  - eigenentwicklung
  - application
  - start2024
  - k8s
sortingPriority: 2
---

CaptchaService is a self-hosted microservice that provides GDPR-compliant, proof-of-work CAPTCHA challenges using the European open-source [ALTCHA](https://altcha.org/) library — the bot-protection layer in front of the City of Munich's public [Zeitmanagementsystem](zeitmanagementsystem) / [eAppointment](https://it-at-m.github.io/eappointment/) APIs.

---

## About the project

CaptchaService was built at it@M as the open-source bot-protection layer in front of the public [Zeitmanagementsystem](zeitmanagementsystem) / [eAppointment](https://it-at-m.github.io/eappointment/) APIs operated by the City of Munich — specifically `zmscitizenview` (the citizen-facing booking frontend) and `zmscitizenapi` (the REST backend that serves available appointment slots).

Over the years the team went through several iterations to keep automated scrapers and booking bots away from those endpoints: a simple in-house CAPTCHA, then commercial proprietary services, and finally ALTCHA — a GDPR-compliant, privacy-first proof-of-work library made in Europe with no cookies, no tracking, and no third-party calls. Choosing an open-source, European library is a deliberate contribution to **digital sovereignty** in the public sector.

CaptchaService wraps ALTCHA in a small, multi-tenant Spring Boot service with adaptive difficulty management. A challenge is requested when a citizen opens the booking flow; the verified payload is then required before any reservation or scraping-like read is accepted.

- Automated bots can no longer cheaply enumerate available appointment slots.
- Real users only see a near-invisible proof-of-work step — an unobtrusive "I am not a bot" checkbox.
- Through CaptchaService, no personal data leaves the City of Munich infrastructure.
- Broader coverage — in the [Zeitmanagementsystem](zeitmanagementsystem) appointment booking process, all city departments and agencies are now covered.
- Easily reusable in other systems via HTTP API and multi-tenant configuration.
- Very low operating costs compared to commercial CAPTCHA services.

![Screenshot of the "I am not a bot" CAPTCHA checkbox on the Zeitmanagementsystem citizen booking page](/inhouse/captchaservice_ich_bin_kein_bot.png)

## Technical details

- Spring Boot microservice with REST API (`/challenge`, `/verify`)
- Proof-of-work CAPTCHA via [ALTCHA](https://altcha.org/) — no image puzzles
- Adaptive difficulty scaling based on request patterns per source address
- Multi-tenant support with per-site keys, secrets, and difficulty maps
- [PostgreSQL](postgresql) persistence with Flyway migrations
- Health checks and Prometheus metrics via Spring Actuator
- Built with Java 21 and Spring Boot 3.x, following the [reference architecture](../publish#refarch) of the City of Munich
- [Developer handbook](https://it-at-m.github.io/captchaservice/) and [source code](https://github.com/it-at-m/captchaservice/)
