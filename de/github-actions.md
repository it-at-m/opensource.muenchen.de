# Best Practices zur Implementierung von GitHub Actions und Workflows

Die [von uns angebotene LHM-Dokumentation zu GitHub Actions](https://it-at-m.github.io/lhm_actions/actions) in [lhm_actions](https://github.com/it-at-m/lhm_actions/) werden hauptsächlich von Workflows der [LHM-Referenzarchitekturvorlagen](https://github.com/it-at-m/refarch-templates/) und somit in den meisten unserer Projekt-Repositorys verwendet.

Diese Aktionen können auch in Projekten verwendet werden, die nicht auf den Referenzarchitekturvorlagen basieren.
Möglicherweise ist es jedoch erforderlich, dass Sie eine eigene Aktion oder einen eigenen Workflow implementieren müssen.
Achten Sie in diesem Fall bitte auf Sicherheitslücken und halten Sie sich an die [Sicherheitsrichtlinien für das Schreiben von Workflows und die Nutzung von GitHub-Actions-Funktionen](https://docs.github.com/en/actions/reference/security/secure-use), insbesondere:




1. [Verwenden einer Zwischenumgebungsvariablen](https://docs.github.com/de/actions/reference/security/secure-use#use-an-intermediate-environment-variable)
1. [Verwenden von Drittanbieteraktionen](https://docs.github.com/de/actions/reference/security/secure-use#using-third-party-actions)
1. [Einschränken von Berechtigungen für Token](https://docs.github.com/de/actions/reference/security/secure-use#restricting-permissions-for-tokens)
1. [Sicherheitspraktiken zum Schreiben von Workflows und zum Verwenden von GitHub Actions Features.](https://docs.github.com/de/actions/reference/security/secure-use#using-workflow-templates-for-code-scanning): Wir bieten bereits eine [action](https://github.com/it-at-m/lhm_actions/blob/main/action-templates/actions/action-codeql/action.yml) und einen [Workflow](https://github.com/it-at-m/refarch-templates/blob/main/.github/workflows/codeql.yml) zur Verwendung von CodeQL an.





## Weblinks

* GitHub [Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use)
* Salesforce [Github Actions Security Best Practices](https://engineering.salesforce.com/github-actions-security-best-practices-b8f9df5c75f5/)
* GitLab about Supply Chain Attacken [Pipeline security lessons from March supply chain incidents](https://about.gitlab.com/blog/pipeline-security-lessons-from-march-supply-chain-incidents/)
