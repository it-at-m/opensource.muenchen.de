---
title: Checkmk
developer: Checkmk GmbH
developerlink: https://checkmk.com
code: https://github.com/Checkmk/checkmk
licensingmodel: open source
license: GPL
linkapplication: null
logo: /logo/320px-CheckMK_logo.svg.png
tags:
  - infrastruktur
  - opencore
  - observability
sortingPriority: 2
---

Checkmk is a free software for service monitoring of IT infrastructure.
It is used to monitor servers, network, applications, clouds, containers, storage, databases and environmental sensors.

---

The city of Munich uses the [Checkmk Enterprise Edition](https://checkmk.com/pricing) in a central instance for up to 300,000 monitoring endpoints (e.g. CPU, storage, URLs, database etc.). This edition enables the automatic agent update with the help of the [Agent Bakery](https://docs.checkmk.com/latest/de/wato_monitoringagents.html#bakery), as well as many other functions that we would have to implement ourselves in the free version. So we save internal capacity and use the service of Checkmk, but keep the possibility to switch to the free version at any time.

Also important for us are the possibilities for integration into our system landscape through open interfaces. Checkmk enables us to integrate the [Robot Framework](./robotframework), which is widely used in the city of Munich. This allows us, for example, to process browser tests directly in Checkmk.

Even though we use the proprietary [Checkmk Micro Core](https://docs.checkmk.com/latest/de/cmc.html), because the free Checkmk Raw Edition provides the core from the open source project Nagios, we consider Checkmk as OpenCore.
