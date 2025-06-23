Der folgende Text basiert auf dem Kapitel 2.4 von Dr. Thomas Reeg aus *„Open Source in Kommunen – Teil 2: Aufbau einer Open Source Governance“* (https://www.kgst.de/doc/20241219A0004), herausgegeben von der [KGSt](https://www.kgst.de/) (Reeg, 2024).

## Security

Software Security ist vor allem bei der Verarbeitung und Speicherung von personenbezogenen Daten eine wichtige Voraussetzung. Dies gilt insbesondere auch für veröffentlichte Software. Sichere Softwareentwicklung ist Teil des umfassenderen Informationssicherheitsmanagements (ISM), das sowohl die Eigenentwicklung als auch den Einsatz von Software – insbesondere Open Source Software (OSS) – sicher gestalten soll (Reeg, 2024).

### Grundlegendes Verständnis für sicherheitsrelevante Aspekte

Beitragende Entwickler sollten – wie alle Entwickler – über ein grundlegendes Verständnis sicherheitsrelevanter Aspekte verfügen. Die folgenden Punkte sind hierbei von besonderer Bedeutung (Reeg, 2024):

- **Keine Veröffentlichung von Passwörtern**  
  Passwörter dürfen in keinem Git-Repository erscheinen, unabhängig von der Plattform. Sollte es doch vorkommen, müssen die entsprechenden Daten umgehend ausgetauscht werden, auch wenn dies zusätzlichen Aufwand verursacht (Reeg, 2024).

- **Vertraulichkeit von Infrastruktur-Daten**  
  Es ist wichtig, Infrastruktur-Daten nicht zu veröffentlichen. Obwohl dies weniger gravierend ist als die Offenlegung von Passwörtern, sollten spezifische Infrastruktur-Einstellungen stets vom Applikationscode getrennt und in einem separaten Infrastruktur-Git-Repository abgelegt werden (Reeg, 2024).

- **Vermeidung der Nennung von Personen**  
  In Kommentaren sollten keine Namen von Personen erwähnt werden, die nicht direkt im GitHub-Repository mitwirken. Zum Beispiel sollten fachliche Anforderungen nicht mit Formulierungen wie „Herr Maier hat sich gewünscht …“ versehen werden (Reeg, 2024).

- **Sensible Daten in Logausgaben**  
  Es ist darauf zu achten, dass keine sensiblen Daten in Logausgaben erscheinen (Reeg, 2024).

- **Fehlerdetails in Frontendausgaben**  
  Zudem sollten keine detaillierten Fehlermeldungen in den Frontendausgaben angezeigt werden (Reeg, 2024).

- **Externe Quellen**  
  Das Nachladen von Ressourcen aus externen Quellen, wie beispielsweise JavaScript-Bibliotheken, sollte vermieden werden (Reeg, 2024).

- **Kryptografische Logik**  
  Die Implementierung eigener kryptografischer Logik ist zu unterlassen, um Sicherheitsrisiken zu vermeiden (Reeg, 2024).

- **Cookies**  
  Bei der Verwendung von Cookies sollte darauf geachtet werden, dass, wo immer möglich, die Attribute „Secure“, „HttpOnly“ und „SameSite“ verwendet werden (Reeg, 2024).

Durch die Beachtung dieser Grundsätze kann die Sicherheit der Software erheblich verbessert werden (Reeg, 2024).

### Meldung von Sicherheitsanfälligkeiten

Im Gegensatz zu anderen Plattformen wie GitLab bietet GitHub keine Möglichkeit zur vertraulichen Meldung von Sicherheitsproblemen. Daher sollten sicherheitsrelevante Bugs nicht als öffentliche, normale Probleme (Issues) gemeldet werden. Jedes Projekt muss die E-Mail-Adresse opensource@muenchen.de angeben, um sicherheitsrelevante Bugs zu melden (Reeg, 2024).

### Automatisierte Tests

Der interne CI/CD-Prozess umfasst den OWASP Dependency Check zur Risikoanalyse. Auf GitHub sollte die "Advanced Security Policy as Code" implementiert werden, und die globale Sicherheitskonfiguration muss für alle Repositories aktiviert werden (Reeg, 2024).

Alle offenen Pull Requests (PR) und Issues müssen innerhalb von zwei Wochen bearbeitet werden. Nach dieser Frist werden sie dem Maintainer des Repositories zur weiteren Bearbeitung zugewiesen (Reeg, 2024).

Darüber hinaus wird empfohlen, eine Software Bill of Materials (SBOM) zu erstellen, um alle verwendeten OSS-Komponenten transparent offenzulegen. So können bekannte Schwachstellen frühzeitig erkannt und Sicherheitsmaßnahmen eingeleitet werden (Reeg, 2024).

### Projektreife von OSS

Bei der Auswahl und Nutzung von Open Source Software ist die Projektreife ein zentrales Kriterium für die Sicherheit. Zu bewerten sind dabei (Reeg, 2024):

- Stabilität und Reifegrad des Projekts  
- Größe und Aktivität der Community  
- Reaktionszeit auf Sicherheitslücken  
- Qualität der Kommunikation (z. B. Umgang mit Feature Requests)  
- Transparenz der Release- und Patchprozesse  

Ein Abgleich mit Schwachstellendatenbanken (z. B. CVE) und die Einsicht in Code-Repositories sind hilfreich, um ein realistisches Risikobild zu erhalten. OSS bietet hier aufgrund seiner Offenheit grundsätzlich Vorteile gegenüber proprietärer Software, erfordert aber auch eigene Analysefähigkeiten und definierte Bewertungskriterien (Reeg, 2024).

### Öffentliche Sicherheitstests

MGM Security Partners führt öffentliche Sicherheitstests (Penetrationstests) für freie und Open Source Software (FOSS) durch. In der Vergangenheit hat das Bundesamt für Sicherheit in der Informationstechnik (BSI) den Quellcode des Messenger-Dienstes Matrix und der Social-Media-Anwendung Mastodon überprüft und dabei Sicherheitsanfälligkeiten entdeckt (Reeg, 2024).

MGM behält sich das Recht vor, die Ergebnisse für die Veröffentlichung anzupassen (Reeg, 2024).

### Strategische Empfehlungen und Kontrolle

Ein wesentlicher Vorteil von OSS liegt in der Transparenz, die fundierte Sicherheitsanalysen ermöglicht. Kontrolle ist im OSS-Umfeld möglich, setzt jedoch personelle und fachliche Ressourcen voraus. Strategisch sinnvoll kann der Aufbau eigener Kompetenzen oder die Zusammenarbeit mit externen OSS-Dienstleistern sein. Diese bieten oft Support-Modelle mit sicherheitsgeprüften Updates an (Reeg, 2024).

Eine enge Verzahnung von IT-Management und Informationssicherheit ist notwendig, um diese Anforderungen umzusetzen. Interkommunale Zusammenarbeit kann zudem helfen, Bewertungsprozesse zu standardisieren, Ergebnisse zu teilen und Aufwand zu reduzieren (Reeg, 2024).

## Weblinks

Falls Unklarheiten zu bestimmten Punkten bestehen, wird empfohlen, einen Blick auf die folgenden Ressourcen zu werfen:

- IT-Grundschutz-Kompendium  
- OWASP-Liste

## Literaturverzeichnis

Reeg, T. (2024). Kapitel 2.4. In *Open Source in Kommunen – Teil 2: Aufbau einer Open Source Governance*. Köln: KGSt.
