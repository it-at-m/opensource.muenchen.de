# Repositories

[Public Code](publish.html) definiert sich durch freie [Lizenzen](licenses.html), aber auch durch öffentlich zugänglichen  __Quellcode__ und __Artefakte__.


## Code

Wir wollen Bürger\*innen, Entwickler\*innen anderer Behörden, Citizen Developer, grundsätzlich allen interessierten Menschen, die Möglichkeit geben unseren Code zu verwenden, verstehen, verbreiten und auch zu verbessern.

GitHub ist das bekannteste öffentliche Code-Repository für freie Software.
Nutzer\*innen aus der FOSS-Community suchen, teilen und diskutieren freien Code hauptsächlich auf GitHub.
Wir richten uns nach der Community und nutzen ebenso [GitHub für Public Code der Landeshauptstadt München](https://github.com/it-at-m/).
Durch die Codeverwaltung auf GitHub bieten wir eine niederschwellige Teilhabe für alle an.  
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

