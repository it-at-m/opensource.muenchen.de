# Best Practices to Implement GitHub Actions and Workflows

We offer you a lot of GitHub Actions in our Repository [lhm_actions](https://github.com/it-at-m/lhm_actions/) that are mainly used by workflows of [LHM Reference Architecture Templates](https://github.com/it-at-m/refarch-templates/)
and therefore in most of our project repositories. 

You can find the documentation to these GitHub Actions under [LHM Actions documentation](https://it-at-m.github.io/lhm_actions/actions).

Of course it is possible to use these actions also in projects that are not based on the templates of the Reference Architecure.

Although it might be neccessary that you have to implement your own action or workflow.

In this case please take care about security vulnerabilities and that you adhere to best practices to implement GitHub Actions.

The most important are (all of them you will find under [GitHub Actions Security](https://docs.github.com/en/actions/reference/security/secure-use)):

1. **[Use an intermediate environment variable](https://docs.github.com/en/actions/reference/security/secure-use#use-an-intermediate-environment-variable)**
1. **[Pin actions to a full-length commit SHA](https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions)**
1. **[Restricting permissions for tokens](https://docs.github.com/en/actions/reference/security/secure-use#restricting-permissions-for-tokens)**
1. **[Using workflow templates for code scanning](https://docs.github.com/en/actions/reference/security/secure-use#using-workflow-templates-for-code-scanning)**: we offer already an action to use CodeQL - [Action ](https://github.com/it-at-m/lhm_actions/blob/main/action-templates/actions/action-codeql/action.yml) und einen [Workflow ](https://github.com/it-at-m/refarch-templates/blob/main/.github/workflows/codeql.yml). Just use it!



## Further Reading

* GitHub [Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use)
* Salesforce [Github Actions Security Best Practices](https://engineering.salesforce.com/github-actions-security-best-practices-b8f9df5c75f5/)
* GitLab about Supply Chain Attacken [Pipeline security lessons from March supply chain incidents](https://about.gitlab.com/blog/pipeline-security-lessons-from-march-supply-chain-incidents/)
