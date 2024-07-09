Freie Software wird über den offenen Zugang zum Quellcode, vor allem aber über die lizenzrechtlichen Eigenschaften definiert.  

## Nutzen

Beim [Einsatz von freier Software](./use) können wir alle [OSI Approved Licenses](https://opensource.org/licenses) nutzen.

## Code Contributions 

Wenn wir Open-Source-Software [selber verändern und wieder veröffentlichen](./improve#code-contributions), ist die jeweilige Lizenz zu beachten und es sind die geforderten Bedingungen einzuhalten.
In der Regel stellt das Verändern bestehender Software hinsichtlich der Lizenz kein Problem dar, da ein Fork des Repositorys gebildet wird, das auch die Lizenzdatei enthält.


## Eigenentwicklungen

Die [Veröffentlichung](./publish) der von der LHM [entwickelten Software](./in-house-development) erfolgt unter der [MIT-Lizenz](https://de.wikipedia.org/wiki/MIT-Lizenz), um eine Wiederverwendung möglichst wenig zu behindern.
Die MIT-Lizenz wird außerdem schon im Stadtratsbeschluss ["Neue Software im Open Source-Kontext entwickeln!"](https://risi.muenchen.de/risi/antrag/detail/6289779) vorgeschlagen.

### Einbindung in Eigenentwicklungen

Wir achten darauf, keine Software mit Lizenzen mit starkem Copyleft-Effekt zu nutzen. Dadurch sind wir frei in der Wahl der Lizenz für unsere eigene Software und vermeiden Lizenzkonflikte. 
Wir nutzen bevorzugt Software mit Lizenzen, die permissiv oder mit schwachem Copyleft-Effekt sind.

In der Praxis nutzen wir vor allem Software mit folgenden permissiven, von der [Open Source Initiative](https://opensource.org/licenses) geprüften Lizenzen:

* [Apache 2.0](https://de.wikipedia.org/wiki/Apache-Lizenz)
* [BSD](https://de.wikipedia.org/wiki/BSD-Lizenz)
* [MIT-Lizenz](https://de.wikipedia.org/wiki/MIT-Lizenz)
* [PostgrSQL-Lizenz](https://www.postgresql.org/about/licence/)
* [PHP-Lizenz](https://de.wikipedia.org/wiki/PHP-Lizenz)

Als Lizenzen mit schwachem Copyleft kommen in Frage:

* [Eclipse Public License](https://de.wikipedia.org/wiki/Eclipse_Public_License)
* [LGPL](https://de.wikipedia.org/wiki/GNU_Lesser_General_Public_License)
* [MPL](https://de.wikipedia.org/wiki/Mozilla_Public_License)

Wir vermeiden die Nutzung von Software unter Lizenzen mit starkem Copyleft.
Typische Vertreter sind:

* [GPL](https://de.wikipedia.org/wiki/GNU_General_Public_License)
* [EUPL](https://de.wikipedia.org/wiki/European_Union_Public_Licence)
* [AGPL](https://de.wikipedia.org/wiki/GNU_Affero_General_Public_License)


### Ausnahme Java

Eine Ausnahme bildet Java.
Java steht unter der GPL.
Für OpenJDK gilt aber die [GPL mit Ausnahmen für gelinkte Software](https://de.wikipedia.org/wiki/GPL_linking_exception).
Das bedeutet, Software die OpenJDK nutzt muss nicht zwangsläufig unter der GPL lizensiert werden.


### Prüfen und Dokumentieren

Um sicherzustellen, dass wir keine Lizenzverstöße begehen, müssen sämtliche Abhängigkeiten unserer Software geprüft und dokumentiert werden.

Auf Github nutzen wir dazu [GitHub Dependency Review](https://docs.github.com/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review), das ist im [oss-repository-en-template](https://github.com/it-at-m/oss-repository-en-template/blob/main/.github/workflows/dependency_review.yaml) bereits vorgegeben.

Das **zentrale it@M Policy File** ist definiert in [it-at-m/.github](https://github.com/it-at-m/.github/blob/main/workflow-configs/dependency_review.yaml) - [dort sind v.a. die Lizenzen mit starken Copyleft definiert](https://github.com/it-at-m/.github/blob/main/workflow-configs/dependency_review.yaml#L2), die wir vermeiden wollen.

Da es bei der Lizenzerkennung durchaus zu "false positives" kommen kann, können diese dort auf eine [Ignore-Liste](https://github.com/it-at-m/.github/blob/main/workflow-configs/dependency_review.yaml#L6) gesetzt werden.

Die Kompatibilität der genutzten Lizenzen können mit dem [JLA - Compatibility Checker](https://joinup.ec.europa.eu/collection/eupl/solution/joinup-licensing-assistant/jla-compatibility-checker) geprüft werden.
