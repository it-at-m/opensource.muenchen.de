# Nutzbarkeitsanalyse

Um existierende freie Software zu nutzen oder sogar weiter entwickeln zu können muss diese zunächst einer Nutzbarkeitsanalyse unterzogen werden.
Diese Nutzbarkeitsanalyse soll jegliche freie Software, egal ob diese als Framework, Library, [Entwicklungstools](./in-house-development.html) oder als [fertige Software](./use.html) eingesetzt werden soll, durchlaufen.

## Code Review

Die Bewertung des Codes sollte durch ein/e erfahrene/n Entwickler*in erfolgen, der/die in der entsprechenden Sprache bzw. dem genutzten Framework vertraut ist. 
Folgende Fragen sollen dabei beantwortet werden:

* Ist der Code verständlich geschrieben mit sprechender Bezeichnung für Variablen und Methoden? 
* Gibt es einen Coding-Styleguide und wird dieser auch eingehalten?
* Bestehen Abhängigkeiten zu anderen Diensten (z.B. Redis, Memcached, Elasticsearch) und werden diese in stabilen, aktuellen Versionen eingesetzt?
* Wird ein Framework genutzt? Falls nicht, was ist die Begründung? Falls ja, sollten Auswahl und Einbindung bewertet werden.
* Wie lange ist geschätzte Einarbeitungszeit für eine/n Entwickler*in?
* Alle Funktionen sollen nicht nur über die grafische Benutzeroberfläche (GUI), sondern auch über eine generelle und vollumfängliche __Programmierschnittstellen__ (API) bereitstellt werden.

Der Fokus liegt dabei auf der potentiellen Wartbarkeit und Sicherheit der Software.


## Sicherheit

Öffentlich zugänglicher Code lässt sich hinsichtlich Sicherheitslücken leicht überprüfen.
Ein Vorteil von freier Software ist die Transparenz des Quellcodes, so können Sicherheitsforscher und Entwickler Open Source Software unabhänigig überprüfen.
Allerdings muss geprüft werden ob die IT-Sicherheit auch aktiv sichergestellt wird und ob dazu geeignete Werkzeuge vorliegen:

* Liegt eine Auflistung von _Common Vulnerabilities and Exposures_ (CVE) vor und wird diese entsprechend der Dringlichkeit bearbeitet.
* Sind alle Abhängigkeiten nicht nur einsehbar, sondern sind potenzielle Risiken auch durch eine _Software Bill of Materials_ in diesen Abhängigkeiten transparent.
* Liegen externe Audits vor (z.B. wie bei [curl](https://daniel.haxx.se/blog/2016/11/23/curl-security-audit/)), können diese positiv gewertet werden


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

## DevOps

Software besteht nicht nur aus Quellcode sondern ist eingebettet in Automatisierungen für Testing und Deployment.
Daher ist zu prüfen ob ein öffentlich einsehbares _Continuous Integration und Deployment_ (CI/CD) vorhanden ist.
Auserdem ob Quellcode, Artefakte, Releases, Container etc. in gängigen [Repositories](repositories) verfügbar sind.


[^DevOps_Handbook_stars]: _Sonatype 2019 Software Supply Chain Report_ aus The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations Gene Kim, Jez Humble, Patrick Debois, John Willis ISBN-10: 1950508404 S. 365
