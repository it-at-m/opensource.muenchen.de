---
application: Appswitcher
developer: LHM
code: https://github.com/it-at-m/appswitcher-server
licensingmodel: open source
license: MIT
screenshot: https://raw.githubusercontent.com/it-at-m/appswitcher-server/main/docs/embedded_in_applications.png
screenshotalt: 'Screenshot einer Webseite mit dem abgeschnittenen Überschrift "kita einrich", rechts oben darüber gelegt ein Menu aus 9 Buttons'  
tags:
  - eigenentwicklung
  - infrastruktur
  - start2023
---

**Appswitcher** ermöglicht es Benutzer\*innen einfach zwischen verschiedenen Webanwendungen zu wechseln.

---

Die Webanwendung ist als statische Seite konzipiert, um sie in andere Webanwendungen einbetten zu können (z. B. mit Hilfe eines iframes).
Appswitcher wurde stark von der [App Bar](https://support.google.com/accounts/answer/1714464?hl=en#zippy=%2Cswitch-between-apps) von Google inspiriert.

Appswitcher ist containerbasiert und kann per [helm-chart](https://github.com/it-at-m/helm-charts/tree/main/charts/appswitcher-server) deployed werden.
