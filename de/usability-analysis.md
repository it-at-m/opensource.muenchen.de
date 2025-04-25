# Nutzbarkeitsanalyse

Um existierende freie Software zu nutzen oder sogar weiter entwickeln zu können muss diese zunächst einer Nutzbarkeitsanalyse unterzogen werden.
Diese Nutzbarkeitsanalyse soll jegliche freie Software, egal ob diese als Framework, Library, Entwicklungstools oder Use als fertige Software eingesetzt werden soll, durchlaufen.

Die Analyse wird anhand folgender Kriterien durchgeführt:

## Verbreitung

Existieren bereits relevante Referenzkunden aus diesem Bereich? Community-Aktivitäten auf Github wie etwa die Anzahl Stars, Watchers, Contributors oder Pull Requests können eine Indikation für eine weite Verbreitung sein, dies muss aber nicht sein.

## Code Review

Die Bewertung des Codes sollte durch ein/e erfahrene/n Entwickler*in erfolgen, der/die in der entsprechenden Sprache bzw. dem genutzten Framework vertraut ist. 
Folgende Fragen sollen dabei beantwortet werden:

* Wird ein Framework genutzt? Falls nicht, was ist die Begründung? Falls ja, sollten Auswahl und Einbindung bewertet werden.
* Bestehen darüber hinaus andere Abhängigkeiten (z.B. Redis, Memcached, Elasticsearch) und werden diese in stabilen, aktuellen Versionen eingesetzt?
* Handelt es sich um eine webbasierte Anwendung? Falls nicht, weshalb? Etwa aufgrund hoher Datenmengen oder der Grafik, beispielsweise CAD.
* Gibt es einen (bevorzugt externen) Coding-Styleguide, ist der Code verständlich geschrieben mit sprechender Bezeichnung für Variablen und Methoden? 
* Wie lange ist geschätzte Einarbeitungszeit für eine/n Entwickler*in

Der Fokus liegt dabei auf der potentielle Wartbarkeit und Sicherheit der Software.

## DevOps

Für die Einschätzung sollte der letzte wesentliche Beitrag (kein Doku-Update) nicht älter als drei und der letzte Release nicht älter als sechs Monate sein.
Sind aktuelle Pull Requests vorhanden und wie ist die Anzahl geschlossener bzw. gemergter Pull Requests. Ist öffentlich einsehbares Continuous Integration und Deployment (CI/CD) vorhanden?
Sind Code, Artefakte, Releases, Container etc. in gängigen Repositories verfügbar?
Bereitstellung lauffähiger Container für Kubernetes oder idealerweise Openshift. Das Dockerfile sollte den internen Qualitätsanforderungen (z.B. LHM-Standards) entsprechen.

## Sicherheit

Es ist zu prüfen ob Sicherheitsscans vorhanden sind und aktuelle Common Vulnerabilities and Exposures (CVEs) vorliegen. Ist der Dependency-Graph sauber - z.B. auf GitHub - einsehbar?
Gibt es externe Audits, wie etwa bei curl? Liegt eine Software Bill of Materials (SBOM) vor?
Bei Containeranwendungen sollte das Dockerfile den Qualitätskritieren der Container Approval Process (CAP) entsprechen?

## Hersteller

Hat das Projekt einen ansprechbaren Hersteller? Bietet dieser Support oder proprietäre Features? Liegt eine Förderung oder Finanzierung durch Dritte vor?
