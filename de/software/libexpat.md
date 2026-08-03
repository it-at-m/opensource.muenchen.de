---
title: libexpat
developer: Expat maintainers
developerlink: https://libexpat.github.io/
code: https://github.com/libexpat/libexpat
licensingmodel: open source
license: MIT
tags:
  - infrastruktur
sortingPriority: 1
---

Expat ist eine in C geschriebene, streamorientierte XML-1.0-Parser-Bibliothek.

---

Expat ist eine typische sehr weit verbreitete Open Source Bibliothek die in unzähliger Soft- und auch Hardware vebaut ist.

Allein bei der Landeshauptstadt Münchenist sie auf auf mindestens 2700 Linux Servern der installiert (per Scanner detektiert).
Beispielsweise unseren Standardbrowser [Firefox](./firefox), [QGIS](./qgis), [WinSCP](winscp), [Audacity](./audacity) und Python
Aber auch in proprietäre Software wie z.B. unserer [Web Application Firewall](https://my.f5.com/manage/s/article/K000158115).


## Open Source Sabbatical

Im zweiten Halbjahr 2026 habe wir ein [Open Source Sabbatical](../sabbatical) an den Maintainer von Expat vergeben.
Neben der allgemeinen Softwarpflege und Weiterenwicklung werden folgende Schwerpunkte angegangen:

* [bereits bekannte und ungefixte Sicherheitslücken](https://github.com/libexpat/libexpat/issues/1160) beheben.
  * Abarbeitung weiterer Sicherheitslücken, die im Zuge der aktuellen Flut von Sicherheitsanalysen gemeldet werden.
* [Support for XML 1.0r5/1.1 ](https://github.com/libexpat/libexpat/issues/171).
* Erhöhung der Wartbarkeit von expat. (z.B. Codedokumentation, Testsuite verbessern)
