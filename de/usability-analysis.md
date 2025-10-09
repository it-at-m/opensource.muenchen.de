# Nutzbarkeitsanalyse

Um existierende freie Software zu nutzen oder sogar weiter entwickeln zu können muss diese zunächst einer __Nutzbarkeitsanalyse__ unterzogen werden.
Diese soll jegliche freie Software, unabhängig ob diese als Framework, Library, [Entwicklungstools](./in-house-development.html) [fertige Software](./use.html) eingesetzt werden soll, durchlaufen.

## Code Review

Die Bewertung des Codes sollte durch ein/e erfahrene/n Entwickler*in erfolgen, der/die in der entsprechenden Sprache bzw. dem genutzten Framework vertraut ist. 
Folgende Fragen sollen dabei beantwortet werden:

* Ist der Code verständlich geschrieben mit sprechender Bezeichnung für Variablen und Methoden? 
* Gibt es einen Coding-Styleguide und wird dieser auch eingehalten?
* Bestehen Abhängigkeiten zu anderen Diensten (z.B. Redis, Memcached, Elasticsearch) und werden diese in stabilen, aktuellen Versionen eingesetzt?
* Wird ein Framework genutzt? Falls nicht, was ist die Begründung? Falls ja, sollten Auswahl und Einbindung bewertet werden.
* Wie lange ist geschätzte Einarbeitungszeit für eine/n Entwickler*in?
* Alle Funktionen sollen nicht nur über die grafische Benutzeroberfläche (GUI), sondern auch über eine generelle, non-proprietäre und vollumfängliche __Programmierschnittstellen__ (API) bereitstellt werden. Im Idealfall mit zugehöriger [OpenAPI-Spec](https://www.openapis.org/).

Der Fokus liegt dabei auf der potentiellen Wartbarkeit und Sicherheit der Software.


## Sicherheit

Öffentlich zugänglicher Code lässt sich hinsichtlich Sicherheitslücken leicht überprüfen.
Ein Vorteil von freier Software ist die Transparenz des Quellcodes, so können Sicherheitsforscher und Entwickler Open Source Software unabhänigig überprüfen.
Allerdings muss geprüft werden ob die IT-Sicherheit auch aktiv sichergestellt wird und ob dazu geeignete Werkzeuge vorliegen:

* Liegt eine Auflistung von _Common Vulnerabilities and Exposures_ (CVE) vor und wird diese entsprechend der Dringlichkeit bearbeitet.
* Sind alle Abhängigkeiten nicht nur einsehbar, sondern sind potenzielle Risiken auch durch eine _Software Bill of Materials_ in diesen Abhängigkeiten transparent.
* Liegen externe Audits vor (z.B. wie bei [curl](https://daniel.haxx.se/blog/2016/11/23/curl-security-audit/)), können diese positiv gewertet werden

## Dokumentation

Eine umfassende [Dokumentation](https://opensource.com/article/20/3/documentation) ist für jede Software unerlässlich, insbesondere für Open Source Software, die von anderen genutzt oder verändert werden soll. Sie gewährleistet Transparenz, Nachvollziehbarkeit und eine einfache Nutzung und Weiterentwicklung.
Eine klare und detaillierte Dokumentation, sowohl im Quellcode als auch in begleitenden Dateien, ist eine grundlegende Voraussetzung, um die Zugänglichkeit und Nutzbarkeit der Software sicherzustellen.  

Jedes Softwareprojekt muss *entweder* einen strukturierten Dokumentationsordner `/docs` *oder* eine eigene Wiki oder Website bereitstellen.
Die __technische Dokumentation__ soll *alle Funktionen, Schnittstellen und Benutzeroberflächen* der Software beschreiben. Dazu gehören insbesondere:

* Nutzung und Benutzeroberflächen  
* [jede API-Referenzen](https://daniel.haxx.se/blog/2021/09/04/making-world-class-docs-takes-effort/)
* Installations- und Wartungsanleitungen  
* Technische Hintergründe und Architektur  

Die technische Dokumentation muss in __Englisch__ geschreiben sein, um international verständlich zu sein, weitere Sprachen sind sinnvoll.  

Ein __Benutzerhandbuch__ sollte idealerweise **zweisprachig (Deutsch und Englisch)** verfügbar sein.  

Die Dokumentation muss **frei im Internet zugänglich** und in **offenen Formaten** (z. B. Markdown, HTML, Text) bereitgestellt werden.
Es muss die Möglichkeit bestehen, [Vorschläge zur Verbesserung der Dokumentation](https://daniel.haxx.se/blog/2021/09/04/making-world-class-docs-takes-effort/) einzureichen (z. B. über Pull Requests).

Das Erstellen und Pflegen von Dokumentation erfordert [10–20%](https://opensource.com/article/20/3/documentation) der Entwicklungszeit.
Sie muss regelmäßig aktualisiert werden, um jede neue oder geänderte Funktion zu dokumentieren.

Jedes [Softwarerepository](repositories) muss eine [README.md](https://opensource.guide/de/starting-a-project/#eine-readme-schreiben) in *englischer Sprache* im Hauptverzeichnis enthalten und soll folgende Fragen beantworten:

* Was macht dieses Projekt?  
* Warum ist es nützlich?  
* Wie kann ich es nutzen oder dazu etwas beitragen?  
* Wo erhalte ich Unterstützung?


## externe Unterstützung

Die Verfügbarkeit externer Unterstützung ist im professionellen Betrieb als auch bei Änderungswünschen wichtig.
Diese Unterstützung kann durch eine aktive Community oder einen kommerziellen Anbieter angeboten werden.  

Eine große und engagierte Community kann diese Unterstützung grundsätzlich auch liefern, aber wenn kommerzieller Support angeboten wird, sollte dieser grundsätzlich bevorzugt werden.
Denn kommerzieller Support bietet in der Regel eine verlässlichere und professionellere Unterstützung an, was besonders in sicherheits- und betriebskritischen Situationen von Vorteil ist.  
Sollte kein kommerzieller Support verfügbar oder zu teuer sein, muss sicher gestellt sein dass wir die notwendigen Kompetenzen im Haus haben.
Dazu kann es notwendig sein, das wir Schulungen und Weiterbildungen für unsere Mitarbeitenden beschaffen.

Die Anzahl an Stars, Watchers, Contributors oder Pull Requests können eine Indikation für eine große Community sein, muss aber nicht sein.[^DevOps_Handbook_stars].

## DevOps

Software besteht nicht nur aus Quellcode sondern ist eingebettet in Automatisierungen für Testing und Deployment.
Daher prüfen wir ob ein öffentlich einsehbares _Continuous Integration und Deployment_ (CI/CD) vorhanden ist, auch bei den von uns präferierten [SaaS Lösungen](fossaas) als Teil der Exitstrategie.

* Sind Quellcode, Artefakte, Releases, Container etc. in gängigen [Repositories](repositories) verfügbar.
* Gibt es [dokumentierte](#dokumentation) __Konfigurationsmöglichkeiten__ von:
  * Ressourcen (Rechenleistung, Speicher etc)
  * Ressourcenarten (z.B. unterschiedliche Speicherarten wie Block File, Object)
  * Sicherheitseinstellungen, (z.B. nutzung lokaler Zertifizierungsstellen, Sicherheitskontexte)

[^DevOps_Handbook_stars]: _Sonatype 2019 Software Supply Chain Report_ aus The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations Gene Kim, Jez Humble, Patrick Debois, John Willis ISBN-10: 1950508404 S. 365
