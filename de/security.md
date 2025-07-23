## Security

Software Security ist vor allem bei der Verarbeitung und Speicherung von personenbezogenen Daten eine wichtige Voraussetzung. Dies gilt insbesondere auch für veröffentlichte Software. Sichere Softwareentwicklung ist Teil des umfassenderen Informationssicherheitsmanagements (ISM), das sowohl die Eigenentwicklung als auch den Einsatz von Software – insbesondere Open Source Software (OSS) – sicher gestalten soll.

Ein wesentlicher Vorteil von Open Source Software liegt in der Transparenz, die fundierte Sicherheitsanalysen ermöglicht. Kontrolle ist im Open Source Software-Umfeld möglich, setzt jedoch personelle und fachliche Ressourcen voraus. Strategisch sinnvoll kann der Aufbau eigener Kompetenzen oder die Zusammenarbeit mit externen Open Source Software-Dienstleistern sein. Diese bieten oft Support-Modelle mit sicherheitsgeprüften Updates an.

**Security through obscurity** –  also Sicherheit durch Verschleierung, ist ein problematischer Ansatz, da er ein trügerisches Sicherheitsgefühl vermittelt und Schwachstellen lediglich versteckt, statt sie systematisch zu beheben. Angreifer können solche Lücken über Zeit dennoch aufdecken, etwa durch Reverse Engineering. Im Gegensatz dazu setzt Open Source Software auf Transparenz. Der offen zugängliche Quellcode ermöglicht unabhängige Prüfungen und kontinuierliche Verbesserung. Sicherheit entsteht hier nicht durch Geheimhaltung, sondern durch überprüfbare und robuste Mechanismen, gestützt durch Community-Wissen, bewährte Sicherheitspraktiken und regelmäßige Updates. Offenheit fördert nicht nur Innovation, sondern bietet langfristig eine verlässlichere Sicherheitsbasis. (Vgl. https://de.wikipedia.org/wiki/Security_through_obscurity)

Eine enge Verzahnung von IT-Management und Informationssicherheit ist notwendig, um diese Anforderungen umzusetzen. Interkommunale Zusammenarbeit kann zudem helfen, Bewertungsprozesse zu standardisieren, Ergebnisse zu teilen und Aufwand zu reduzieren.

 Das ist auch die strategische Position des BSI, sowie der AG KRITIS. (+ lnks)

## Use

### Projektreife von OSS

Bei der [Auswahl und Nutzung von Open Source Software](https://opensource.muenchen.de/de/usability-analysis.html) ist die Projektreife ein zentrales Kriterium für die Sicherheit. 
Dabei wird kein Unterschied gemacht zwischen eingesetzter ([Use](use.md)) und intern entwickelter (Inhouse) Software, für beide gelten dieselben Anforderungen.

Ein klarer Vorteil von Open Source Software liegt in ihrer Transparenz, die tiefgreifende Sicherheitsanalysen überhaupt erst ermöglicht – im Gegensatz zu proprietärer Software

Diese Transparenz kann jedoch nur dann effektiv genutzt werden, wenn:

  - ausreichende personelle und fachliche Ressourcen vorhanden sind

  - eine systematische Bewertungsmethodik etabliert ist

> Plattformen wie [Open CoDE](https://www.open-code.de/) unterstützen Kommunen bei der strukturierten Bewertung eingesetzter Open Source Software.

###  CVE 

Ein Abgleich mit Schwachstellendatenbanken (z. B. CVE) und die Einsicht in Code-Repositories sind hilfreich, um ein realistisches Risikobild zu erhalten. OSS bietet hier aufgrund seiner Offenheit grundsätzlich Vorteile gegenüber proprietärer Software, erfordert aber auch eigene Analysefähigkeiten und definierte Bewertungskriterien.

## Publish

Die Landeshauptstadt München verfolgt den Grundsatz [Public Money, Public Code](https://publiccode.eu/de/): Eigenentwickelte Software soll, wo immer möglich, als Open Source veröffentlicht werden. Ziel ist es, nicht nur die eigene IT-Sicherheit zu gewährleisten, sondern auch Dritten eine sichere, transparente und nachvollziehbare Nachnutzung zu ermöglichen.

### SBOM

Eine Software Bill of Materials (SBOM) ist eine strukturierte Auflistung aller in einer Software enthaltenen Komponenten, einschließlich Open Source und Drittanbieter-Bibliotheken. Sie schafft Transparenz über Abhängigkeiten und unterstützt dabei, bekannte Sicherheitslücken frühzeitig zu identifizieren und zu beheben.
Die Landeshauptstadt München setzt SBOMs ein, um die Sicherheit in der Software-Lieferkette gezielt zu verbessern. Sie folgt damit den Empfehlungen des [Bundesamts für Sicherheit in der Informationstechnik (BSI)](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/TR-03183-2-SBOM-Anforderungen.html), das in der Technischen Richtlinie TR-03183 SBOMs als zentrales Element für Cyber-Resilienz definiert.

Sowohl bei intern entwickelter als auch bei eingesetzter Software wird das [CycloneDX](https://cyclonedx.org/)-Format verwendet.

Die [RefArch](https://refarch.oss.muenchen.de/cross-cutting-concepts/security.html ) stellt hierfür standardisierte Mechanismen bereit: In allen Vorlagen (z. B. Java- und NodeJS-basierten Templates sowie dem API-Gateway) wird automatisch eine SBOM erzeugt und über einen standardisierten Endpunkt (/actuator/sbom/application) bereitgestellt. Dies erleichtert die Sicherheitsbewertung, birgt aber auch Risiken, wenn etwa SBOMs in nicht-öffentlichen Projekten unbeabsichtigt vertrauliche Informationen offenlegen. Deshalb wird empfohlen, bei nicht öffentlichen oder sicherheitskritischen Anwendungen die externe Sichtbarkeit des SBOM-Endpunkts zu deaktivieren. 

### Automatisierte Tests

Der interne CI/CD-Prozess umfasst den OWASP Dependency Check zur Risikoanalyse. Auf GitHub sollte die "Advanced Security Policy as Code" implementiert werden, und die globale Sicherheitskonfiguration muss für alle Repositories aktiviert werden.

Sicherheitsrelevante Pull Requests und Issues müssen innerhalb von zwei Wochen bearbeitet werden. Nach dieser Frist werden sie an die jeweiligen Maintainer weitergeleitet.

### Meldung von Sicherheitslücken

Im Gegensatz zu anderen Plattformen wie GitLab bietet GitHub keine Möglichkeit zur vertraulichen Meldung von Sicherheitsproblemen. Daher sollten sicherheitsrelevante Bugs nicht als öffentliche, normale Probleme (Issues) gemeldet werden.  Jedes Projekt muss eine dedizierte E-Mail-Adresse (z. B. [opensource@muenchen.de](mailto:opensource@muenchen.de)) angeben, über die Sicherheitslücken gemeldet werden können (Responsible Disclosure).


### Operative Empfehluneg

Beitragende Entwickler sollten – wie alle Entwickler – über ein grundlegendes Verständnis sicherheitsrelevanter Aspekte verfügen. Die folgenden Punkte sind hierbei von besonderer Bedeutung 

- **Keine Veröffentlichung von Passwörtern**  
  Passwörter dürfen in keinem Git-Repository erscheinen, unabhängig von der Plattform. Sollte es doch vorkommen, müssen die entsprechenden Daten umgehend ausgetauscht werden, auch wenn dies zusätzlichen Aufwand verursacht.

- **Vertraulichkeit von Infrastruktur-Daten**  
  Es ist wichtig, Infrastruktur-Daten nicht zu veröffentlichen. Obwohl dies weniger gravierend ist als die Offenlegung von Passwörtern, sollten spezifische Infrastruktur-Einstellungen stets vom Applikationscode getrennt und in einem separaten Infrastruktur-Git-Repository abgelegt werden 

- **Vermeidung der Nennung von Personen**  
  In Kommentaren sollten keine Namen von Personen erwähnt werden, die nicht direkt im GitHub-Repository mitwirken. Zum Beispiel sollten fachliche Anforderungen nicht mit Formulierungen wie „Herr Maier hat sich gewünscht …“ versehen werden.

- **Sensible Daten in Logausgaben**  
  Es ist darauf zu achten, dass keine sensiblen Daten in Logausgaben erscheinen 

- **Fehlerdetails in Frontendausgaben**  
  Zudem sollten keine detaillierten Fehlermeldungen in den Frontendausgaben angezeigt werden

- **Externe Quellen**  
  Das Nachladen von Ressourcen aus externen Quellen, wie beispielsweise JavaScript-Bibliotheken, sollte vermieden werden 

- **Kryptografische Logik**  
  Die Implementierung eigener kryptografischer Logik ist zu unterlassen, um Sicherheitsrisiken zu vermeiden

- **Cookies**  
  Bei der Verwendung von Cookies sollte darauf geachtet werden, dass, wo immer möglich, die Attribute „Secure“, „HttpOnly“ und „SameSite“ verwendet werden .


## Weblinks

Falls Unklarheiten zu bestimmten Punkten bestehen, wird empfohlen, einen Blick auf die folgenden Ressourcen zu werfen:

- IT-Grundschutz-Kompendium  https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/IT-Grundschutz-Kompendium/it-grundschutz-kompendium_node.html  gern als Qelle nutzen
- OWASP-Liste

## Literaturverzeichnis

Reeg, T. (2024). Kapitel 2.4. In *Open Source in Kommunen – Teil 2: Aufbau einer Open Source Governance*. Köln: KGSt.