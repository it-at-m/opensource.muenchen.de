---
title: Keycloak
developerlink: https://www.keycloak.org/
licensingmodel: open source
code: https://github.com/keycloak/keycloak
logo: /logo/keycloaklogo.svg
license: Apache
tags:
- infrastruktur
- devstack
---

__Keycloak__ is an open source software product that enables single sign-on with identity and access management for modern applications and services.

---

The IT building guidelines for digital identities stipulate that digital identities, regardless of whether they concern employees or citizens, are always stored in the company's own data center and managed with Keycloak.

Connecting to BayernID as login mechanism was implemented via the Keycloak brokering mechanism [BayernID - Plugin](bayernid-plugin).
Keycloak is also the technical basis for [Elster Nezo, a plugin for connecting the Elster company account](elster-nezo_plugin). (Note: Plugin only required for Keycloak version < 20.0)

The [HTTP Header Plugin](https://github.com/it-at-m/keycloak-require-http-header-authenticator-plugin) checks specific HTTP-headers for access control.  
The [Role Plugin](https://github.com/it-at-m/keycloak-require-role-authenticator-plugin) manages access to clients based on user roles.  
The [Username-from-login-hint Plugin](https://github.com/it-at-m/keycloak-username-from-login-hint-authenticator-plugin) extracts the username from a request parameter for a seamless login.  
The [Custom OTP Plugin](https://github.com/it-at-m/keycloak-custom-otp-plugin?tab=readme-ov-file) adds functionality in the area of two-factor authentication with one-time passwords (TOTP), enhancing security during the login process.  

More Keycloak plugins can be found in our [GitHub repositories](https://github.com/orgs/it-at-m/repositories?q=keycloak).
