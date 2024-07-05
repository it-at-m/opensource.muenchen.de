---
title: Kiwi - Unicode Tastatur
code: https://github.com/it-at-m/UnicodeEingabeKiwi2
licensingmodel: open source
linkapplication: https://kiwi.muenchen.de
logo: https://kiwi.muenchen.de/images/Kiwi-Bird-Logo.svg
tags:
- application
- eigenentwicklung
- k8s
---
__Kiwi__ makes all characters from the character set "Latin characters in UNICODE" easy to find and use.

---

## About the project

The [Unicode](https://en.wikipedia.org/wiki/Unicode) Input Help was programmed to support the employees of the city of Munich in entering Latin characters in Unicode.

Kiwi (Kinderleicht Wortbestandteile integrieren) is an input help, which serves the comfortable and efficient input of characters from the character set Latin characters in Unicode. Characters with diacritics (for example Ẫ, D̂, Ģ, and M̂) or non-German origin (for example ð, ø, or þ) are usually not found on conventional German keyboards.

Kiwi makes all characters from the Latin character set in UNICODE easy to find and enter. In Kiwi, for example, names with diacritical characters can be easily entered using a conventional keyboard and then copied and pasted into any (specialist) application. The character set Latin characters in UNICODE is especially relevant for names of natural and legal persons as well as for addresses.

![Screenshot of an input field with the letter "O"" and a search result field with the diacritical variants "óòŏôốồỗổ..."]( https://stadt.muenchen.de/.imaging/mte/lhm/image-aspect-ratio-3-2-1008w/dam/Home/Stadtverwaltung/IT-Referat/Open-Source/___KIWI_Ansicht2.5441346419426010922.jpg/jcr:content/___KIWI_Ansicht2.5441346419426010922.jpg)


## Unicode for administrations in Europe

Unicode provides a technical basis for making systems fit for all languages. In practice, however, this huge amount of characters is almost impossible to handle. As a result, Unicode was initially little used until demand increased again with globalisation.

In Germany, the "Latin characters in Unicode" standard was initially introduced nationwide in the civil status system (for example in registry offices). In the meantime, a working group for the development of a [DIN 91379](https://en.wikipedia.org/wiki/DIN_91379) for Unicode has extended this character set from 450 to around 900 characters. This means that all European languages can now be displayed correctly. From November 2024, certain IT processes must fulfil this standard according to the German government's [IT Planning Council](https://www.it-planungsrat.de).


## Technical details

Kiwi was implemented in the form of a web application that is operated by the City of Munich on its own server. Employees simply call up this application via their browser. It works on all common operating systems. There is no installation required at all for the end user. This means that the application for entering characters is immediately available on thousands of municipal PCs - regardless of the operating system used.

The transfer to the respective specialist application takes place by means of copy-paste. Technically, Kiwi is completely implemented as a modern JavaScript interface. Once called up in the browser, it also works completely without an Internet connection.
