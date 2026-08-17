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

Expat ist eine typische, sehr weit verbreitete Open-Source-Bibliothek, die in unzähliger Soft- und auch Hardware verbaut ist.

Allein bei der Landeshauptstadt München ist sie auf mindestens 2.700 Linux-Servern installiert (per Scanner erkannt).
Beispielsweise unser Standardbrowser [Firefox](./firefox), [QGIS](./qgis), [WinSCP](winscp), [Audacity](./audacity) und Python nutzen libexpat.
Aber auch in proprietärer Software wie z.B. unserer [Web Application Firewall](https://my.f5.com/manage/s/article/K000158115) wird libexpat zum Parsen von XML eingesetzt.


## Open Source Sabbatical

Im zweiten Halbjahr 2026 haben wir ein [Open Source Sabbatical](../sabbatical) an den Maintainer von Expat vergeben.
Neben der allgemeinen Softwarepflege und Weiterentwicklung werden folgende Schwerpunkte angegangen:

* [Bereits bekannte und ungefixte Sicherheitslücken](https://github.com/libexpat/libexpat/issues/1160) beheben.
  * Abarbeitung weiterer Sicherheitslücken, die im Zuge der aktuellen Flut von Sicherheitsanalysen gemeldet werden.
* [Unterstützung von XML 1.0r5](https://github.com/libexpat/libexpat/issues/171).
* Erhöhung der Wartbarkeit von Expat (z.B. mehr Code-Dokumentation, Testsuite verbessern)
