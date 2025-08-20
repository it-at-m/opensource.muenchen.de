# Dokumentation von Open Source Software

Eine umfassende Dokumentation ist für jede Software unerlässlich, insbesondere für Open Source Software, die von anderen genutzt oder verändert werden soll. Eine klare und detaillierte Dokumentation im Quellcode ist eine grundlegende Voraussetzung, um die Zugänglichkeit und Nutzbarkeit der Software zu gewährleisten. Effektive Dokumentation kann den Unterschied zwischen einer positiven und einer negativen Nutzererfahrung ausmachen. Eine Umfrage von GitHub aus dem Jahr 2017 zeigt, dass „unvollständige oder verwirrende Dokumentation“ die häufigste Beschwerde von Entwickler*innen ist.

## Struktur der Dokumentation

Um eine effektive Dokumentation zu gewährleisten, sind folgende Elemente erforderlich:

### README.md

Jedes Repository muss eine `README.md`-Datei im Hauptverzeichnis enthalten. Diese Datei sollte alle Abschnitte des [OSS Repository Templates](https://github.com/it-at-m/oss-repository-en-template/blob/main/README.md) umfassen.  
**Wichtig:** Die `README.md`-Datei muss in englischer Sprache verfasst sein, um eine breitere Zielgruppe von Open Source-Enthusiasten weltweit anzusprechen und Sprachbarrieren zu vermeiden.

### Dokumentationsordner `/docs`

Im Ordner `/docs` können technische Dokumentationen thematisch strukturiert abgelegt werden. Dieser Ordner kann auch als Grundlage für eine Website dienen. Die technische Dokumentation sollte vorzugsweise nach dem Prinzip „English First“ verfasst werden, um international verständlich zu sein.

### Website

Für größere Projekte oder Multirepositories kann eine Dokumentationswebsite unter einer Subdomain von `*.oss.muenchen.de` erstellt werden (z. B. [digiwf.oss.muenchen.de](https://digiwf.oss.muenchen.de)).  
Die gesamte Domain `muenchen.de` ist auf [GitHub Pages](https://github.com/organizations/it-at-m/settings/pages) verifiziert, was für alle Projekte gilt.  
Um eine Projekt-Website zu erstellen, kann die Subdomain im entsprechenden Projekt-Repository für GitHub Pages angelegt werden.

Um sicherzustellen, dass die Subdomain funktioniert, ist es erforderlich, einen DNS-Eintrag zu erstellen. Hierfür muss ein CNAME-Eintrag mit der genauen Subdomain im DNS hinterlegt werden.

Zur Überprüfung, ob der DNS-Eintrag korrekt gesetzt wurde, kann [MX-Toolbox](https://mxtoolbox.com/TXTLookup.aspx) verwendet werden.  
Nach erfolgreicher Einrichtung sollte die über GitHub Pages veröffentlichte Seite unter der jeweiligen Subdomain, z. B. <http://digiwf.oss.muenchen.de/>, erreichbar sein.  
Ein Benutzerhandbuch oder eine allgemeine Produktdokumentation sollte idealerweise in beiden Sprachen, Deutsch und Englisch, verfügbar sein.

## Herausforderungen bei der Dokumentation

Das Erstellen und Pflegen von Dokumentation kann eine Herausforderung sein. Sie erfordert Zeit und muss regelmäßig aktualisiert werden, um Änderungen in der Software zu berücksichtigen. Mangelnde oder veraltete Dokumentation kann zu Fehlern, höheren Supportkosten und einer verkürzten Lebensdauer des Produkts führen. Daher ist es entscheidend, dass Entwickler die Bedeutung der Dokumentation nicht unterschätzen.

## Best Practices für effektive Dokumentation

Um die Qualität der Dokumentation zu verbessern und eine inklusive Community zu schaffen, sollten folgende Best Practices beachtet werden:

1. **Gemeinsame Terminologie:** Konsistente Begriffsdefinitionen und -verwendung fördern die Kommunikation innerhalb der Community.  
2. **Beitragsrichtlinien:** Klare Richtlinien erleichtern es Nutzern, zur Dokumentation beizutragen.  
3. **Dokumentationsvorlagen:** Vorlagen helfen, Informationen konsistent zu erfassen.  
4. **Dokumentation neuer Funktionen:** Jede neue oder aktualisierte Funktion sollte dokumentiert werden, um den Nutzern die Anwendung zu erleichtern.  
5. **Regelmäßige Überprüfungen:** Mindestens vierteljährliche Aktualisierungen der Inhalte sind notwendig, um deren Relevanz zu gewährleisten.

Durch die Umsetzung dieser Maßnahmen kann die Dokumentation von Open Source Software wesentlich verbessert werden, was zu einer höheren Nutzerzufriedenheit und einer lebendigen, inklusiven Community führt.  
Effektive Dokumentation ist nicht nur für die Nutzer von Vorteil, sondern trägt auch zum langfristigen Erfolg des Projekts bei.
