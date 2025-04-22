# Security

Software security is a crucial requirement, especially when processing and storing personal data. This is particularly true for published software.

## Basic Understanding of Security-Relevant Aspects

Contributing developers should – like all developers – possess a fundamental understanding of security-relevant aspects. The following points are of particular importance:

### No Publication of Passwords: Passwords must not appear in any Git repository, regardless of the platform. If this does occur, the affected data must be promptly changed, even if it incurs additional effort.

### Confidentiality of Infrastructure Data: It is important not to publish infrastructure data. While this is less severe than the disclosure of passwords, specific infrastructure settings should always be separated from the application code and stored in a separate infrastructure Git repository.

### Avoid Mentioning Individuals: Comments should not mention the names of individuals who do not directly contribute to the GitHub repository. For example, technical requirements should not be phrased as “Mr. Maier has requested …”.

### Sensitive Data in Log Outputs: Care must be taken to ensure that no sensitive data appears in log outputs.

### Error Details in Frontend Outputs: Additionally, detailed error messages should not be displayed in frontend outputs.

### External Sources: The loading of resources from external sources, such as JavaScript libraries, should be avoided.

### Cryptographic Logic: The implementation of custom cryptographic logic should be avoided to mitigate security risks.

### Cookies: When using cookies, it is important to ensure that the attributes “Secure,” “HttpOnly,” and “SameSite” are used wherever possible.

By adhering to these principles, the security of the software can be significantly enhanced.

## Reporting Security Vulnerabilities

Unlike other platforms such as GitLab, GitHub does not provide a means for confidential reporting of security issues. Therefore, security-related bugs should not be reported as public, normal issues. Each project must provide the email address opensource@muenchen.de for reporting security-related bugs.

## Automated Testing

The internal CI/CD process includes the OWASP Dependency Check for risk analysis. On GitHub, the "Advanced Security Policy as Code" should be implemented, and the global security configuration must be activated for all repositories. 
All open Pull Requests (PR) and issues must be addressed within two weeks. After this period, they will be assigned to the repository maintainer for further handling.

## Public Security Tests

MGM Security Partners conducts public security tests (penetration tests) for free and open source software (FOSS). In the past, the Federal Office for Information Security (BSI) has reviewed the source code of the messaging service Matrix and the social media application Mastodon, discovering security vulnerabilities in the process. 
In the result reports, MGM reserves the right to adjust the texts and formats compared to confidential tests so that they can be published.

## Web Links

If there are uncertainties regarding specific points, it is recommended to take a look at the following resources:

- [IT-Grundschutz-Kompendium](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/IT-Grundschutz-Kompendium/it-grundschutz-kompendium_node.html)
- [OWASP List](https://owasp.org/www-project-top-ten/)