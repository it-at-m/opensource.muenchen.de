# Nutzbarkeitsanalyse

Um existierende freie Software zu nutzen oder sogar weiter entwickeln zu können muss diese zunächst einer Nutzbarkeitsanalyse unterzogen werden.
Diese Nutzbarkeitsanalyse soll jegliche freie Software, egal ob diese als Framework, Library, [Entwicklungstools](./in-house-development.html) oder [Use](./use.html) als fertige Software eingesetzt werden soll, durchlaufen.

Die Analyse wird anhand folgender Kriterien durchgeführt:

## Verbreitung

* Existieren bereits relevante Referenzkunden oder produktive Einsätze in vergleichbaren Institutionen?
* Community-Aktivitäten auf [öffentlichen Repositories](./repositories.html): Anzahl von Stars, Watchern, Issues, Pull Requests, Diskussionsaktivität
* Wie groß ist die aktive Entwickler-Community?
* Ist die Weiterentwicklung des Projekts absehbar sichergestellt?
* Eine hohe Anzahl von GitHub-Stars ist **kein verlässlicher Qualitätsindikator**[^DevOps_Handbook_stars].

## Reifegrad und Community

Die Projektreife ist ein zentrales Kriterium, unabhängig davon, ob Software nur eingesetzt oder auch aktiv weiterentwickelt wird. 

Zu bewerten sind:

* **Stabilität und Reifegrad** des Projekts
* **Projektgeschichte** und Kontinuität der Entwicklung
* Anzahl und Aktivität der **Kernentwickler*innen**
* **Reaktionsfähigkeit** auf Bug-Reports und Sicherheitslücken
* **Qualität der Kommunikation** (z. B. bei Feature Requests oder im Umgang mit der Community)

## Code Review

Die Bewertung des Codes erfolgt durch erfahrene Entwickler*innen, die mit der verwendeten Sprache und Technologie vertraut sind.

Folgende Fragen sollen dabei beantwortet werden:

* Wird ein Framework genutzt? Falls nicht, was ist die Begründung? Falls ja, sollten Auswahl und Einbindung bewertet werden.
* Bestehen darüber hinaus andere Abhängigkeiten (z.B. Redis, Memcached, Elasticsearch) und werden diese in stabilen, aktuellen Versionen eingesetzt?
* Handelt es sich um eine webbasierte Anwendung? Falls nicht, weshalb? Etwa aufgrund hoher Datenmengen oder der Grafik, beispielsweise CAD.
* Existiert ein Coding Styleguide (intern/extern)? Ist der Code verständlich geschrieben mit sprechender Bezeichnung für Variablen und Methoden
* Wie hoch ist die geschätzte Einarbeitungszeit für neue Entwickler*innen?

Fokus: Bewertung der potentiellen **Wartbarkeit**, **Lesbarkeit** und **Sicherheit** des Codes.

## DevOps

Für die Einschätzung sollte der letzte wesentliche Beitrag (kein Doku-Update) nicht älter als _drei_ und der letzte Release nicht älter als _sechs Monate_ sein.
Sind aktuelle Pull Requests vorhanden und wie ist die Anzahl geschlossener bzw. gemergter Pull Requests.
Ist öffentlich einsehbares Continuous Integration und Deployment (CI/CD) vorhanden?
Sind Code, Artefakte, Releases, Container etc. in gängigen Repositories verfügbar?
Bereitstellung lauffähiger Container für Kubernetes oder idealerweise [Openshift](./software/openshift.html).

## [Sicherheit](./security.md)

Es ist zu prüfen ob Sicherheitsscans vorhanden sind und aktuelle Common Vulnerabilities and Exposures (CVEs) vorliegen.
Ist der Dependency-Graph sauber - z.B. auf GitHub - einsehbar?
Gibt es externe Audits, wie etwa bei [curl](https://daniel.haxx.se/blog/2016/11/23/curl-security-audit/)?
Liegt eine Software Bill of Materials (SBOM) vor?
Bei Containeranwendungen sollte das Dockerfile den Qualitätskritieren der [LHM Container Application Platform (CAP)](./software/openshift.html)? entsprechen?

###  CVE 

Ein Abgleich mit Schwachstellendatenbanken (z. B. CVE) und die Einsicht in Code-Repositories sind hilfreich, um ein realistisches Risikobild zu erhalten. 
Darübr hinaus soll geprüft werden,

- ob sogenannte protected branches eingerichtet wurden.
- ob es verantwortliche Maintainer gibt. 

## Dokumentation

Eine umfassende Software-Dokumentation ist für jede Software unerlässlich, insbesondere für solche, die von anderen genutzt oder verändert werden soll.

Es müssen folgende Dokumentationen vorhanden sein:

* Benutzerdokumentation
* Entwickler, Installations- und Wartungsdokumentation.

Alle Dokumentationen müssen __alle__ technischen Funktionen und Benutzeroberflächen der Software umfassend beschreiben.
Dazu gehören Informationen über die Software selbst, ihre Nutzung, die API sowie Installations- und Wartungsanleitungen.

Es ist wichtig, dass die Dokumentation frei im Internet zugänglich ist und in offenen Formaten bereitgestellt wird (z. B. Markdown, HTML, Text).
Eine englische Version der Dokumentation ist ausreichend.
Es muss die Möglichkeit bestehen, Vorschläge zur Verbesserung der Dokumentation einzureichen.

## externe Unterstützung

Die Verfügbarkeit externer Unterstützung ist im professionellen Betrieb als auch bei Änderungswünschen wichtig.
Diese Unterstützung kann durch eine aktive Community oder einen kommerziellen Anbieter angeboten werden.  

Eine große und engagierte Community kann diese Unterstützung grundsätzlich auch liefern, aber wenn kommerzieller Support angeboten wird, sollte dieser grundsätzlich bevorzugt werden.
Denn kommerzieller Support bietet in der Regel eine verlässlichere und professionellere Unterstützung an, was besonders in sicherheits- und betriebskritischen Situationen von Vorteil ist.  
Sollte kein kommerzieller Support verfügbar oder zu teuer sein, muss sicher gestellt sein dass wir die notwendigen Kompetenzen im Haus haben.
Dazu kann es notwendig sein, das wir Schulungen und Weiterbildungen für unsere Mitarbeitenden beschaffen.

Die Anzahl an Stars, Watchers, Contributors oder Pull Requests können eine Indikation für eine große Community sein, muss aber nicht sein.[^DevOps_Handbook_stars].

[^DevOps_Handbook_stars]: _Sonatype 2019 Software Supply Chain Report_ aus The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations Gene Kim, Jez Humble, Patrick Debois, John Willis ISBN-10: 1950508404 S. 365
