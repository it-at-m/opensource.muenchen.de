# Security

Software Security ist vor allem bei der Verarbeitung und Speicherung von personenbezogenen Daten eine wichtige Voraussetzung.
Sichere Software ist ein Themenfeld im Informationssicherheitsmanagements (ISM), das sowohl den sicheren Einsatz von Software als auch die sichere Softwareentwicklung regelt.
Dies gilt für freie Software gleichermaßen wie für properitäre Software.

Ein wesentlicher Vorteil von Open Source Software liegt in der __Transparenz__, die fundierte Sicherheitsanalysen überhaupt ermöglicht.
Eine Quellcodeanalyse ist nur bei Open Source Software möglich, setzt jedoch personelle und fachliche Ressourcen voraus.
Zwar ist es strategisch sinnvoll eigene Kompetenzen aufzubauen oder die Zusammenarbeit mit externen Open Source Software-Dienstleistern zu nutzen.
Alternativ kann Open Source Software auch von unterschiedlichen Akteuren sicherheitstechnisch geprüft werden.
Das können staatliche Institutionen, kommerzielle Unternehmen aber auch unabhängige Sicherheitsexperten sein, die Sicherheitslücken identifizieren.
So haben Entwickler\*innen, aber auch Nutzer\innen, eine Möglichkeit diese Lücken schnell zu schließen.

[Security through obscurity](https://de.wikipedia.org/wiki/Security_through_obscurity) –  also Sicherheit durch Verschleierung, ist ein problematischer Ansatz, da er ein trügerisches Sicherheitsgefühl vermittelt und Schwachstellen lediglich versteckt, statt sie systematisch zu beheben.
Angreifer können solche Lücken über Zeit dennoch aufdecken, etwa durch Reverse Engineering oder durch den Handel mit Zero-Day-Exploits.

Offenheit fördert nicht nur Innovation, sondern bietet langfristig eine verlässlichere Sicherheitsbasis.
Deswegen fordern das [BSI](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Freie-Software/freie-software.html), sowie die [AG KRITIS](https://ag.kritis.info/politische-forderungen/#opensource) den Einsatz von Open-Source-Software zur Verbesserung der IT-Sicherheit und Reduzierung von Herstellerabhängigkeiten.

## Use

Bei der [Auswahl und Nutzung von Open Source Software](usability-analysis) ist die Projektreife ein zentrales Kriterium für die Sicherheit.
Dabei wird kein Unterschied gemacht zwischen [eingesetzter](use) und [intern entwickelter](publish) Software, für beide gelten dieselben Anforderungen.

Die Transparenz von Open Source Software kann jedoch nur dann effektiv genutzt werden, wenn:

- ausreichende personelle und fachliche Ressourcen vorhanden sind
- eine systematische Bewertungsmethodik etabliert ist

In unserer [Nutzbarkeitsanalyse von freier Software](usability-analysis#sicherheit) ist Sicherheit daher neben Codequalität der wichtigste Faktor.

## Publish

Die Landeshauptstadt München verfolgt den Grundsatz [Public Money, Public Code](publish):
Eigenentwickelte Software soll, wo immer möglich, als Open Source veröffentlicht werden.
Ziel ist es, nicht nur die eigene IT-Sicherheit zu gewährleisten, sondern auch Dritten eine sichere, transparente und nachvollziehbare Nachnutzung zu ermöglichen.

### SBOM

Eine Software Bill of Materials (SBOM) ist eine strukturierte Auflistung aller in einer Software enthaltenen Komponenten, einschließlich Open Source und Drittanbieter-Bibliotheken.
Sie schafft Transparenz über Abhängigkeiten und unterstützt dabei, bekannte Sicherheitslücken frühzeitig zu identifizieren und zu schließen.
Die Landeshauptstadt München setzt SBOMs ein, um die Sicherheit in der Softwarelieferkette gezielt zu verbessern. Sie folgt damit den Empfehlungen des [Bundesamts für Sicherheit in der Informationstechnik (BSI)](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/TR-03183-2-SBOM-Anforderungen.html), das in der Technischen Richtlinie TR-03183 SBOMs als zentrales Element für Cyber-Resilienz definiert.

Bei eigen-entwickelter Software wird bei der LHM das [CycloneDX](https://cyclonedx.org/)-Format verwendet.

Die [RefArch](https://refarch.oss.muenchen.de/cross-cutting-concepts/security.html) stellt hierfür standardisierte Mechanismen bereit: In allen Vorlagen (z. B. Java- und NodeJS-basierten Templates sowie dem API-Gateway) wird automatisch eine SBOM erzeugt und über einen standardisierten Endpunkt (/actuator/sbom/application) bereitgestellt.
Dies erleichtert zwar die Sicherheitsbewertung, birgt aber auch Risiken, wenn etwa SBOMs in nicht-öffentlichen Projekten unbeabsichtigt vertrauliche Informationen offenlegen. Deshalb wird empfohlen, bei nicht öffentlichen oder sicherheitskritischen Anwendungen die externe Sichtbarkeit des SBOM-Endpunkts zu deaktivieren.

### Automatisierte Tests

Der interne CI/CD-Prozess umfasst den [OWASP](https://de.wikipedia.org/wiki/Open_Worldwide_Application_Security_Project) Dependency Check zur Risikoanalyse.
Auf GitHub müssen die "Advanced Security Policy as Code" implementiert werden, und die globale Sicherheitskonfiguration muss für alle Repositories aktiviert sein.

Sicherheitsrelevante Pull Requests und Issues müssen innerhalb von zwei Wochen bearbeitet werden. Nach dieser Frist werden sie an die jeweiligen [Maintainer](https://de.wikipedia.org/wiki/Maintainer) weitergeleitet.

### Responsible Disclosure

Sicherheitsrelevante Bugs dürfen nicht als öffentliche Issues gemeldet werden.
Um eine [responsible private Disclosure](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#private-disclosure) zu ermöglichen sollen auf GitHub alle Projekte [private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/configuring-private-vulnerability-reporting-for-a-repository) aktiviert haben, zusätzlich muss jedes Projekt eine E-Mail-Adresse (z. B. [opensource@muenchen.de](mailto:opensource@muenchen.de)) angeben, um auch Menschen ohne Github-Account Meldung von Sicherheitslücken zu ermöglichen.
