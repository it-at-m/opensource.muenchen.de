# Repositories

[Public Code](publish.html) definiert sich durch freie [Lizenzen](licenses.html), aber auch durch öffentlich zugänglichen  __Quellcode__ und __Artefakte__.

## Code

Wir wollen Bürger\*innen, Entwickler\*innen anderer Behörden, Citizen Developer, grundsätzlich allen interessierten Menschen, die Möglichkeit geben unseren Code zu verwenden, verstehen, verbreiten und auch zu verbessern.

GitHub ist das bekannteste öffentliche Code-Repository für freie Software.
Nutzer\*innen aus der FOSS-Community suchen, teilen und diskutieren freien Code hauptsächlich auf GitHub.
Wir richten uns nach der Community und nutzen ebenso [GitHub für Public Code der Landeshauptstadt München](https://github.com/it-at-m/).
Durch die Codeverwaltung und [CICD](github-actions) auf GitHub bieten wir eine niederschwellige Teilhabe für alle an.  
GitHub hält keinerlei beschränkende Rechte an dem dort verwalteten Code, jedes Projekt kann seine Lizenz selbst bestimmen.
Dies führt zu einer geringen Herstellerabhängigkeit, der außerdem leicht zu entkommen ist:
Wir sind nur an Git als freie Software zur verteilten Codeverwaltung gebunden.
Diese wird auch von allen anderen relevanten Plattformen genutzt.
Wie andere freie Projekte, z.B. [curl](https://daniel.haxx.se/blog/2021/01/28/what-if-github-is-the-devil/), halten wir uns offen, andere auf Git basierende Plattformen zusätzlich oder auch alternativ zu nutzen.

Wenn wir uns an anderen Softwareprojekten [beteiligen](./improve.html#code-contributions), tun wir dies auf der existierenden Plattform des Softwareprojekts.

Eine für die Öffentlichen Verwaltungen in Deutschland wichtige relevante Alternative ist [gitlab.opencode.de](https://gitlab.opencode.de).
Dazu betreiben wir dort die Gruppe [landeshauptstadt-muenchen](https://gitlab.opencode.de/groups/landeshauptstadt-muenchen).
Auch wenn wir auf gitlab.opencode.de nicht primär veröffentlichen, sind wir auf Anfrage bereit, Repositories dorthin zu spiegeln. 
Wenn wir uns an freien Softwareprojekten anderer Communities aus der öffentlichen Verwaltungen beteiligen wollen, werden wir das ausschließlich dort machen, sofern die Projekte MergeRequests erlauben.

Um Mitarbeitende nicht zu zwingen, mit Klarnamen im Internet zu agieren, dürfen Mitarbeiter\*innen Pseudonyme nutzen.
Um aber nachvollziehen zu können, welche Mitarbeitenden hier öffentlich agieren, sind alle genutzten Pseudonyme _intern_ dokumentiert.

## Artefakte

Das Konzept _Public Money Public Code_ verpflichtet nur, den Quellcode zu [veröffentlichen](./publish.html).
Um eine einfache Nutzung unserer Software zu ermöglichen, wollen wir möglichst viele auf dem Quellcode basierende Artefakte wie gebaute Pakete, Container-Images oder Helm Charts veröffentlichen.

* Container-Images werden, wie unser Code, auf GitHub gebaut und auch in der Registry `ghcr.io` [zur Verfügung](https://github.com/orgs/it-at-m/packages) gestellt.
  * Zusätzlich zu den Container-Images bieten wir zur Nutzung in Kubernetes auch [Helm Charts](https://github.com/it-at-m/helm-charts) auf [artifacthub.io org=it-at-m](https://artifacthub.io/packages/search?org=it-at-m) an.
* Java/Maven Artefakte sind unter der _groupId_ `de.muenchen` auf [Maven Central](https://central.sonatype.com/search?q=de.muenchen) veröffentlicht.
* NPM Pakete sind im Package-Scope [`@muenchen` auf npmjs.org](https://www.npmjs.com/search?q=%40muenchen) veröffentlicht.

## Repository-Struktur

Software-Repositories können unterschiedlich strukturiert sein. Ob ein Projekt-Repository (Monorepo) oder ein Multi-Repository-Ansatz gewählt wird, sollte stets eine gut begründete, projektspezifische Entscheidung sein.

Beide Varianten haben spezifische Stärken und Schwächen. In vielen Fällen empfiehlt sich ein Projekt-Repository, es gibt jedoch auch nachvollziehbare Gründe, die für ein Multirepo sprechen. Wir nutzen beide Ansätze: Zum Beispiel als Projekt-Repository [digiwf-core](https://github.com/it-at-m/digiwf-core) und als Multirepo die [dave-](https://github.com/orgs/it-at-m/repositories?q=dave&type=all&language=&sort=) Projekte.

Im Zweifelsfall sollte ein [Projekt-Repository](#projektrepo) bevorzugt werden.

Diese Empfehlung gilt insbesondere für Projekte auf GitHub, ist aber grundsätzlich auf jedes Git-Repository (z.B. `git.muenchen.de`) anwendbar.

### Projektrepo

Ein __Projektrepo__ ist eine Softwareentwicklungsstrategie, bei der der Code für mehrere zusammengehörige Services innerhalb eines Projekts in einem gemeinsamen Repository verwaltet wird. Im Gegensatz dazu stehen __Multirepos__, bei denen jeder Microservice in einem eigenen Repository gepflegt wird.

__Vorteile eines Projektrepos:__

* Abhängigkeiten zwischen Services innerhalb eines Projekts (z. B. ein neues Feature, das Änderungen im Frontend und Backend erfordert) können __gemeinsam entwickelt, getestet und released__ werden – inklusive Pull Requests, Tests und Deployments.
* Ein Projektrepo erleichtert es Außenstehenden, __schnell zu erkennen, welche Komponenten zusammengehören__.
* Entwicklerinnen und Entwickler können __eine vollständige Entwicklungsumgebung__ mit allen benötigten Diensten einfacher aufsetzen.
* Es gibt eine zentrale `README.md`, die eine [__übersichtliche Dokumentation__](usability-analysis#dokumentation) des Gesamtprojekts bieten kann. Ergänzend empfiehlt sich eine Doku-Website in einem `/docs`-Verzeichnis oder als eigenständige Doku-Website.
* Die __Gesamtübersicht auf GitHub__ (z. B. [github.com/orgs/it-at-m/repositories](https://github.com/orgs/it-at-m/repositories)) bleibt übersichtlich, da weniger Einzel-Repositories entstehen.

Ein Projektrepo eignet sich besonders für Projekte, in denen viele Services eng miteinander verzahnt und voneinander abhängig sind.

### Multirepo

Für Multirepos spricht:

* Jedem Microservice ist genau ein Repository und eine Pipeline zugeordnet. Dies macht die Entwicklung übersichtlicher.
* Ein Monorepo macht die externe Zusammenarbeit komplexer, da man immer das ganze Projekt forken muss.
* Ein Projekt, das aus verschiedenen Services mit __unterschiedlichen Technologien__ besteht, würde in einem Monorepo zu Vermischungen führen und ggf. zu Merge-Konflikten, die für Personen ohne Kenntnisse in Technologie A oder B schwer zu lösen sind.
* Pipelines sind weniger kompliziert als in Monorepos.
* __Weniger Daten__ als bei Monorepos: Das Klonen und Nachvollziehen von Änderungen (z. B. mit `git blame`) geht schneller.
* Fehler im __main branch__ betreffen nur einen Microservice, nicht das gesamte Produkt oder den gesamten Service.

Multirepos eignen sich vor allem für eigenständige Services und insbesondere für Libraries, die in anderen Projekten genutzt werden sollen.

### Monorepo

> Spricht man von einem Monorepo-Ansatz, bedeutet dies im Prinzip, dass es nur ein einziges Repository im gesamten Unternehmen gibt. In diesem Repository sind  alle Projekte des Unternehmens enthalten. Dazu gehören sowohl aktive als auch inaktive Projekte.
> Der bekannteste Fall eines Monorepos im produktiven Einsatz ist Google, das ein  eigenentwickeltes Sourcecode-Management-Tool gebaut hat, um damit genau ein  einziges Repository zu verwalten. Auch Meta Platforms, das Unternehmen hinter  Facebook und Instagram, setzt im Wesentlichen auf ein Monorepo, bei dem die Git-kompatible Eigenentwicklung [Sapling](https://engineering.fb.com/2022/11/15/open-source/sapling-source-control-scalable/) zum Einsatz kommt, die Ende 2022 als Open  Source veröffentlicht wurde.  
> So ein Monorepo ist verdammt riesig und enthält die Historie von (fast) allen Projekten der Firma.
> [^devops]
<!-- separate quote -->
> A monorepo is a single repository containing __multiple distinct projects__, with well-defined relationships. ([monorepo.tools](https://monorepo.tools/))

Der Größe eines Monorepos sind praktisch keine Grenzen gesetzt:

> Google, for example, is theorized to have the largest code repository ever, which has thousands of commits per day and is over 80 TBs large.
> (aus [semaphoreci.com - What is a monorepo?](https://semaphoreci.com/blog/what-is-monorepo))

Ein Monorepo bei der LHM wäre beispielsweise dann gegeben, wenn [Refarch](https://github.com/it-at-m/refarch), alle Refarch-Projekte, das [BayernID-Plugin](https://github.com/it-at-m/BayernID-Plugin) als unabhängiger, aber genutzter SSO-Dienst und weitere Projekte gemeinsam in einem einzigen Repository verwaltet würden.

### Regeln

* __[Dokumentation](usability-analysis#dokumentation)__: Die zahlreichen Services in einem Monorepo sollten in der `README.md` dokumentiert und mit Links auf die jeweiligen Dateien oder Verzeichnisse versehen werden.
* __Namenskonvention__: Alle Multirepos eines Projekts oder Produkts sind mit einem einheitlichen __Prefix__ und einem `-` zu benennen (z. B. [dave-](https://github.com/orgs/it-at-m/repositories?q=dave&type=all&language=&sort=)).

[^devops]: Sujeevan Vijayakumaran: DevOps Wie IT-Projekte mit einem modernen Toolset und der richtigen Kultur gelingen ISBN 978-3-8362-9099-9 5.5.4 Was ist eigentlich mit Monorepos?
