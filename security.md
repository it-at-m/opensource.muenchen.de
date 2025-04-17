# Security

Software security is a crucial requirement, especially when processing and storing personal data. This is particularly true for published software.

## Basic Understanding of Security-Relevant Aspects

Contributing developers should – like all developers – possess a fundamental understanding of security-relevant aspects. The following points are of particular importance:

1. **No Publication of Passwords**: It is essential to avoid publishing passwords (e.g., for databases or external services). Passwords must not appear in any Git repository, whether local, on git.muenchen.de, or github.com. Should an incident occur, it is unfortunate but not uncommon. In such cases, the relevant data must be promptly replaced. This may involve additional effort, such as contacting the database team, but it is imperative. The old password is no longer usable in this context and does not necessarily need to be removed from the Git history.

2. **Confidentiality of Infrastructure Data**: It is also crucial to refrain from publishing infrastructure data (e.g., Infrastructure as Code (IaC), OpenShift objects, IP addresses, and internal domains). Although this is not as severe as disclosing passwords, the specific infrastructure settings should always be separated from the application code and stored in a separate infrastructure Git repository.

3. **Avoid Mentioning Individuals**: Comments should not mention the names of individuals who do not directly contribute to the GitHub repository. For example, technical requirements should not be phrased as “Mr. Maier has requested …”.

4. **Sensitive Data in Log Outputs**: Care must be taken to ensure that no sensitive data appears in log outputs.

5. **Error Details in Frontend Outputs**: Additionally, detailed error messages should not be displayed in frontend outputs.

6. **External Sources**: The loading of resources from external sources, such as JavaScript libraries, should be avoided.

7. **Cryptographic Logic**: The implementation of custom cryptographic logic should be avoided to mitigate security risks.

8. **Cookies**: When using cookies, it is important to ensure that the attributes “Secure,” “HttpOnly,” and “SameSite” are used wherever possible.

By adhering to these principles, the security of the software can be significantly enhanced.

## Reporting Security Vulnerabilities

Unlike other platforms such as GitLab, GitHub does not provide a means for confidential reporting of security issues. Therefore, security-related bugs should not be reported as public, normal issues. Each project must provide the email address opensource@muenchen.de for reporting security-related bugs.

## Automated Testing

The internal Continuous Integration/Continuous Deployment (CI/CD) process includes the OWASP Dependency Check, which must be integrated into the build process for risk analysis.

On GitHub, the "Advanced Security Policy as Code" should be incorporated into the actions. The global security configuration "it@M Security Config" (for administrators only) must be activated for all repositories. This configuration includes:

- **Push Protection**: Blocks commits that contain supported secret data.

Additionally, the Renovate Bot should be activated to enable fixes for Dependabot alerts (default configuration). It is important to monitor and address all security alerts in the security tab of the repositories.

All open Pull Requests (PR) and issues must be addressed within two weeks. After this period, all open PRs and issues will be assigned to the maintainer of the repository for further handling. The "itm-security" team will be notified of open alerts and will actively reach out to the relevant teams.

## Public Security Tests

MGM Security Partners conducts public security tests (penetration tests) for free and open source software (FOSS). In the past, the Federal Office for Information Security (BSI) has reviewed the source code of the messaging service Matrix and the social media application Mastodon, discovering security vulnerabilities in the process. In the result reports, MGM reserves the right to adjust the texts and formats compared to confidential tests so that they can be published.

## Web Links

If there are uncertainties regarding specific points, it is recommended to take a look at the following resources:

- [IT-Grundschutz-Kompendium](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/IT-Grundschutz-Kompendium/it-grundschutz-kompendium_node.html)
- [OWASP List](https://owasp.org/www-project-top-ten/)