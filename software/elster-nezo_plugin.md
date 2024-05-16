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

With the plugin **Elster Nezo - Plugin zur Anbindung des Elster Unternehmenskontos** a connection to the nationwide Elster company account can be established via the open source software Keycloak.

---

## About the project

The City of Munich has been supporting the ELSTER corporate account for selected online services since the end of 2022. Companies whose employees\* log in with ELSTER certificates can thus identify themselves beyond doubt.

According to [Wikipedia](https://de.wikipedia.org/wiki/Digitales_Unternehmenskonto), the company account based on ELSTER technology "...functions as a user account within the meaning of the Online Access Act (OZG) and serves organizations - especially companies - as access to digital services of the administration."

The connection of own specialized procedures or portals to the Elster enterprise account can be done directly in the corresponding procedure. Or an identity provider software is interposed, such as the open source software [Keycloak](keycloak), with which the connection was implemented at the city of Munich.

The required plugin for the Keycloak version prior to 20.0.0, or for its counterpart RedHat Single-Sign-On (RH-SSO), was implemented and made open source by the development team at it@M.

## Technical details

Keycloak in the version prior to 20.0.0, as well as in the latest version of RH-SSO 7.6 (at the time of plugin creation in December 2022) is not suitable for a native connection to the [ELSTER Enterprise Account (NEZO)](https://mein-unternehmenskonto.de/public/#Startseite), as complex, ELSTER-specific data types are used there in the SAML response.

As of Keycloak version 20.0.0, an adjustment exists for this. In the previous versions, however, additional code is still required in the form of the plugin provided. This allows the complex data types to be converted to simple data types of type string before the SAML response is read and processed by machine.

The plugin must be installed within Keycloak as described in the readme.

It can also be used for the commercial Keycloak variant RH-SSO 7.6, which is still based on Keycloak 18.0.3 (according to [Component List](https://access.redhat.com/articles/2342881)) or for organizations that still need to use an older Keycloak version.

The plugin is also published on [Open CoDE](https://gitlab.opencode.de/landeshauptstadt-muenchen/ELSTER_NEZO_Plugi), a joint public administration platform for the exchange of open source software.
