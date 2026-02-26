---
title: Hazelcast
developerlink: https://hazelcast.com/
licensingmodel: open source
code: https://github.com/hazelcast
license: 
logo: 
tags:
- infrastruktur
- devstack
---

__Hazelcast__ ist eine einheitliche Echtzeit-Datenplattform, die Stream-Verarbeitung mit einem schnellen Datenspeicher kombiniert und es Kunden ermöglicht, sofort auf Daten in Bewegung zu reagieren, um Echtzeit-Einblicke zu gewinnen.

---

Die LHM setzt Hazelcast in ihren RefArch-Applikationen für Caching und die Synchronisation von Benutzersitzungen ein. Dies erfolgt im Rahmen des API-Gateways, das auf Spring Cloud Gateway basiert. Hazelcast ermöglicht die konsistente Verwaltung von Sessions zwischen mehreren Instanzen der Anwendung, sodass Benutzer beim Wechsel zwischen Instanzen eine nahtlose Erfahrung haben.