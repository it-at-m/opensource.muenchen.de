---
title: CaptchaService
developer: LHM
developerlink: https://it-at-m.github.io/captchaservice/de/
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
sortingPriority: 3
---

CaptchaService ist ein selbst gehosteter Microservice, der DSGVO-konforme Proof-of-Work-CAPTCHA-Challenges auf Basis der europäischen Open-Source-Bibliothek [ALTCHA](https://altcha.org/) bereitstellt — die Bot-Schutzschicht vor den öffentlichen [Zeitmanagementsystem](zeitmanagementsystem)- und [eAppointment](https://it-at-m.github.io/eappointment/)-APIs der Landeshauptstadt München.

---

## Über das Projekt

CaptchaService wurde bei it@M als quelloffene Bot-Schutzschicht vor den öffentlichen [Zeitmanagementsystem](zeitmanagementsystem)- und [eAppointment](https://it-at-m.github.io/eappointment/)-APIs der Landeshauptstadt München entwickelt — konkret `zmscitizenview` (die bürgerseitige Buchungsoberfläche) und `zmscitizenapi` (das REST-Backend für verfügbare Terminslots).

Über die Jahre durchlief das Team mehrere Ansätze, um automatisierte Scraper und Buchungs-Bots von diesen Endpunkten fernzuhalten: ein einfaches Eigenbau-CAPTCHA, anschließend kommerzielle proprietäre Dienste und schließlich ALTCHA — eine DSGVO-konforme, datenschutzfreundliche Proof-of-Work-Bibliothek aus Europa, ohne Cookies, ohne Tracking und ohne Drittanbieter-Aufrufe. Die Wahl einer quelloffenen, europäischen Bibliothek ist ein bewusster Beitrag zur **digitalen Souveränität** der öffentlichen Verwaltung.

CaptchaService kapselt ALTCHA in einem kleinen, mandantenfähigen Spring-Boot-Service mit adaptiver Schwierigkeitssteuerung. Eine Challenge wird angefordert, wenn Bürger\*innen den Buchungsablauf öffnen; die verifizierte Payload wird anschließend benötigt, bevor Reservierungen oder scraping-ähnliche Lesezugriffe akzeptiert werden.

- Automatisierte Bots können verfügbare Terminslots nicht mehr kostengünstig enumerieren.
- Echte Nutzer\*innen sehen nur einen nahezu unsichtbaren Proof-of-Work-Schritt — eine unauffällige „Ich bin kein Bot“-Checkbox.
- Über CaptchaService verlassen keine personenbezogenen Daten die Infrastruktur der Landeshauptstadt München.
- Breitere Abdeckung — im [Zeitmanagementsystem](zeitmanagementsystem)-Terminvereinbarungsprozess sind jetzt alle Referate und Behörden abgedeckt.
- Leicht in allen Systemen wiederverwendbar.
- Sehr geringe Betriebskosten.

![Screenshot der „Ich bin kein Bot“-CAPTCHA-Checkbox auf der Zeitmanagementsystem-Bürgerbuchungsseite](/inhouse/captchaservice_ich_bin_kein_bot.png)

## Technische Details

- Spring-Boot-Microservice mit REST-API (`/challenge`, `/verify`)
- Proof-of-Work-CAPTCHA via [ALTCHA](https://altcha.org/) — keine Bilderrätsel
- Adaptive Schwierigkeitssteuerung basierend auf dem Anfrageverhalten pro Quell-IP
- Mehrmandantenfähigkeit mit eigenen Schlüsseln, Geheimnissen und Schwierigkeits-Maps pro Site
- [PostgreSQL](postgresql)-Persistenz mit Flyway-Migrationen
- Health-Checks und Prometheus-Metriken über Spring Actuator
- Entwickelt mit Java 21 und Spring Boot 3.x nach der [Referenzarchitektur](../publish#refarch) der Landeshauptstadt München
- [Entwicklerhandbuch](https://it-at-m.github.io/captchaservice/de/) und [Quellcode](https://github.com/it-at-m/captchaservice/)
