## Security

Software security is especially important when processing and storing personal data. This applies in particular to published software. Secure software development is part of a broader information security management (ISM) strategy that aims to ensure both in-house development and the use of software – especially Open Source Software (OSS) – are secure.

A key advantage of Open Source Software lies in its transparency, which enables in-depth security analyses. Control is possible in the open source environment, but requires personnel and technical expertise. Strategically, it can be beneficial to build internal competencies or collaborate with external OSS service providers. These often offer support models with security-reviewed updates.

**Security through obscurity** is a problematic approach, as it conveys a false sense of security and merely hides vulnerabilities instead of systematically addressing them. Attackers can still uncover such weaknesses over time, e.g., through reverse engineering. In contrast, OSS relies on transparency. The openly available source code allows for independent reviews and continuous improvement. Security here does not stem from secrecy, but from verifiable and robust mechanisms, supported by community knowledge, proven security practices, and regular updates. Openness not only fosters innovation, but also provides a more reliable long-term security foundation. (See https://wikipedia.org/wiki/Security_through_obscurity)

A close integration of IT management and information security is necessary to meet these requirements. Intermunicipal collaboration can also help standardize evaluation processes, share results, and reduce effort.

The strategic position of the [BSI](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Freie-Software/freie-software.html), as well as that of the [AG KRITIS](https://ag.kritis.info/politische-forderungen/#opensource), also advocate the use of open-source software to improve IT security and reduce vendor dependencies.

## Use

### Project Maturity of OSS

When [selecting and using Open Source Software](https://opensource.muenchen.de/de/usability-analysis.html), project maturity is a key criterion for security.  
No distinction is made between software that is used ([Use](use.md)) and software that is developed in-house – the same requirements apply to both.

A clear advantage of Open Source Software lies in its transparency, which enables deep security analyses in the first place – unlike proprietary software.

However, this transparency can only be effectively used if:

- sufficient personnel and technical resources are available
- a systematic evaluation methodology is established

### CVE

Comparing with vulnerability databases (e.g., CVE) and inspecting code repositories is helpful to obtain a realistic risk profile. OSS inherently offers advantages over proprietary software due to its openness, but also requires in-house analysis capabilities and defined evaluation criteria.

## Publish

The City of Munich follows the principle of [Public Money, Public Code](./publish.md): Software developed in-house should be published as open source wherever possible. The aim is not only to ensure the city's own IT security but also to enable others to securely and transparently reuse the software.

### SBOM

A Software Bill of Materials (SBOM) is a structured list of all components contained in a piece of software, including open source and third-party libraries. It provides transparency about dependencies and helps identify and resolve known vulnerabilities early.

The City of Munich uses SBOMs to specifically improve security in the software supply chain. This follows the recommendations of the [Federal Office for Information Security (BSI)](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/TR-03183-2-SBOM-Anforderungen.html), which defines SBOMs as a central element of cyber resilience in Technical Guideline TR-03183.

The [CycloneDX](https://cyclonedx.org/) format is used for both in-house developed and used software.

The [RefArch](https://refarch.oss.muenchen.de/cross-cutting-concepts/security.html) provides standardized mechanisms for this: in all templates (e.g., Java- and NodeJS-based templates and the API gateway), an SBOM is automatically generated and made available via a standardized endpoint (/actuator/sbom/application). This facilitates security assessment but also poses risks if SBOMs in non-public projects unintentionally disclose confidential information. It is therefore recommended to deactivate the external visibility of the SBOM endpoint for non-public or security-critical applications.

### Automated Tests

The internal CI/CD process includes the OWASP Dependency Check for risk analysis. On GitHub, the "Advanced Security Policy as Code" should be implemented, and the global security configuration must be activated for all repositories.

Security-related pull requests and issues must be addressed within two weeks. After this period, they are forwarded to the respective maintainers.

### Reporting Vulnerabilities

Unlike platforms such as GitLab, GitHub does not offer a way to report security issues confidentially. Therefore, security-related bugs should not be submitted as public, normal issues. Every project must provide a dedicated email address (e.g., [opensource@muenchen.de](mailto:opensource@muenchen.de)) through which vulnerabilities can be reported (Responsible Disclosure).
