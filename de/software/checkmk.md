---
title: Checkmk
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
Checkmk ist eine freie Software für das Service-Monitoring von IT-Infrastruktur.
Sie wird zur Überwachung von Server, Netzwerk, Applikationen, Clouds, Containern, Speicher, Datenbanken und Umweltsensoren genutzt.

---

Die Stadt München nutzt die [Checkmk Enterprise Edition](https://checkmk.com/pricing) in einer zentralen Instanz für bis zu 300.000 Überwachungsendpunkte (z.B. CPU, Speicher, URLs, Datenbank etc.). Diese Edition ermöglicht das automatische Agent Update mit Hilfe der [Agent Bakery](https://docs.checkmk.com/latest/de/wato_monitoringagents.html#bakery), so wie viele andere Funktionen, welche wir in der freien Version selbst umsetzen müssten. So sparen wir intern Kapazitäten und nutzen den Service von Checkmk, behalten aber jederzeit die Möglichkeit, auch auf die freie Version zu wechseln.

Wichtig für uns sind auch die Möglichkeiten der Integration in unsere Systemlandschaft durch offene Schnittstellen. Checkmk ermöglicht uns die Einbindung des in der Stadt München weit genutzten [Robot Frameworks](./robotframework). So können wir zum Beispiel Browsertests direkt in Checkmk verarbeiten.

Auch wenn wir den properitären [Checkmk Micro Core](https://docs.checkmk.com/latest/de/cmc.html) nutzen, betrachten wir Checkmk als OpenCore, da in der freien Checkmk Raw Edition der Kern aus dem Open-Source-Projekt Nagios zur Verfügung steht.
