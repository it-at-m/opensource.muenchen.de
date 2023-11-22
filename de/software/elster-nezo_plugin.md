---
title: Elster Nezo
developer: LHM
code: https://github.com/it-at-m/ELSTER_NEZO_Plugin
licensingmodel: open source
license: MIT
tags: 
- eigenentwicklung
- infrastruktur
- application
- start2023
---

Mit dem Plugin __Elster Nezo - Plugin zur Anbindung des Elster Unternehmenskontos__ lässt sich über die Open Source Software [Keycloak](keycloak) eine Anbindung an das bundesweite Elster Unternehmenskonto herstellen.

---


## Über das Projekt

Die Landeshauptstadt München unterstützt seit Ende 2022 das ELSTER Unternehmenskonto für ausgewählte Online-Dienste. Unternehmen, deren Mitarbeiter*innen sich mit ELSTER-Zertifikaten anmelden, können sich damit zweifelsfrei identifizieren.

Nach [Wikipedia](https://de.wikipedia.org/wiki/Digitales_Unternehmenskonto) fungiert das Unternehmenskonto auf Basis der ELSTER-Technologie "..als Nutzerkonto im Sinne des Onlinezugangsgesetzes (OZG) und dient Organisationen – vor allem Unternehmen – als Zugang zu digitalen Dienstleistungen der Verwaltung.“

Die Anbindung eigener Fachverfahren oder Portale an das Elster Unternehmenskonto kann direkt im entsprechenden Verfahren erfolgen. Oder es wird eine Identity Provider Software zwischengeschaltet, wie beispielsweise die Open Source Software [Keycloak](https://www.keycloak.org/), mit der die Anbindung bei der Stadt München realisiert wurde.

Das benötigte Plugin für die Keycloak-Version vor 20.0.0, beziehungsweise für dessen Pendant RedHat Single-Sign-On (RH-SSO), wurde vom Entwicklerteam bei it@M umgesetzt und Open Source gestellt.


## Technische Details

Für eine native Anbindung an das [ELSTER Unternehmenskonto (NEZO)](https://mein-unternehmenskonto.de/public/#Startseite) ist Keycloak in der Version vor 20.0.0, sowie in der neuesten Version von RH-SSO 7.6 (zum Zeitpunkt der Plugin-Erstellung im Dezember 2022) nicht geeignet, da dort in der SAML-Response komplexe, ELSTER-eigene Datentypen verwendet werden.

Ab der Keycloak Version 20.0.0 existiert hierzu eine Anpassung. In den Vorversionen wird aber noch zusätzlicher Code in Form des bereitgestellten Plugins benötigt. Damit können die komplexen Datentypen in einfache Datentypen vom Typ String umwandelt werden, bevor die SAML-Response maschinell gelesen und verarbeitet wird.

Das Plugin muss innerhalb von Keycloak installiert werden, wie im Readme beschrieben.

Genutzt werden kann es auch für die kommerzielle Keycloak-Variante RH-SSO 7.6, die noch auf Keycloak 18.0.3 basiert (gemäß [Komponentenliste](https://access.redhat.com/articles/2342881)) oder für Organisationen, die noch eine ältere Keycloak-Version einsetzen müssen.

Das Plugin ist ebenfalls auf [Open CoDE](https://gitlab.opencode.de/landeshauptstadt-muenchen/ELSTER_NEZO_Plugi) veröffentlicht, einer gemeinsamen Plattform der öffentlichen Verwaltung für den Austausch von Open Source Software.
