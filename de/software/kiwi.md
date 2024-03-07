---
title: Kiwi - Unicode Tastatur
code: https://github.com/it-at-m/UnicodeEingabeKiwi2
licensingmodel: open source
linkapplication: https://kiwi.muenchen.de
logo: https://kiwi.muenchen.de/images/Kiwi-Bird-Logo.svg
tags:
- application
- eigenentwicklung
---
__Kiwi__ macht alle Zeichen aus dem Zeichensatz „Lateinische Zeichen in UNICODE" leicht auffindbar und nutzbar.

---

## Über das Projekt

Die Eingabehilfe für [Unicode](https://de.wikipedia.org/wiki/Unicode) wurde programmiert, um die Beschäftigten der Stadt München bei der Eingabe von Lateinischen Zeichen in Unicode zu unterstützen.

Kiwi (Kinderleicht Wortbestandteile integrieren) ist eine Eingabehilfe, welche der komfortablen und effizienten Eingabe von Zeichen aus dem Zeichenvorrat Lateinische Zeichen in Unicode dient. Zeichen mit Diakritika (zum Beispiel Ẫ, D̂, Ģ, und M̂) oder nicht deutschen Ursprungs (beispielsweise ð, ø oder þ) findet man auf herkömmlichen deutschen Tastaturen in der Regel nicht.

Kiwi macht alle Zeichen aus dem Zeichensatz Lateinische Zeichen in UNICODE leicht auffindbar und eingebbar. In Kiwi können mittels herkömmlicher Tastatur zum Beispiel Namen mit diakritischen Zeichen einfach eingegeben und dann mittels Copy & Paste in beliebige (Fach-)Anwendungen übernommen werden. Der Zeichensatz Lateinische Zeichen in UNICODE ist insbesondere für Namen natürlicher und juristischer Personen sowie bei Adressen relevant.

![Screenshot eines Eingabefelds mit dem Buchstaben "O"" und eines Suchergebnisfeld mit den diakritischen Varianten "óòŏôốồỗổ..."]( https://stadt.muenchen.de/.imaging/mte/lhm/image-aspect-ratio-3-2-1008w/dam/Home/Stadtverwaltung/IT-Referat/Open-Source/___KIWI_Ansicht2.5441346419426010922.jpg/jcr:content/___KIWI_Ansicht2.5441346419426010922.jpg)


## Unicode für Verwaltungen in Europa

Mit Unicode gibt es also eine technische Basis, Systeme für alle Sprachen fit zu machen. In der Praxis lässt sich diese riesige Zeichenmenge aber kaum handhaben. So wurde Unicode zunächst nur wenig genutzt bis mit der Globalisierung der Bedarf wieder stieg.

In Deutschland wurde zunächst im Personenstandswesen (zum Beispiel in den Standesämtern) bundesweit der Standard „Lateinische Zeichen in Unicode“ eingeführt. Inzwischen hat ein Arbeitskreis zur Entwicklung einer [DIN 91379](https://www.beuth.de/de/technische-regel/din-spec-91379/301228458) für Unicode diesen Zeichensatz von 450 auf rund 900 Zeichen ergänzt. Damit lassen sich nun alle europäischen Sprachen korrekt darstellen. Ab November 2024 müssen laut Vorgabe des [IT-Planungsrats](https://www.it-planungsrat.de) der Bundesregierung bestimmte IT-Verfahren diese Norm erfüllen.


## Technische Details

Kiwi wurde in Form einer Webanwendung realisiert, die bei der Stadt München auf einem eigenen Server betrieben wird. Die Mitarbeiter*innen rufen diese Anwendung einfach über den Browser auf. Es funktioniert auf allen gängigen Betriebssystemen. Eine Installation entfällt für den Endanwender komplett. So ist die Anwendung zur Zeicheneingabe sofort auf tausenden städtischen PCs verfügbar – unabhängig vom jeweiligen Betriebssystem.

Die Übertragung in die jeweilige Fachanwendung erfolgt mittels Copy-Paste. Technisch ist Kiwi komplett als moderne JavaScript-Oberfläche realisiert. Einmal im Browser aufgerufen, funktioniert sie auch komplett ohne Internetanbindung.
