## Security

Software security is an important requirement, especially when processing and storing personal data.
Secure software is part of comprehensive information security management (ISM), which is intended to make both the use of software and in-house development secure.
This applies equally to free software and proprietary software.

A major advantage of open source software lies in its __transparency__, which makes well-founded security analyses possible in the first place.
Comprehensive control is only possible with open source software, but requires human and technical resources.
It makes strategic sense to build up your own expertise or to work with external open source software service providers.
However, open source software can also be tested for security by various external players.
These are government institutions, commercial companies but also private individuals who find security gaps
This gives developers, but also users, an opportunity to eliminate these gaps quickly and comprehensively.

[Security through obscurity](https://en.wikipedia.org/wiki/Security_through_obscurity) is a problematic approach, as it gives a false sense of security and merely hides vulnerabilities instead of systematically eliminating them.
Attackers can still uncover such gaps over time, for example through reverse engineering or by trading in zero-day exploits.

Openness not only promotes innovation, but also offers a more reliable security basis in the long term.
The strategic position of the [BSI](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Freie-Software/freie-software.html) and the [AG KRITIS](https://ag.kritis.info/politische-forderungen/#opensource) also call for the use of open source software to improve IT security and reduce vendor dependencies.


## Use

In the [selection and use of open source software](usability-analysis), project maturity is a central criterion for security.
No distinction is made between [deployed](use) and [internally developed](publish) software; the same requirements apply to both.

However, this transparency can only be used effectively if

- sufficient human and technical resources are available
- a systematic evaluation methodology is established

In our [usability analysis of free software](usability-analysis#security), security is therefore the most important factor alongside code quality.

## Publish

The City of Munich follows the principle of [public money, public code](publish):
Software developed in-house should be published as open source wherever possible.
The aim is not only to guarantee our own IT security, but also to enable third parties to reuse the software in a secure, transparent and traceable manner.

### SBOM

A Software Bill of Materials (SBOM) is a structured list of all components contained in a software, including open source and third-party libraries.
It creates transparency about dependencies and helps to identify and rectify known security vulnerabilities at an early stage.
The City of Munich uses SBOMs to specifically improve security in the software supply chain. In doing so, it is following the recommendations of the [German Federal Office for Information Security (BSI)](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/TR-03183-2-SBOM-Anforderungen.html), which defines SBOMs as a central element of cyber resilience in Technical Guideline TR-03183.

The [CycloneDX](https://cyclonedx.org/) format is used for internally developed software.

The [RefArch](https://refarch.oss.muenchen.de/cross-cutting-concepts/security.html) provides standardized mechanisms for this: An SBOM is automatically generated in all templates (e.g. Java- and NodeJS-based templates as well as the API gateway) and provided via a standardized endpoint (/actuator/sbom/application).
This facilitates the security assessment, but also harbors risks if, for example, SBOMs in non-public projects unintentionally disclose confidential information. It is therefore recommended to deactivate the external visibility of the SBOM endpoint for non-public or security-critical applications.

### Automated tests

The internal CI/CD process includes the OWASP Dependency Check for risk analysis.
The “Advanced Security Policy as Code” must be implemented on GitHub and the global security configuration must be activated for all repositories.

Security-related pull requests and issues must be processed within two weeks. After this period, they will be forwarded to the respective maintainers.

### Reporting security vulnerabilities

In contrast to other platforms such as GitLab, GitHub does not offer the option to report security issues confidentially. Therefore, security-related bugs should not be reported as public, normal issues.
Each project must provide a dedicated e-mail address (e.g. [opensource@muenchen.de](mailto:opensource@muenchen.de)) that can be used to report security vulnerabilities (Responsible Disclosure).
