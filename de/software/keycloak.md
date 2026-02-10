---
title: Keycloak
developerlink: https://www.keycloak.org/
licensingmodel: open source
code: https://github.com/keycloak/keycloak
license: Apache
logo: /logo/keycloaklogo.svg
tags:
- infrastruktur
- devstack
---

__Keycloak__ ist ein Open-Source-Softwareprodukt, das Single Sign-On mit Identitäts- und Zugriffsmanagement für moderne Anwendungen und Dienste ermöglicht.

---

Die IT-Bebauungsrichtlinie *digitale Identitäten* legt fest dass digitale Identitäten, egal ob Mitarbeitende oder Bürger*innen betreffend, grundsätzlich im eigenen Rechenzentrum vorgehalten und mit Keycloak verwaltet werden.

Die Anbindung von Fachverfahren an die BayernID wurde über den Keycloak Brokering-Mechanismus das [BayernID - Plugin](bayernid-plugin) umgesetzt.
Genauso ist Keycloak die technische Basis für [Elster Nezo, ein Plugin zur Anbindung des Elster Unternehmenskontos](elster-nezo_plugin).

 Das [HTTP-Header-Plugin](https://github.com/it-at-m/keycloak-require-http-header-authenticator-plugin) prüft spezifische Header zur Zugangskontrolle.
 Das [Rollen-Plugin](https://github.com/it-at-m/keycloak-require-role-authenticator-plugin) den Zugriff auf Clients basierend auf Benutzerrollen steuert. 
 Das [Username-from-login-hint-Plugin](https://github.com/it-at-m/keycloak-username-from-login-hint-authenticator-plugin) extrahiert den Benutzernamen für eine nahtlose Anmeldung. 
 Das [Custom-OTP-Plugin](https://github.com/it-at-m/keycloak-custom-otp-plugin?tab=readme-ov-file) ermöglicht die Zwei-Faktor-Authentifizierung mit Einmal-Passwörtern, dies erhöht die Sicherheit beim Anmeldeprozess.

Weitere Keycloak-Plugins sind in in unseren [Github-Repositorien](https://github.com/orgs/it-at-m/repositories?q=keycloak) zu finden.
