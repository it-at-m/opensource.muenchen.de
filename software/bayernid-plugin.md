---
Source: SNow
application: BayernID - Plugin
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

As part of the project, a plugin for the integration of the Bayern ID to the specialized applications of the City of Munich was implemented using [Keycloak](keycloak).

---

## About the project

In the course of the digital opening of the city to the citizens, the BayernID will also be increasingly used. To make this possible, the City of Munich has developed a plugin for keycloak, which allows the integration of the BayernID into keycloak. This plugin is already provided by the City of Munich as open source software. It will be published as part of the piloting of the administration cloud on the repository of the open source platform being developed there.

The [BayernID](https://id.bayernportal.de/de/) is a digital identity that citizens can use in connection with the processing of digital administrative services.

With the BayernID, it is possible to identify oneself uniquely online using various levels of authentication. A plugin for Keycloak (RH-SSO) was implemented via the brokering mechanism to connect the specialized procedures to BayernID.

This makes it possible to easily integrate the registration via citizen account into the specialized applications of the City of Munich.



## Technical details

Integration with specialized procedures is performed by default using the SAML2 protocol. Since direct integration of each specialized procedure server is complex due to the need to exchange certificates and metadata, the City of Munich uses an intermediate identity provider (IDP) based on the Keycloak software (or its largely identical commercial counterpart RedHat Single Sign On (RH-SSO)). This has the advantage that the connected specialized procedures can only establish a position of trust with this IDP. Both OpenID-Connect (OIDC) and SAML2 are available as protocols for this purpose.

The plugin is also published on [Open CoDE](https://gitlab.opencode.de/landeshauptstadt-muenchen/bayernid-plugin), a joint platform of the public administration for the exchange of open source software.

