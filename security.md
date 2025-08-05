## Security

Software security is a key requirement, especially when processing and storing personal data.  
This is particularly true for published software.  
Secure software development is part of a broader information security management strategy that aims to ensure the secure development and use of software – especially open source software.

A major advantage of open source software lies in its __transparency__, which enables well-founded security analyses.  
Control is possible in the open source environment but requires both personnel and technical expertise.  
Building internal competencies or collaborating with external open source service providers can be a strategic approach.  
These providers often offer support models with security-verified updates.

[Security through obscurity](https://wikipedia.org/wiki/Security_through_obscurity) – meaning security through concealment – is a problematic approach, as it creates a false sense of security and merely hides vulnerabilities instead of systematically addressing them. Attackers can still uncover such weaknesses over time, for example, through reverse engineering.  
In contrast, open source software relies on transparency.  
The openly accessible source code enables independent reviews and continuous improvement. Security here does not arise from secrecy, but from verifiable and robust mechanisms, supported by community knowledge, proven security practices, and regular updates.  
Openness not only fosters innovation but also provides a more reliable security foundation in the long term.

The strategic positions of both the [BSI](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Freie-Software/freie-software.html) and [AG KRITIS](https://ag.kritis.info/politische-forderungen/#opensource) advocate for the use of open source software to improve IT security and reduce vendor dependencies.

## Use

When [selecting and using open source software](usability-analysis), project maturity is a central criterion for ensuring security.  
No distinction is made between [third-party](use) and [internally developed](publish) software – the same requirements apply to both.

A clear advantage of open source software lies in its transparency, which makes in-depth security analyses possible in the first place – unlike proprietary software.

In our [usability analysis of free software](usability-analysis#security), security is therefore the most important factor alongside code quality.

## Publish

The City of Munich follows the principle of [Public Money, Public Code](publish):  
Custom-developed software should be published as open source wherever possible.  
The goal is not only to ensure our own IT security, but also to enable secure, transparent, and traceable reuse by third parties.

### SBOM

A **Software Bill of Materials (SBOM)** is a structured list of all components contained in a piece of software, including open source and third-party libraries.  
It creates transparency about dependencies and helps identify and resolve known vulnerabilities at an early stage.  
The City of Munich uses SBOMs to specifically improve security in the software supply chain. This aligns with the recommendations of the [Federal Office for Information Security (BSI)](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/TR-03183-2-SBOM-Anforderungen.html), which defines SBOMs as a central element for cyber resilience in its technical guideline TR-03183.

For internally developed software, the [CycloneDX](https://cyclonedx.org/) format is used.

The [RefArch](https://refarch.oss.muenchen.de/cross-cutting-concepts/security.html) provides standardized mechanisms for this: in all templates (e.g., Java- and NodeJS-based templates as well as the API Gateway), an SBOM is automatically generated and made available via a standardized endpoint (`/actuator/sbom/application`).  
This facilitates security evaluation but also entails risks – for example, if SBOMs in non-public projects inadvertently disclose confidential information. Therefore, it is recommended to **disable external visibility** of the SBOM endpoint for non-public or security-critical applications.

### Automated Tests

The internal CI/CD process includes the OWASP Dependency Check for risk analysis.  
On GitHub, the **"Advanced Security Policy as Code"** must be implemented, and the **global security configuration** must be enabled for all repositories.

Security-relevant pull requests and issues must be addressed within two weeks. After this period, they are escalated to the respective maintainers.

### Reporting Vulnerabilities

Unlike other platforms such as GitLab, GitHub does **not** offer a way to **confidentially report security issues**. Therefore, security-related bugs should **not** be submitted as public, standard issues.  
Each project must provide a **dedicated email address** (e.g., [opensource@muenchen.de](mailto:opensource@muenchen.de)) through which security vulnerabilities can be reported (**Responsible Disclosure**).
