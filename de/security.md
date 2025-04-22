# Security

Software Security ist vor allem bei der Verarbeitung und Speicherung von personenbezogenen Daten eine wichtige Voraussetzung. Dies gilt insbesondere auch für veröffentlichte Software.

## Grundlegendes Verständnis für Sicherheitsrelevante Aspekte

Beitragende Entwickler sollten – wie alle Entwickler – über ein grundlegendes Verständnis sicherheitsrelevanter Aspekte verfügen. Die folgenden Punkte sind hierbei von besonderer Bedeutung:

### Keine Veröffentlichung von Passwörtern: Passwörter dürfen in keinem Git-Repository erscheinen, unabhängig von der Plattform. Sollte es doch vorkommen,  müssen die entsprechenden Daten umgehend ausgetauscht werden, auch wenn dies zusätzlichen Aufwand verursacht.

### Vertraulichkeit von Infrastruktur-Daten: Es ist ebenfalls unerlässlich, Infrastruktur-Daten nicht zu veröffentlichen. Obwohl dies nicht so gravierend ist wie die Offenlegung von Passwörtern, sollten die spezifischen Infrastruktur-Einstellungen der LHM stets vom Applikationscode getrennt und in einem separaten Infrastruktur-Git-Repository abgelegt werden.

### Vermeidung der Nennung von Personen: In Kommentaren sollten keine Namen von Personen erwähnt werden, die nicht direkt im GitHub-Repository mitwirken. Zum Beispiel sollten fachliche Anforderungen nicht mit Formulierungen wie „Herr Maier hat sich gewünscht …“ versehen werden.

### Sensible Daten in Logausgaben: Es ist darauf zu achten, dass keine sensiblen Daten in Logausgaben erscheinen.

### Fehlerdetails in Frontendausgaben: Zudem sollten keine detaillierten Fehlermeldungen in den Frontendausgaben angezeigt werden.

### Externe Quellen: Das Nachladen von Ressourcen aus externen Quellen, wie beispielsweise JavaScript-Bibliotheken, sollte vermieden werden.

### Kryptografische Logik: Die Implementierung eigener kryptografischer Logik ist zu unterlassen, um Sicherheitsrisiken zu vermeiden.

### Cookies: Bei der Verwendung von Cookies sollte darauf geachtet werden, dass, wo immer möglich, die Attribute „Secure“, „HttpOnly“ und „SameSite“ verwendet werden.

Durch die Beachtung dieser Grundsätze kann die Sicherheit der Software erheblich verbessert werden.

## Meldung von Sicherheitsanfälligkeiten

Im Gegensatz zu anderen Plattformen wie GitLab bietet GitHub keine Möglichkeit zur vertraulichen Meldung von Sicherheitsproblemen. Daher sollten sicherheitsrelevante Bugs nicht als öffentliche, normale Probleme (Issues) gemeldet werden. Jedes Projekt muss die E-Mail-Adresse opensource@muenchen.de angeben, um sicherheitsrelevante Bugs zu melden.

## Automatisierte Tests

Im internen Continuous Integration/Continuous Deployment (CI/CD) Prozess ist der OWASP Dependency Check integriert, der zur Risikoanalyse zwingend in den Build-Prozess einbezogen werden muss. 

Auf GitHub sollte in den Aktionen die "Advanced Security Policy as Code" integriert werden. Für alle Repositories muss die globale Sicherheitskonfiguration "it@M Security Config" (nur für Administratoren) aktiviert werden. Diese Konfiguration umfasst unter anderem:

- **Push-Schutz**: Blockiert Commits, die unterstützte geheime Daten enthalten.

Zusätzlich sollte der Renovate-Bot aktiviert werden, um Fixes für Dependabot-Alerts zu ermöglichen (Standardkonfiguration). Es ist wichtig, alle Sicherheitswarnungen im Sicherheitsbereich der Repositories zu beachten und entsprechend zu bearbeiten.

Alle geöffneten Pull Requests (PR) und Issues müssen zeitnah, innerhalb von zwei Wochen, bearbeitet werden. Nach Ablauf dieser Frist werden alle offenen PR und Issues dem Maintainer des Repositories zur weiteren Bearbeitung zugewiesen. Das Team "itm-security" wird über offene Alerts informiert und wird aktiv auf die betreffenden Teams zugehen.

## Öffentliche Sicherheitstests

MGM Security Partners führt öffentliche Sicherheitstests (Penetrationstests) für freie und Open Source Software (FOSS) durch. In der Vergangenheit hat das Bundesamt für Sicherheit in der Informationstechnik (BSI) den Quellcode des Messenger-Dienstes Matrix und der Social-Media-Anwendung Mastodon überprüft und dabei Sicherheitsanfälligkeiten entdeckt.
In den Ergebnisberichten behält sich MGM das Recht vor, die Texte und Formate im Vergleich zu vertraulichen Tests anzupassen, sodass sie veröffentlicht werden können. 

## Weblinks

Falls Unklarheiten zu bestimmten Punkten bestehen, wird empfohlen, einen Blick auf die folgenden Ressourcen zu werfen:

- [IT-Grundschutz-Kompendium](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/IT-Grundschutz-Kompendium/it-grundschutz-kompendium_node.html)
- [OWASP-Liste](https://owasp.org/www-project-top-ten/)
