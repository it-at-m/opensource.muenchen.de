# Öffentliches Arbeiten

Als Entwickler:in ist es vielleicht ungewohnt, Code öffentlich einsehbar zu veröffentlichen.  
Kann dann die ganze Welt eventuelle Fehler sehen?  
Ja, aber die gute Nachricht ist: Die Menschen, die eure Fehler auch verstehen, sind sehr oft bereit, euch zu helfen.  
Gerade die Welt der freien Software ist geprägt von einer konstruktiven Fehlerkultur.  
Im besten Fall finden andere da draußen Fehler oder helfen uns, den Code schöner zu machen.  
Im schlimmsten Fall liest einfach niemand euren Code.

Natürlich gibt es einige "Don'ts" aus dem Bereich [Security](security) (keine Passwörter, personenbezogene Daten etc.), aber das ist auch ohne FOSS-Veröffentlichung Stand der Technik.  
Vor der Veröffentlichung in einem öffentlichen Repository sollte die gesamte Git-Historie und alle zugehörigen Artefakte sorgfältig auf versehentlich eingestellte Geheimnisse oder sensible Daten überprüft werden. Falls solche Informationen gefunden werden, müssen die betroffenen Geheimnisse sofort widerrufen oder rotiert werden. Das Entfernen von Geheimnissen aus der aktuellen Revision entfernt sie nicht aus der Historie, aus Klonen, Forks oder gecachten Referenzen.

Prinzipiell dürfen alle Codeschaffenden unter Klarnamen und/oder mit ihrem privaten, persönlichen GitHub-Profil arbeiten.  
Aber natürlich sind auch rein dienstliche Accounts sowie pseudonyme Accounts erlaubt.

Wenn ihr dennoch Hilfe beim Veröffentlichen von Code braucht, schaut euch gern an, was die Kolleg:innen auf [github.com/it-at-m](https://github.com/it-at-m) schon veröffentlicht haben.

> [!NOTE]
> Wer sich für seine erste Version später nicht schämt, hat zu spät veröffentlicht.
>
> *(volkstümliche Redewendung)*

Sollte es Vorbehalte der Fachbereiche geben, ihre Anforderungen öffentlich zu entwickeln, können ausnahmsweise die internen Anforderungen zu einem Open-Source-Projekt auch LHM-intern dokumentiert werden, während der Code [von Anfang an](https://kb.prototypefund.de/books/communityaufbau-und-zusammenhalt/page/kommunikationsstrategien-fur-community-building-und-management) in einem Repository gepflegt wird.  
Das Repository kann zunächst privat bleiben und wird nach Freigabe veröffentlicht.  
Den Code zuerst in einem internen Repository zu verwalten und später in ein öffentliches Repository zu überführen, erzeugt einen relativ hohen Aufwand für die Bereinigung von Interna.
