## Security

Software security is particularly important when processing and storing personal data.  
Secure software is a key area of information security management (ISM), covering both the secure use of software and secure software development.  
This applies equally to free software and proprietary software.

One major advantage of open source software lies in its __transparency__, which makes in-depth security analyses possible in the first place.  
Source code analysis is only possible with open source software, but it requires both personnel and technical expertise.  
Strategically, it makes sense to build internal expertise or to collaborate with external open source software service providers.  
Alternatively, open source software can be examined for security by different actors.  
These may include government institutions, commercial companies, or independent security experts who identify vulnerabilities.  
This way, both developers and users have the opportunity to fix these vulnerabilities quickly.

[Security through obscurity](https://de.wikipedia.org/wiki/Security_through_obscurity) – that is, security through concealment – is a problematic approach because it creates a false sense of security and merely hides weaknesses instead of systematically addressing them.  
Attackers can still discover such vulnerabilities over time, for example through reverse engineering or the trade in zero-day exploits.

Openness not only fosters innovation but also provides a more reliable security foundation in the long term.  
For this reason, both the [BSI](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Freie-Software/freie-software.html) and [AG KRITIS](https://ag.kritis.info/politische-forderungen/#opensource) advocate the use of open source software to improve IT security and reduce vendor lock-in.

## Use

When [selecting and using open source software](./usability-analysis), project maturity is a central criterion for security.  
No distinction is made between externally used ([Use](use)) and internally developed (Inhouse) software—both are subject to the same requirements.

The transparency of open source can only be effectively leveraged if:

- sufficient personnel and technical expertise are available  
- a systematic evaluation methodology is established  

In our [usability analysis of free software](usability-analysis#security), security is therefore, alongside code quality, the most important factor.

## Publish

The City of Munich follows the principle of [Public Money, Public Code](./publish.md):  
Whenever possible, software developed in-house should be released as open source.  
The goal is not only to ensure the city’s own IT security but also to enable others to reuse the software securely, transparently, and in a traceable way.

### SBOM

A Software Bill of Materials (SBOM) is a structured list of all components contained in a software product, including open source and third-party libraries.  
It creates transparency about dependencies and helps identify and close known vulnerabilities at an early stage.  
The City of Munich uses SBOMs to specifically improve security in the software supply chain. This follows the recommendations of the [BSI](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/TR-03183-2-SBOM-Anforderungen.html), which defines SBOMs as a central element for cyber resilience in its Technical Guideline TR-03183.

For software developed in-house, LHM uses the [CycloneDX](https://cyclonedx.org/) format.

The [RefArch](https://refarch.oss.muenchen.de/cross-cutting-concepts/security.html) provides standardized mechanisms for this purpose:  
In all templates (e.g., Java- and NodeJS-based templates as well as the API gateway), an SBOM is automatically generated and made available via a standardized endpoint (/actuator/sbom/application).  
While this facilitates security assessment, it also carries risks if SBOMs in non-public projects inadvertently disclose sensitive information.  
Therefore, it is recommended to disable external visibility of the SBOM endpoint in non-public or security-critical applications.

### Automated Tests

The internal CI/CD process includes the [OWASP](https://de.wikipedia.org/wiki/Open_Worldwide_Application_Security_Project) Dependency Check for risk analysis.  
On GitHub, the "Advanced Security Policy as Code" should be implemented, and the global security configuration must be enabled for all repositories.

Security-related pull requests and issues with a [CVSS critical and high](https://nvd.nist.gov/vuln-metrics/cvss) rating must be addressed within __30 days__.

### Reporting Vulnerabilities

Unlike other platforms such as GitLab, GitHub does not provide a way to confidentially report security issues.  
Therefore, security-related bugs should not be reported as public, regular issues.  
For each project at LHM, a dedicated email address (e.g., [opensource@muenchen.de](mailto:opensource@muenchen.de)) must be provided through which vulnerabilities can be reported (Responsible Disclosure).
