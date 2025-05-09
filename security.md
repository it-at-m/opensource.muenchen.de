The following text is based on Chapter 2.4 by Dr. Thomas Reeg from *“Open Source in Municipalities – Part 2: Establishing Open Source Governance”* (https://www.kgst.de/doc/20241219A0004), published by [KGSt](https://www.kgst.de/) (Reeg, 2024).

## Security

Software security is particularly important when processing and storing personal data. This also applies especially to publicly released software. Secure software development is part of broader information security management (ISM), which aims to ensure the secure development and use of software – particularly open source software (OSS) (Reeg, 2024).

### Basic understanding of security-relevant aspects

Contributing developers – like all developers – should have a basic understanding of security-relevant aspects. The following points are of particular importance (Reeg, 2024):

- **Do not publish passwords**  
  Passwords must not appear in any Git repository, regardless of the platform. If this does happen, the relevant data must be immediately replaced, even if it causes extra effort (Reeg, 2024).

- **Confidentiality of infrastructure data**  
  Infrastructure data should not be published. Although this is less critical than exposing passwords, specific infrastructure configurations should always be separated from application code and stored in a separate infrastructure Git repository (Reeg, 2024).

- **Avoid naming individuals**  
  Comments should not mention names of individuals who are not directly involved in the GitHub repository. For example, business requirements should not include phrasing such as “Mr. Smith requested...” (Reeg, 2024).

- **Sensitive data in log outputs**  
  Care must be taken to ensure that no sensitive data appears in log outputs (Reeg, 2024).

- **Error details in frontend output**  
  Detailed error messages should not be displayed in frontend outputs (Reeg, 2024).

- **External resources**  
  Loading resources from external sources, such as JavaScript libraries, should be avoided (Reeg, 2024).

- **Cryptographic logic**  
  Custom implementation of cryptographic logic should be avoided to prevent security risks (Reeg, 2024).

- **Cookies**  
  When using cookies, attributes such as “Secure,” “HttpOnly,” and “SameSite” should be used whenever possible (Reeg, 2024).

By following these principles, software security can be significantly improved (Reeg, 2024).

### Reporting vulnerabilities

Unlike platforms like GitLab, GitHub does not offer a confidential channel for reporting security issues. Therefore, security-related bugs should not be submitted as public issues. Every project must provide the email address opensource@muenchen.de for reporting security vulnerabilities (Reeg, 2024).

### Automated tests

The internal CI/CD process includes the OWASP Dependency Check for risk analysis. On GitHub, the “Advanced Security Policy as Code” should be implemented, and the global security configuration must be enabled for all repositories (Reeg, 2024).

All open pull requests (PRs) and issues must be addressed within two weeks. After this period, they will be assigned to the repository maintainer for further action (Reeg, 2024).

It is also recommended to create a Software Bill of Materials (SBOM) to transparently list all used OSS components. This allows known vulnerabilities to be detected early and appropriate security measures to be taken (Reeg, 2024).

### OSS project maturity

When selecting and using open source software, project maturity is a key criterion for security. The following aspects should be assessed (Reeg, 2024):

- Stability and maturity level of the project  
- Size and activity of the community  
- Response time to security vulnerabilities  
- Quality of communication (e.g. handling of feature requests)  
- Transparency of release and patch processes  

Cross-referencing vulnerability databases (e.g. CVE) and reviewing code repositories help in forming a realistic risk assessment. OSS generally offers advantages over proprietary software due to its openness, but also requires internal analysis capabilities and defined evaluation criteria (Reeg, 2024).

### Public security testing

MGM Security Partners conducts public penetration tests for free and open source software (FOSS). In the past, the German Federal Office for Information Security (BSI) reviewed the source code of the Matrix messenger service and the Mastodon social media application and discovered vulnerabilities (Reeg, 2024).

MGM reserves the right to edit the results before publication (Reeg, 2024).

### Strategic recommendations and control

A key advantage of OSS is its transparency, which enables thorough security analysis. Control is possible in the OSS context, but requires both personnel and technical resources. Strategically, building internal expertise or cooperating with external OSS service providers can be beneficial. These often offer support models with security-audited updates (Reeg, 2024).

Close coordination between IT management and information security is necessary to implement these requirements. Inter-municipal cooperation can also help to standardize assessment processes, share results, and reduce effort (Reeg, 2024).

## Web Resources

If any points are unclear, it is recommended to consult the following resources:

- IT Baseline Protection Compendium  
- OWASP Top Ten List

## References

Reeg, T. (2024). Chapter 2.4. In *Open Source in Municipalities – Part 2: Establishing Open Source Governance*. Cologne: KGSt.
