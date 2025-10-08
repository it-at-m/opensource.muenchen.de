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

Der Fokus liegt dabei auf der potentiellen Wartbarkeit und Sicherheit der Software.


## Sicherheit

Öffentlich zugänglicher Code lässt sich hinsichtlich Sicherheitslücken leicht überprüfen.
Ein Vorteil von freier Software ist die Transparenz des Quellcodes, so können Sicherheitsforscher und Entwickler Open Source Software unabhänigig überprüfen.
Allerdings muss geprüft werden ob die IT-Sicherheit auch aktiv sichergestellt wird und ob dazu geeignete Werkzeuge vorliegen:

* Liegt eine Auflistung von _Common Vulnerabilities and Exposures_ (CVE) vor und wird diese entsprechend der Dringlichkeit bearbeitet.
* Sind alle Abhängigkeiten nicht nur einsehbar, sondern sind potenzielle Risiken auch durch eine _Software Bill of Materials_ in diesen Abhängigkeiten transparent.
* Liegen externe Audits vor (z.B. wie bei [curl](https://daniel.haxx.se/blog/2016/11/23/curl-security-audit/)), können diese positiv gewertet werden

## Dokumentation von Open Source Software

Eine umfassende [Dokumentation](https://opensource.com/article/20/3/documentation) ist für jede Software unerlässlich, insbesondere für Open Source Software, die von anderen genutzt oder verändert werden soll. Sie gewährleistet Transparenz, Nachvollziehbarkeit und eine einfache Nutzung und Weiterentwicklung.  

Eine klare und detaillierte Dokumentation, sowohl im Quellcode als auch in begleitenden Dateien, ist eine grundlegende Voraussetzung, um die Zugänglichkeit und Nutzbarkeit der Software sicherzustellen.  

### Struktur der Dokumentation

Für eine effektive und vollständige Dokumentation sind folgende Elemente erforderlich:

### 1. README.md

Jedes Repository muss eine `README.md`-Datei im Hauptverzeichnis enthalten.  
Diese Datei sollte alle Abschnitte des [OSS Repository Templates](https://github.com/it-at-m/oss-repository-en-template/blob/main/README.md) umfassen und **in englischer Sprache** verfasst sein, um eine internationale Zielgruppe anzusprechen.  

Eine [README](https://opensource.guide/de/starting-a-project/#eine-readme-schreiben) sollte folgende Fragen beantworten:

* Was macht dieses Projekt?  
* Warum ist es nützlich?  
* Wie kann ich es nutzen oder dazu etwas beitragen?  
* Wo erhalte ich Unterstützung?

### 2. Technische Dokumentation (`/docs` oder Website)

Jedes Projekt muss **entweder** einen strukturierten Dokumentationsordner `/docs`  
**oder** eine eigene Dokumentationswebsite bereitstellen.  

Die technische Dokumentation soll **alle Funktionen, Schnittstellen und Benutzeroberflächen** der Software beschreiben. Dazu gehören insbesondere:

* Nutzung und Benutzeroberflächen  
* API-Referenzen  
* Installations- und Wartungsanleitungen  
* Technische Hintergründe und Architektur  

Die Dokumentation sollte nach dem Prinzip **„English First“** erstellt werden, um international verständlich zu sein.  
Für größere Projekte oder Multirepositories kann sie als **Website** umgesetzt werden.  

Ein Benutzerhandbuch oder eine Produktdokumentation sollte idealerweise **zweisprachig (Deutsch und Englisch)** verfügbar sein.  


### Zugänglichkeit und Offenheit

Die Dokumentation muss **frei im Internet zugänglich** und in **offenen Formaten** (z. B. Markdown, HTML, Text) bereitgestellt werden.  
Es muss die Möglichkeit bestehen, **Vorschläge zur Verbesserung der Dokumentation** einzureichen (z. B. über Pull Requests oder Issues im Repository).

### Herausforderungen bei der Dokumentation

Das Erstellen und Pflegen von Dokumentation erfordert Zeit und Engagement. Sie muss regelmäßig aktualisiert werden, um Änderungen in der Software zu berücksichtigen.  
Fehlende oder veraltete Dokumentation kann zu Missverständnissen, Fehlern, erhöhtem Supportaufwand und einer verkürzten Lebensdauer des Produkts führen.  

### Best Practices für effektive Dokumentation

Zur Sicherstellung einer hochwertigen und nachhaltigen Dokumentation sollten folgende Prinzipien beachtet werden:

1. **Konsistente Terminologie:** Einheitliche Begriffe fördern eine klare Kommunikation.  
2. **Beitragsrichtlinien:** Klare Richtlinien erleichtern es der Community, zur Dokumentation beizutragen.  
3. **Dokumentationsvorlagen:** Vorlagen helfen, Informationen konsistent und vollständig zu erfassen.  
4. **Aktualität:** Jede neue oder geänderte Funktion muss dokumentiert werden.  
5. **Regelmäßige Überprüfung:** Mindestens vierteljährliche Updates sichern Relevanz und Qualität.  

### Fazit

Durch die Umsetzung dieser Maßnahmen kann die Dokumentation von Open Source Software wesentlich verbessert werden, was zu einer höheren Nutzer\*innenzufriedenheit und einer lebendigen, inklusiven Community führt.  
Effektive Dokumentation ist nicht nur für die Nutzer\*innen von Vorteil, sondern trägt auch zum langfristigen Erfolg des Projekts bei.
Sie schafft Vertrauen, senkt Hürden für neue Beiträge und stärkt die Community.

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
Auserdem ob Quellcode, Artefakte, Releases, Container etc. in gängigen Repositories verfügbar sind.

[^DevOps_Handbook_stars]: _Sonatype 2019 Software Supply Chain Report_ aus The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations Gene Kim, Jez Humble, Patrick Debois, John Willis ISBN-10: 1950508404 S. 365
