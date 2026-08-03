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

Expat is a stream-oriented XML 1.0 parser library written in C.

---

Expat is a typical, widely used open-source library that is integrated into countless software and hardware applications.

In the city of Munich alone, it is installed on at least 2,700 Linux servers (as detected by a scanner).
For example, our default browser [Firefox](./firefox), [QGIS](./qgis), [WinSCP](winscp), [Audacity](./audacity), and Python use libexpat.
But it's also used in proprietary software, such as our [Web Application Firewall](https://my.f5.com/manage/s/article/K000158115).


## Open Source Sabbatical

In the second half of 2026, we will be offering an [Open Source Sabbatical](../sabbatical) to the maintainer of Expat.
In addition to general software maintenance and further development, the following priorities will be addressed:

* Fix [already known and unfixed security vulnerabilities](https://github.com/libexpat/libexpat/issues/1160).
  * Addressing additional security vulnerabilities reported as part of the current flood of security analyses.
* [Support for XML 1.0r5/1.1](https://github.com/libexpat/libexpat/issues/171).
* Improving the maintainability of Expat (e.g. more code documentation, improving the test suite)
