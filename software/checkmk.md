---
application: checkmk
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
checkmk is a free software for service monitoring of IT infrastructure.
It is used to monitor servers, network, applications, clouds, containers, storage, databases and environmental sensors.


---


The city of Munich uses [Enterprise Edition](https://checkmk.com/pricing) in a central instance for 300,000 monitoring endpoints (e.g. CPU, storage, URLs, database ect.).
So we use automatic updates, the [Agent Bakery](https://docs.checkmk.com/latest/de/wato_monitoringagents.html#bakery).
Functions that we would have to implement ourselves in the free version.  
So we save internal capacity and use the service of checkmk, but keep the possibility to switch to the free version at any time.


Also important for us are the possibilities for integration into our system landscape through open interfaces.
checkmk enables us to integrate the [robotframework](./robotframework), which is widely used in the city of Munich.
This allows us, for example, to process browser tests directly in checkmk.


Even though we use the proper [checkmk micro core](https://docs.checkmk.com/latest/de/cmc.html), because the free checkmk raw edition provides the core from the open source project Nagios, we consider checkmk as OpenCore.

