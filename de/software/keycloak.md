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

 Das [HTTP-Header-Plugin](https://github.com/it-at-m/keycloak-require-http-header-authenticator-plugin) prüft spezifische Header zur Zugangskontrolle, während das [Rollen-Plugin](https://github.com/it-at-m/keycloak-require-role-authenticator-plugin) den Zugriff auf Clients basierend auf Benutzerrollen steuert. Das [Username-from-login-hint-Plugin](https://github.com/it-at-m/keycloak-username-from-login-hint-authenticator-plugin) extrahiert den Benutzernamen für eine nahtlose Anmeldung. Das [Custom-OTP-Plugin](https://github.com/it-at-m/keycloak-custom-otp-plugin?tab=readme-ov-file) ermöglicht die Zwei-Faktor-Authentifizierung mit Einmal-Passwörtern, was die Sicherheit beim Anmeldeprozess erhöht.

 https://github.com/orgs/it-at-m/repositories?q=keycloak

 10 repositories

    eappointment

The current appointment system of the city of Munich has been replaced by Zeitmanagementsystem (ZMS) provided by the state of Berlin.
PHP
1
18
BayernID-Plugin
Plugin für Keycloak (RH-SSO) zur Anbindung der BayernID über den Brokering-Mechanismus
Java
0
6
appswitcher-server
Server component for a Google-like app switching experience.
Java
2
8
keycloak-custom-otp-plugin
FreeMarker
0
0
keycloak-plugins
Java
0
1
keycloak-username-from-login-hint-authenticator-plugin
Java
0
0
keycloak-require-role-authenticator-plugin
Java
0
0
keycloak-require-http-header-authenticator-plugin
Java
0
0
keycloak-authority-mapper-plugin
Java
0
0
ELSTER_NEZO_Plugin
Plugin for Keycloak or RH-SSO for connecting the ELSTER company account / NEZO
Java
0

    3

Footer
© 2026 GitHub, Inc.
Footer navigation

    Terms
    Privacy
    Security
    Status
    Communit