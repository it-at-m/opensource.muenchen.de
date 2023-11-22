---
Source: SNow
title: BayernID - Plugin
developer: LHM
code: https://github.com/it-at-m/BayernID-Plugin
logo: https://id.bayernportal.de/cms/assets/images/64/BayernID_Icon-rund.625c9ab7.svg
licensingmodel: open source
tags:
- infrastruktur
- eigenentwicklung
- application
- start2021
---

Im Rahmen des Projekts wurde ein Plugin für die Einbindung der [BayernID](https://id.bayernportal.de/de/) an die Fachanwendungen der Landeshauptstadt München mittels [Keycloak](keycloak) umgesetzt.

---

## Über das Projekt

Im Zuge der digitalen Öffnung der Stadt hin zu den Bürger*innen wird auch die BayernID  verstärkt zum Einsatz kommen. Um dies zu ermöglichen wurde durch die Landeshauptstadt München ein eigenes Plugin für keycloak entwickelt, das die Integration der BayernID in keycloak ermöglicht. Dieses Plugin wird durch die Landeshauptstadt München bereits als Open Source Software bereitgestellt. Es wird im Rahmen der Pilotierung der Verwaltungscloud  auf dem Repository der dort entstehenden Open Source Plattform veröffentlicht.

Die BayernID ist eine digitale Identität, die Bürger*innen im Zusammenhang mit der Abwicklung digitaler Verwaltungsdienste einsetzen können.

Mit der BayernID ist es möglich, sich online mittels verschiedener Authentifizierungsstufen eindeutig zu identifizieren. Zur Anbindung der Fachverfahren an die BayernID wurde über den Brokering-Mechanismus ein Plugin für Keycloak (RH-SSO) umgesetzt.

Damit kann eine einfache Integration der Anmeldung per Bürgerkonto in die Fachanwendungen der Landeshauptstadt München umgesetzt werden.

## Technische Details

Die Integration mit Fachverfahren erfolgt standardmäßig per SAML2-Protokoll. Da eine direkte Integration jedes Fachverfahrens-Servers aufgrund auszutauschender Zertifikate und Metadaten aufwändig ist, setzt die Landeshauptstadt München einen zwischengeschalteten Identity Provider (IDP) auf Basis der Software Keycloak (beziehungsweise deren größtenteils baugleiches kommerzielles Pendant RedHat Single Sign On (RH-SSO)) ein. Dies hat den Vorteil, dass die angeschlossenen Fachverfahren nur mit diesem IDP eine Vertrauensstellung aufbauen. Dafür stehen sowohl OpenID-Connect (OIDC) als auch SAML2 als Protokoll zur Verfügung.

Das Plugin ist ebenfalls auf [Open CoDE](https://gitlab.opencode.de/landeshauptstadt-muenchen/bayernid-plugin) veröffentlicht, einer gemeinsamen Plattform der öffentlichen Verwaltung für den Austausch von Open Source Software.
