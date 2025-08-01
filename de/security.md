## Security

Software Security ist vor allem bei der Verarbeitung und Speicherung von personenbezogenen Daten eine wichtige Voraussetzung.
Sichere Software ist Teil des umfassenderen Informationssicherheitsmanagements (ISM), das sowohl den Einsatz von Software als auch die Eigenentwicklung sicher gestalten soll.
Dies gilt für freie Software gleichermaßen wie für properitäre Software.

Ein wesentlicher Vorteil von Open Source Software liegt in der __Transparenz__, die fundierte Sicherheitsanalysen überhaupt ermöglicht.
Eine umfassende Kontrolle ist mit Open Source Software erst möglich, setzt jedoch personelle und fachliche Ressourcen voraus.
Zwar ist es strategisch sinnvoll eigene Kompetenzen aufzubauen oder die Zusammenarbeit mit externen Open Source Software-Dienstleistern zu nutzen.
Aber Open Source Software kann auch von unterschiedlichen externen Akteuren sicherheitstechnisch geprüft werden.
Das sind staatliche Institutionen, kommerziellen Unternehmen aber auch Privatpersonen die Sicherheitsücken finden
So haben Entwickler, aber auch Nutzern, eine Möglichkeit diese Lücken schnell und umfassend zu beseitigen.

[Security through obscurity](https://de.wikipedia.org/wiki/Security_through_obscurity) –  also Sicherheit durch Verschleierung, ist ein problematischer Ansatz, da er ein trügerisches Sicherheitsgefühl vermittelt und Schwachstellen lediglich versteckt, statt sie systematisch zu beheben.
Angreifer können solche Lücken über Zeit dennoch aufdecken, etwa durch Reverse Engineering oder durch den Handel mit Zero-Day-Exploits.

Offenheit fördert nicht nur Innovation, sondern bietet langfristig eine verlässlichere Sicherheitsbasis.
Auch die strategische Position des [BSI](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Freie-Software/freie-software.html), sowie der [AG KRITIS](https://ag.kritis.info/politische-forderungen/#opensource) fordern den Einsatz von Open-Source-Software zur Verbesserung der IT-Sicherheit und Reduzierung von Herstellerabhängigkeiten.

## Use

Bei der [Auswahl und Nutzung von Open Source Software](./usability-analysis) ist die Projektreife ein zentrales Kriterium für die Sicherheit. 
Dabei wird kein Unterschied gemacht zwischen eingesetzter ([Use](use)) und intern entwickelter (Inhouse) Software, für beide gelten dieselben Anforderungen.

Diese Transparenz kann jedoch nur dann effektiv genutzt werden, wenn:

- ausreichende personelle und fachliche Ressourcen vorhanden sind
- eine systematische Bewertungsmethodik etabliert ist

In unserer [Nutzbarkeitsanalyse von freier Software](usability-analysis#sicherheit) ist Sicherheit daher neben Codequalität der wichtigste Faktor.

## Publish

Die Landeshauptstadt München verfolgt den Grundsatz [Public Money, Public Code](./publish.md):
Eigenentwickelte Software soll, wo immer möglich, als Open Source veröffentlicht werden.
Ziel ist es, nicht nur die eigene IT-Sicherheit zu gewährleisten, sondern auch Dritten eine sichere, transparente und nachvollziehbare Nachnutzung zu ermöglichen.

### SBOM

Eine Software Bill of Materials (SBOM) ist eine strukturierte Auflistung aller in einer Software enthaltenen Komponenten, einschließlich Open Source und Drittanbieter-Bibliotheken.
Sie schafft Transparenz über Abhängigkeiten und unterstützt dabei, bekannte Sicherheitslücken frühzeitig zu identifizieren und zu beheben.
Die Landeshauptstadt München setzt SBOMs ein, um die Sicherheit in der Software-Lieferkette gezielt zu verbessern. Sie folgt damit den Empfehlungen des [BSI](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/TR-03183-2-SBOM-Anforderungen.html), das in der Technischen Richtlinie TR-03183 SBOMs als zentrales Element für Cyber-Resilienz definiert.

Bei intern entwickelter Software wird das [CycloneDX](https://cyclonedx.org/)-Format verwendet.

Die [RefArch](https://refarch.oss.muenchen.de/cross-cutting-concepts/security.html ) stellt hierfür standardisierte Mechanismen bereit:
In allen Vorlagen (z. B. Java- und NodeJS-basierten Templates sowie dem API-Gateway) wird automatisch eine SBOM erzeugt und über einen standardisierten Endpunkt (/actuator/sbom/application) bereitgestellt. Dies erleichtert die Sicherheitsbewertung, birgt aber auch Risiken, wenn etwa SBOMs in nicht-öffentlichen Projekten unbeabsichtigt vertrauliche Informationen offenlegen.
Deshalb wird empfohlen, bei nicht öffentlichen oder sicherheitskritischen Anwendungen die externe Sichtbarkeit des SBOM-Endpunkts zu deaktivieren.

### Automatisierte Tests

Der interne CI/CD-Prozess umfasst den OWASP Dependency Check zur Risikoanalyse.
Auf GitHub sollte die "Advanced Security Policy as Code" implementiert werden, und die globale Sicherheitskonfiguration muss für alle Repositories aktiviert werden.

Sicherheitsrelevante Pull Requests und Issues müssen innerhalb von zwei Wochen bearbeitet werden. Nach dieser Frist werden sie an die jeweiligen Maintainer weitergeleitet.

### Meldung von Sicherheitslücken

Im Gegensatz zu anderen Plattformen wie GitLab bietet GitHub keine Möglichkeit zur vertraulichen Meldung von Sicherheitsproblemen. Daher sollten sicherheitsrelevante Bugs nicht als öffentliche, normale Probleme (Issues) gemeldet werden.
Jedes Projekt muss eine dedizierte E-Mail-Adresse (z. B. [opensource@muenchen.de](mailto:opensource@muenchen.de)) angeben, über die Sicherheitslücken gemeldet werden können (Responsible Disclosure).
