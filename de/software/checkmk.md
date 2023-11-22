---
title: checkmk
developer: Checkmk GmbH
developerlink: https://checkmk.com
code: https://github.com/Checkmk/checkmk
licensingmodel: open source
license: GPL
linkapplication: null
logo: /320px-CheckMK_logo.svg.png
tags:
- infrastruktur
- opencore
---
checkmk ist eine freie Software für das Service-Monitoring von IT-Infrastruktur.
Sie wird zur Überwachung von Server, Netzwerk, Applikationen, Clouds, Containern, Speicher, Datenbanken und Umweltsensoren genutzt.

---

Die Stadt München setzt in einer zentrale Instanz die [Enterprise Edition](https://checkmk.com/pricing) für 300.000 Monitoringendpunkt (z.B. CPU, Speicher, URLs, Datenbank ect.) ein.
So nutzen wir automatische Updates, die [Agent Bakery](https://docs.checkmk.com/latest/de/wato_monitoringagents.html#bakery).
Funktionen die wir in der freien Version selbst umsetzen müssten.  
So sparen wir intern Kapazitäten und nutzen den Service von checkmk, behalten aber jederzeit die Möglichkeit, auch auf die freie Version zu wechseln.

Wichtig für uns sind auch die Möglichekit zu Integrationen in unsere Systemlandschaft durch offene Schnittstellen.
checkmk ermöglicht es uns das in der Stadt München weit genutzte [robotframework](./robotframework) integrieren zu können.
Um so z.B. Browsertests direkt in checkmk verarbeiten zu können.

Auch wenn wir den properitären [Checkmk Micro Core](https://docs.checkmk.com/latest/de/cmc.html) nutzen, da in der freien Checkmk Raw Edition der Kern aus dem Open-Source-Projekt Nagios zu Verfügung steht, betrachten wir Checkmk als OpenCore.
